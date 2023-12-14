import Layout from "@/admin-components/shared/layout";
import { useState } from "react";
import Image from "next/image";
import AWS from "../../module/aws.module";
import axios from "axios";
import useSWR, { mutate } from "swr";
import {
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
  Skeleton,
  Pagination,
  Progress,
  Select,
} from "antd";
axios.defaults.baseURL = "http://localhost:8080/";

const s3 = new AWS.S3();

const fetcher = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const Purchasefetcher = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const AdminLayout = () => {
  const [productForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormdata] = useState(null);
  const [current, setCurrent] = useState(1);
  const { data: products, isLoading } = useSWR(
    `/product?page=${current}`,
    fetcher,
    { refreshInterval: 3000 }
  );

  const { data: purchaseData } = useSWR(`/purchase`, Purchasefetcher, {
    refreshInterval: 3000,
  });

  const [uploading, setUploading] = useState({
    state: null,
    progress: 0,
  });

  if (isLoading) return <Skeleton active />;

  const onProductCreate = async (value) => {
    try {
      await axios.post("/product", value);
      mutate("/product");
      setFormdata(null);
    } catch (error) {
      message.error("Create Falied");
    } finally {
      setIsModalOpen(false);
      productForm.resetFields();
    }
  };

  const onProductSave = async (value) => {
    try {
      await axios.put(`/product/${formdata._id}`, value);
      mutate("/product");
      setFormdata(null);
      productForm.setFieldsValue(null);
    } catch (error) {
      message.error("Update Falied");
    } finally {
      setIsModalOpen(false);
      productForm.resetFields();
    }
  };

  const onProductEdit = async (value) => {
    setFormdata(value);
    productForm.setFieldsValue(value);
    setIsModalOpen(true);
  };

  const onProductDelete = async (id) => {
    try {
      await axios.delete(`/product/${id}`);
      mutate(`/product`);
      setFormdata(null);
    } catch (error) {
      message.error("Delete Falied");
    }
  };

  const onProductImgUpload = (id, index) => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      input.remove();
      const uploader = s3.upload({
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
        Key: file.name,
        Body: file,
        ACL: "public-read",
      });
      uploader.on("httpUploadProgress", ({ total, loaded }) => {
        const percent = Math.floor((loaded * 100) / total);
        setUploading({
          ...uploading,
          state: index,
          progress: percent,
        });
      });
      try {
        const { Key } = await uploader.promise();
        await axios.put(`/product/${id}`, { image: Key });
        mutate("/product");
        setUploading({
          state: null,
          progress: 0,
        });
      } catch (err) {
        console.log("falied");
        console.log(err);
      }
    };
  };

  const showModal = () => {
    setIsModalOpen(true);
    setFormdata(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    productForm.resetFields();
  };

  const onPagination = (value) => {
    setCurrent(value);
  };

  return (
    <Layout>
      <div className="py-5 flex justify-center">
        <Button
          onClick={showModal}
          className="bg-blue-500 hover:text-black font-semibold text-lg w-[200px] h-[50px] text-white"
        >
          Add product
        </Button>
      </div>

      <Modal
        title="Product Add"
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          form={productForm}
          name="validateOnly"
          layout="vertical"
          onFinish={formdata ? onProductSave : onProductCreate}
          autoComplete="off"
        >
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input className="h-[40px]" placeholder="Description" />
          </Form.Item>

          <Form.Item
            name="discount"
            label="Discount"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="h-[40px] w-[470px]"
              placeholder="Discount"
            />
          </Form.Item>

          <Form.Item
            name="items"
            label="Purchase"
            initialValue="Purchase"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Purchase"
              style={{
                width: 470,
                height: "40px",
              }}
            >
              {purchaseData &&
                purchaseData.data.map((item, index) => (
                  <Select.Option key={index} value={item._id}>
                    {item.title}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber className="h-[40px] w-[470px]" placeholder="Price" />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="bg-blue-500 hover:text-black font-semibold text-lg w-[200px] h-[50px] text-white"
            >
              {!formdata ? "Add Product" : "Save"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div className="grid grid-cols-4 gap-5">
        {products &&
          products.data.map((item, index) => (
            <div
              key={index}
              className="shadow-lg bg-white rounded-lg px-5 py-5 border"
            >
              <div className="flex justify-center">
                {uploading.state === index ? (
                  <Progress
                    type="circle"
                    percent={uploading.progress}
                    size={70}
                  />
                ) : (
                  <Image
                    alt={item.image}
                    width={200}
                    height={200}
                    src={
                      item.image.length
                        ? `${
                            process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT +
                            item.image
                          }`
                        : "/image/pd.png"
                    }
                    onClick={() => onProductImgUpload(item._id, index)}
                  />
                )}
              </div>

              <h1 className="font-semibold text-lg">Price: {item.price}₹</h1>
              <h1 className="font-semibold text-lg">
                Discount: {item.discount}%
              </h1>
              <h1 className="font-semibold text-lg">
                Description: {item.description}
              </h1>

              <div className="flex justify-between">
                <Button
                  onClick={() => onProductEdit(item)}
                  className="bg-white text-lg h-[40px] "
                  style={{ borderRadius: "0" }}
                >
                  <i className="bx  bxs-edit"></i>
                </Button>
                <Button
                  onClick={() => onProductDelete(item._id)}
                  className="bg-white text-lg   h-[40px] "
                  style={{ borderRadius: "0" }}
                >
                  <i class="bx bxs-trash"></i>
                </Button>
              </div>
            </div>
          ))}
      </div>

      {/**pagnation */}
      <div className="flex justify-center mt-10">
        <Pagination
          size="small"
          defaultCurrent={1}
          total={products.total}
          onChange={onPagination}
        />
      </div>
    </Layout>
  );
};

export default AdminLayout;
