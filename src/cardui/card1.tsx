import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Modal, Row, Space } from "antd";
import Search from "antd/es/transfer/search";
import { useState } from "react";
import "./card.css";
const CardUiModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Card
      title=""
      bordered={false}
      style={{
        overflowY: "scroll",
        maxHeight: "70vh",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card className="card-background card-position " bordered={false}>
        <Row>
          <Col className="images-center-align">
            <img className="images-size" src="../assets/images-card.jpg"></img>
          </Col>
          <Col className="type-of-job">
            <span className="profile-name">Muri Gutmann</span>
            <br></br> Android developer
          </Col>
          <Col className="ellipsis-icon">
            <span>
              <EllipsisOutlined
                className="ellipses-outline"
                onClick={showModal}
              />
            </span>
          </Col>
        </Row>
        <Modal
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Yes"
          cancelText="No"
        ></Modal>
        <Row className="space-row-type" gutter={24}>
          <Col span={12} className="role-project-head-text">
            ROLE
            <br></br>
            <span className="role-type">Employee</span>
          </Col>
          <Col span={12} className="role-project-head-text">
            PROJECT <br></br> <span className="role-type">Office 360</span>
          </Col>
        </Row>
      </Card>

      <Card className="card-background card-position " bordered={false}>
        <Row>
          <Col className="images-center-align">
            <img className="images-size" src="../assets/images-card.jpg"></img>
          </Col>
          <Col className="type-of-job">
            <span className="profile-name">Muri Gutmann</span>
            <br></br> Android developer
          </Col>
          <Col className="ellipsis-icon">
            <span>
              <EllipsisOutlined
                className="ellipses-outline"
                onClick={showModal}
              />
            </span>
          </Col>
        </Row>
        <Row className="space-row-type" gutter={24}>
          <Col span={12} className="role-project-head-text">
            ROLE
            <br></br>
            <span className="role-type">Employee</span>
          </Col>
          <Col span={12} className="role-project-head-text">
            PROJECT <br></br> <span className="role-type">Office 360</span>
          </Col>
        </Row>
      </Card>

      <Card className="card-background card-position " bordered={false}>
        <Row>
          <Col className="images-center-align">
            <img className="images-size" src="../assets/images-card.jpg"></img>
          </Col>
          <Col className="type-of-job">
            <span className="profile-name">Muri Gutmann</span>
            <br></br> Android developer
          </Col>
          <Col className="ellipsis-icon">
            <span>
              <EllipsisOutlined
                className="ellipses-outline"
                onClick={showModal}
              />
            </span>
          </Col>
        </Row>
        <Row className="space-row-type" gutter={24}>
          <Col span={12} className="role-project-head-text">
            ROLE
            <br></br>
            <span className="role-type">Employee</span>
          </Col>
          <Col span={12} className="role-project-head-text">
            PROJECT <br></br> <span className="role-type">Office 360</span>
          </Col>
        </Row>
      </Card>

      <Card className="card-background card-position" bordered={false}>
        <Row>
          <Col className="images-center-align">
            <img className="images-size" src="../assets/images-card.jpg"></img>
          </Col>
          <Col className="type-of-job">
            <span className="profile-name">Muri Gutmann</span>
            <br></br> Android developer
          </Col>
          <Col className="ellipsis-icon">
            <span>
              <EllipsisOutlined
                className="ellipses-outline"
                onClick={showModal}
              />
            </span>
          </Col>
        </Row>
        <Row className="space-row-type" gutter={24}>
          <Col span={12} className="role-project-head-text">
            ROLE
            <br></br>
            <span className="role-type">Employee</span>
          </Col>
          <Col span={12} className="role-project-head-text">
            PROJECT <br></br> <span className="role-type">Office 360</span>
          </Col>
        </Row>
      </Card>

      <Card className="card-background card-position " bordered={false}>
        <Row>
          <Col className="images-center-align">
            <img className="images-size" src="../assets/images-card.jpg"></img>
          </Col>
          <Col className="type-of-job">
            <span className="profile-name">Muri Gutmann</span>
            <br></br> Android developer
          </Col>
          <Col className="ellipsis-icon">
            <span>
              <EllipsisOutlined
                className="ellipses-outline"
                onClick={showModal}
              />
            </span>
          </Col>
        </Row>
        <Row className="space-row-type" gutter={24}>
          <Col span={12} className="role-project-head-text">
            ROLE
            <br></br>
            <span className="role-type">Employee</span>
          </Col>
          <Col span={12} className="role-project-head-text">
            PROJECT <br></br> <span className="role-type">Office 360</span>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};

export { CardUiModal };
