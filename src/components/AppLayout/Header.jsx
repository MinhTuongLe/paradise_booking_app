import { Button, Space } from "antd";

const Header = () => {
  const handleAddNewPlace = () => {
    console.log(123);
  };
  return (
    <Space style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button type="primary" onClick={handleAddNewPlace}>
        Add new
      </Button>
    </Space>
  );
};

export default Header;
