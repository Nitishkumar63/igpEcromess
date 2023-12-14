import Layout from "@/admin-components/shared/layout";
import { useState } from "react";
import Image from "next/image";
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
} from "antd";
axios.defaults.baseURL = "http://localhost:8080/";

const fetcher = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error)
  }
};

const Purchase = () => {
  const [purchaseForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormdata] = useState(null);
  const [current, setCurrent] = useState(1);
  const {
    data: purcheseProduct,
    error,
    isLoading,
  } = useSWR(`/purchase?page=${current}`, fetcher, { refreshInterval: 3000 });

  if (isLoading) return <Skeleton active />;

  const onPurchesCreate = async (value) => {
    try {
      await axios.post("/purchase", value);
      mutate("/purchase");
    } catch (error) {
      message.error("Product Not Purchese");
    } finally {
      setIsModalOpen(false);
      purchaseForm.resetFields();
    }
  };

  const onPurchaseProductEdit = (value) => {
    try {
      axios.put(`/purchase/${formdata._id}`, value);
      mutate("/purchase");
    } catch (error) {
      message.error("Purchase Update Falied ");
    } finally {
      setIsModalOpen(false);
      purchaseForm.resetFields();
    }
  };

  const onPurchaseProductDelete = async (id) => {
    try {
      await axios.delete(`/purchase/${id}`);
      mutate("/purchase");
    } catch (error) {
      message.error("Delete Falied");
    }
  };

  const onPurchaseEdit = (value) => {
    setFormdata(value);
    purchaseForm.setFieldsValue(value);
    setIsModalOpen(true);
  };

  const ShowModal = () => {
    setIsModalOpen(true);
    setFormdata(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    purchaseForm.resetFields();
  };

  const onPagination = (value) => {
    setCurrent(value);
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center mt-5">
          <Button
            onClick={ShowModal}
            className="bg-red-500 mb-5 text-white font-semibold text-lg w-[200px] h-[50px]"
          >
            Purchase Product
          </Button>
        </div>

        <Modal
          title="Category Add"
          footer={null}
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <Form
            form={purchaseForm}
            name="validateOnly"
            layout="vertical"
            onFinish={formdata ? onPurchaseProductEdit : onPurchesCreate}
            autoComplete="off"
          >
            <Form.Item
              name="title"
              label="Product Name"
              rules={[{ required: true }]}
            >
              <Input className="h-[40px]" placeholder="Product Name" />
            </Form.Item>

            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <InputNumber
                className="h-[40px] w-[470px]"
                placeholder="Product Price"
              />
            </Form.Item>

            <Form.Item
              name="qut"
              label="Product Qut"
              rules={[{ required: true }]}
            >
              <InputNumber
                className="h-[40px] w-[470px]"
                placeholder="Product Qut"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-red-500 hover:text-black font-semibold text-lg w-[200px] h-[50px] text-white"
              >
                {!formdata ? "Purchase" : "Save"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <div className="grid grid-cols-4 gap-5">
          {purcheseProduct &&
            purcheseProduct.data.map((item, index) => (
              <div
                key={index}
                className="shadow-lg bg-white rounded-lg px-5 py-5 border"
              >
                <h1 className="font-semibold text-lg">Price : {item.price}₹</h1>
                <h1 className="font-semibold text-lg">
                  Product Name : {item.title}
                </h1>
                <h1 className="font-semibold text-lg">
                  Product Qut : {item.qut}
                </h1>

                <div className="flex justify-between">
                  <Button
                    onClick={() => onPurchaseEdit(item)}
                    className="bg-white text-lg h-[40px] "
                    style={{ borderRadius: "0" }}
                  >
                    <i className="bx  bxs-edit"></i>
                  </Button>
                  <Button
                    onClick={() => onPurchaseProductDelete(item._id)}
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
            total={purcheseProduct.total}
            onChange={onPagination}
          />
        </div>
      </Layout>
    </>
  );
};

export default Purchase;
