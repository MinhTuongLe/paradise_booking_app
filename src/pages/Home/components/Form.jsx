/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Form, Input, InputNumber, Modal } from "antd";
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
      const loginResponse = await login({
        email: "lamlklk2002@gmail.com",
        password: "123456",
      });

      console.log(loginResponse.data.accessToken);
      const accessToken = loginResponse.data.accessToken;

      const createPlaceResponse = await createPlace(
        {
          ...defaultSubmit,
          ...values,
        },
        accessToken
      );

      console.log(createPlaceResponse);
      props.onDone();
    } catch (error) {
      console.error(error);
      const errElm = document.querySelector(".ant-form-item-has-error");
      if (errElm) {
        errElm.scrollIntoView({ behavior: "smooth", block: "end" });
      }
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
