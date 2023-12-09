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
  message,
  Skeleton,
  Pagination,
  Progress,
  Select
} from "antd";
axios.defaults.baseURL = "http://localhost:8080/";
const s3 = new AWS.S3();

const fetcher = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error)
  }
};


const Productfetcher = async (url) =>{
  try {
    const {data} = await axios.get(url)
    return data
  } catch (error) {
    throw new Error(error)
  }
}


const Category = () => {
  const [categoryForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormdata] = useState(null);
  const [current, setCurrent] = useState(1);
  const {
    data: productcategory,
    error,
    isLoading,
  } = useSWR(`/category?page=${current}`, fetcher, { refreshInterval: 3000 });
  const [uploading, setUploading] = useState({
    state: null,
    progress: 0,
  });
  const {
    data: Products,
  } = useSWR(`/product`, Productfetcher, { refreshInterval: 3000 });


  if (isLoading) return <Skeleton active />;

  const onCategoryCreate = async (value) => {
    try {
      await axios.post("/category", value);
      mutate("/category");
      setFormdata(null);
    } catch (error) {
      message.error("Category Not Add");
    } finally {
      setIsModalOpen(false);
      categoryForm.resetFields();
    }
  };

  const onCategoryDelete = async (id) => {
    try {
      await axios.delete(`/category/${id}`);
      mutate("/category");
      setFormdata(null);
    } catch (error) {
      message.error("Delete Falied");
    } finally {
      setIsModalOpen(false);
      categoryForm.resetFields();
    }
  };

  const onCategoryEdit = async (value) => {
    try {
      await axios.put(`/category/${formdata._id}`, value);
      mutate("/category");
      setFormdata(null);
    } catch (error) {
      message.error("Category Update Falied");
    } finally {
      setIsModalOpen(false);
      categoryForm.resetFields();
    }
  };

  const onCagegoryImageUpload = (id, index) => {
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
        const { key } = await uploader.promise();
        await axios.put(`/category/${id}`, { logo: key });
        mutate("/category");
        setUploading({
          state: null,
          progress: 0,
        });
      } catch (error) {
        console, log(error.message);
      }
    };
  };

  const CategoryEdit = (value) => {
    setFormdata(value);
    categoryForm.setFieldsValue(value);
    setIsModalOpen(true);
  };

  const ShowModal = () => {
    setIsModalOpen(true);
    setFormdata(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    categoryForm.resetFields();
  };

  const onPagination = (value) => {
    setCurrent(value);
  };



  return (
    <Layout>
      <div className="py-5 flex justify-center ">
        <Button
          onClick={ShowModal}
          className="bg-red-500 hover:text-black font-semibold text-lg w-[200px] h-[50px] text-white"
        >
          Add Category
        </Button>
      </div>

      <Modal
        title="Category Add"
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          form={categoryForm}
          name="validateOnly"
          layout="vertical"
          onFinish={formdata ? onCategoryEdit : onCategoryCreate}
          autoComplete="off"
        >
          <Form.Item
            name="title"
            label="Product Name"
            rules={[{ required: true }]}
          >
            <Input className="h-[40px]" placeholder="Product Name" />
          </Form.Item>

          <Form.Item
            name='product'
            label="Product"
            initialValue='Product Name'
            rules={[{ required: true }]}
          >
      <Select
   defaultValue="Product Name"
  style={{
    width: 470,
    height: '40px'
  }}
>

  { Products &&  Products.data.map((item,index) => (
    <Select.Option key={index}  value={item._id}>
      {item.description}
    </Select.Option>
  ))}


</Select>


          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="bg-blue-500 hover:text-black font-semibold text-lg w-[200px] h-[50px] text-white"
            >
              {!formdata ? "Add Category" : "Save Category"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div className="grid grid-cols-4 gap-5">
        {productcategory &&
          productcategory.data.map((item, index) => (
            <div
              key={index}
              className="shadow-lg bg-white rounded-lg px-5 py-5 border"
            >
              <div className="flex justify-center">
                {uploading.state === index ? (
                  <Progress
                    type="circle"
                    percent={uploading.progress}
                    size={90}
                  />
                ) : (
                  <Image
                    src={
                      item.logo.length
                        ? process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT + item.logo
                        : "/image/pd.png"
                    }
                    width={200}
                    height={200}
                    onClick={() => onCagegoryImageUpload(item._id, index)}
                    alt="placeholder"
                    className="cursor-pointer"
                  />
                )}
              </div>

              <h1 className="font-semibold text-lg">
                Product Name : {item.title}
              </h1>
              <div className="flex justify-between">
                <Button
                  onClick={() => CategoryEdit(item)}
                  className="bg-white text-lg h-[40px] "
                  style={{ borderRadius: "0" }}
                >
                  <i className="bx  bxs-edit"></i>
                </Button>
                <Button
                  onClick={() => onCategoryDelete(item._id)}
                  className="bg-white text-lg   h-[40px] "
                  style={{ borderRadius: "0" }}
                >
                  <i class="bx bxs-trash"></i>
                </Button>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-10">
        <Pagination
          size="small"
          defaultCurrent={1}
          total={productcategory.total}
          onChange={onPagination}
        />
      </div>
    </Layout>
  );
};

export default Category;
