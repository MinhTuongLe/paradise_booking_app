/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Form, Input, InputNumber, Modal, notification } from "antd";
import { useEffect } from "react";
import { createPlace, login } from "../apiSlice";

const defaultSubmit = {
  name: "",
  address: "",
  pricePerNight: 0,
  description: "",
};

const PlaceForm = (props) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const accessToken = localStorage.getItem("access-token");

      const createPlaceResponse = await createPlace(
        {
          ...defaultSubmit,
          ...values,
        },
        accessToken
      );

      console.log(createPlaceResponse);
      props.onDone();
      notification.success({
        message: "Create new place successfully!",
      });
    } catch (error) {
      console.error(error);
      const errElm = document.querySelector(".ant-form-item-has-error");
      if (errElm) {
        errElm.scrollIntoView({ behavior: "smooth", block: "end" });
      }
      notification.error({
        message: "Create new place failed!",
      });
    }
  };

  useEffect(() => {
    if (!props.open) {
      form.resetFields();
    }
  }, [props.open]);
  return (
    <Modal
      title={props.title}
      okButtonProps={{
        disabled: false,
      }}
      cancelButtonProps={{
        disabled: false,
      }}
      forceRender
      open={props.open}
      onCancel={props.onCancel}
      onOk={handleSubmit}
      centered={true}
      width={600}
      okText="Create"
      cancelText="Cancel"
    >
      <Form
        form={form}
        layout="vertical"
        style={{ padding: 0 }}
        initialValues={{
          ...defaultSubmit,
          ...props.formData,
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          style={{ marginBottom: 16 }}
          rules={[
            {
              required: true,
              message: "This is required field",
            },
          ]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          style={{ marginBottom: 16 }}
          rules={[
            {
              required: true,
              message: "This is required field",
            },
          ]}
        >
          <Input placeholder="Enter address" />
        </Form.Item>
        <Form.Item
          name="pricePerNight"
          label="Price Per Night"
          style={{ marginBottom: 16 }}
          rules={[
            {
              required: true,
              message: "This is required field",
            },
          ]}
        >
          <InputNumber
            min={0}
            step={1}
            placeholder="Enter price per night"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          style={{ marginBottom: 16 }}
          rules={[
            {
              required: true,
              message: "This is required field",
            },
          ]}
        >
          <Input placeholder="Enter description" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PlaceForm;
