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
  Progress,
} from "antd";
axios.defaults.baseURL = "http://localhost:8080/";

const fetcher = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const address = () => {
  const [AddressForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormdata] = useState(null);
  const [current, setCurrent] = useState(1);
  const {
    data: address,
    error,
    isLoading,
  } = useSWR(`/address?page=${current}`, fetcher, { refreshInterval: 3000 });

  if (isLoading) return <Skeleton active />;

  const onAddressCreate = async (value) => {
    try {
      await axios.post("/address", value);
      mutate("/address");
    } catch (error) {
      message.error("Add Address Falied");
    } finally {
      setIsModalOpen(false);
      AddressForm.resetFields();
    }
  };

  const onAddressEdit = async (value) => {
    try {
      await axios.put(`/address/${formdata._id}`, value);
      mutate("/address");
      setFormdata(null);
    } catch (error) {
      message.error(error.message);
    } finally {
      setIsModalOpen(false);
      AddressForm.resetFields();
    }
  };

  const AddressDelete = async (id) => {
    try {
      await axios.delete(`/address/${id}`);
      mutate("/address");
    } catch (error) {
      message.error("Delete Falied");
    }
  };

  const AddressEdit = (value) => {
    setFormdata(value);
    AddressForm.setFieldsValue(value);
    setIsModalOpen(true);
  };

  const ShowModal = () => {
    setIsModalOpen(true);
    setFormdata(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    AddressForm.resetFields();
  };

  const onPagination = (value) => {
    setCurrent(value);
  };

  return (
    <>
      <Layout>
        <div className="py-5 flex justify-center ">
          <Button
            onClick={ShowModal}
            className="bg-red-500 hover:text-black font-semibold text-lg w-[200px] h-[50px] text-white"
          >
            Add Address
          </Button>
        </div>

        <Modal
          title=" Add Address"
          footer={null}
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <Form
            form={AddressForm}
            name="validateOnly"
            layout="vertical"
            onFinish={formdata ? onAddressEdit : onAddressCreate}
            autoComplete="off"
          >
            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Input className="h-[40px]" placeholder="City" />
            </Form.Item>

            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Input className="h-[40px]" placeholder="State" />
            </Form.Item>

            <Form.Item
              name="pincode"
              label="Pincode"
              rules={[{ required: true }]}
            >
              <InputNumber
                className="h-[40px] w-[470px]"
                placeholder="Pincode"
              />
            </Form.Item>

            <Form.Item
              name="landmark"
              label="Landmark"
              rules={[{ required: true }]}
            >
              <Input className="h-[40px]" placeholder=" Landmark" />
            </Form.Item>

            <Form.Item
              name="village"
              label="Village"
              rules={[{ required: true }]}
            >
              <Input className="h-[40px]" placeholder="Village" />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-blue-500 hover:text-black font-semibold text-lg w-[200px] h-[50px] text-white"
              >
                {!formdata ? "Add Address" : "Save Address"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <div className="grid grid-cols-4 gap-5">
          {address &&
            address.data.map((item, index) => (
              <div
                key={index}
                className="shadow-lg bg-white rounded-lg px-5 py-5 border"
              >
                <h1 className="font-semibold text-lg">City : {item.city}</h1>
                <h1 className="font-semibold text-lg">State : {item.state}</h1>
                <h1 className="font-semibold text-lg">
                  Pincode : {item.pincode}
                </h1>
                <h1 className="font-semibold text-lg">
                  Landmark : {item.landmark}
                </h1>
                <h1 className="font-semibold text-lg">
                  Village : {item.village}
                </h1>
                <div className="flex justify-between">
                  <Button
                    onClick={() => AddressEdit(item)}
                    className="bg-white text-lg h-[40px] "
                    style={{ borderRadius: "0" }}
                  >
                    <i className="bx  bxs-edit"></i>
                  </Button>
                  <Button
                    onClick={() => AddressDelete(item._id)}
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
            total={address.total}
            onChange={onPagination}
          />
        </div>
      </Layout>
    </>
  );
};
export default address;
