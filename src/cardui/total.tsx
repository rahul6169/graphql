import { Button, Card, Col, Input, Modal, Row, Space } from "antd";
import CardUi from "./card";
import { CardUiModal } from "./card1";
import "./card.css";
import Search from "antd/es/transfer/search";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const Totalui = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCreate = () => {
    console.log("created");
    setIsModalVisible(false);
  };

  return (
    <Card
      style={{
        boxShadow: "0 2px 6px rgba(1, 1, 1, 2)",
      }}
    >
      <Card
        className="project-resources-title"
        style={{ boxShadow: "0 2px 6px rgba(0, 0, 0, 0)" }}
      >
        Project & Resources
      </Card>
      <Row gutter={[16, 16]}>
        <h3 className="column-contact-title">Contact List</h3>
      </Row>
      <div className="plus-icon-container plus-icon">
        <Space className="search-bar" direction="vertical">
          <Search placeholder="Search Name" />
        </Space>
        <div>
          <Modal
            open={isModalVisible}
            onOk={handleCreate}
            onCancel={handleCancel}
            okText="Create"
            width={200}
            bodyStyle={{ height: 210 }}
            footer={null}
            style={{
              position: "absolute",
              top: "calc(30% + 16px)",
              left: "85%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input
                placeholder="Name"
                style={{ marginBottom: 16, marginTop: 20 }}
              />
              <Input.TextArea
                placeholder="Description"
                autoSize={{ minRows: 4, maxRows: 8 }}
                style={{ marginBottom: 16 }}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="primary" style={{ alignSelf: "flex-end" }}>
                  Create
                </Button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="plus-icon-background">
          <PlusOutlined className="plus-background" onClick={showModal} />
        </div>
      </div>

      <Row>
        <Col span={8}>
          <CardUiModal />
        </Col>
        <Col
          span={16}
          style={{
            overflowX: "scroll",
            maxHeight: "70vh",
            boxShadow: "0 2px 6px rgba(0,0,0, 0.1)",
          }}
        >
          <CardUi />
        </Col>
      </Row>
    </Card>
  );
};
export { Totalui };
