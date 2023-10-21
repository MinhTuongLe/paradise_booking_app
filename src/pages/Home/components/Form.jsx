/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Form, Input, InputNumber, Modal } from "antd";
import { useEffect } from "react";

const defaultSubmit = {
  name: "",
  address: "",
  pricePerNight: 0,
  description: "",
};

const PlaceForm = (props) => {
  const [form] = Form.useForm();
  //   console.log(props);
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((err) => console.log(err));
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
