import Layout from "@/admin-components/shared/layout";
import { useState } from "react";
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

const Notification = () => {
  const [notificationForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormdata] = useState(null);
  const [current, setCurrent] = useState(1);
  const {
    data: notification,
    error,
    isLoading,
  } = useSWR(`/notification?page=${current}`, fetcher, {
    refreshInterval: 3000,
  });

  if (isLoading) return <Skeleton active />;

  const onNotificationCreate = async (value) => {
    try {
      await axios.post("/notification", value);
      mutate("/notification");
    } catch (error) {
      message.error(error.message);
    } finally {
      notificationForm.resetFields();
      setIsModalOpen(false);
    }
  };

  const NotificationDelete = async (id) => {
    try {
      await axios.delete(`/notification/${id}`);
      mutate("/notification");
    } catch (error) {
      message.error(error.message);
    }
  };

  const onEditNotification = async (value) => {
    try {
      await axios.put(`/notification/${formdata._id}`, value);
      mutate("/notification");
    } catch (error) {
      message.error("Update Falied");
    } finally {
      notificationForm.resetFields();
      setIsModalOpen(false);
    }
  };

  const NotificationEdit = (value) => {
    setFormdata(value), notificationForm.setFieldsValue(value);
    setIsModalOpen(true);
  };

  const ShowModal = () => {
    setIsModalOpen(true);
    setFormdata(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    notificationForm.resetFields();
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
            Add Notification
          </Button>
        </div>

        <Modal
          title=" Add Address"
          footer={null}
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <Form
            form={notificationForm}
            name="validateOnly"
            layout="vertical"
            onFinish={formdata ? onEditNotification : onNotificationCreate}
            autoComplete="off"
          >
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input className="h-[40px]" placeholder="Title" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input className="h-[40px]" placeholder="Description" />
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true }]}
            >
              <Input className="h-[40px] " placeholder="Status" />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-blue-500 hover:text-black font-semibold text-lg w-[200px] h-[50px] text-white"
              >
                {!formdata ? "Add Notification" : "Save Notification"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <div className="grid grid-cols-4 gap-5">
          {notification &&
            notification.data.map((item, index) => (
              <div
                key={index}
                className="shadow-lg bg-white rounded-lg px-5 py-5 border"
              >
                <h1 className="font-semibold text-lg">Title : {item.title}</h1>
                <h1 className="font-semibold text-lg">
                  Description : {item.description}
                </h1>
                <h1 className="font-semibold text-lg">
                  Status : {item.status}
                </h1>
                <div className="flex justify-between">
                  <Button
                    onClick={() => NotificationEdit(item)}
                    className="bg-white text-lg h-[40px] "
                    style={{ borderRadius: "0" }}
                  >
                    <i className="bx  bxs-edit"></i>
                  </Button>
                  <Button
                    onClick={() => NotificationDelete(item._id)}
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
            total={notification.total}
            onChange={onPagination}
          />
        </div>
      </Layout>
    </>
  );
};

export default Notification;
