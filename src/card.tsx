import { Card, Col, Modal, Row, Space } from "antd";
import React, { useState } from "react";
import "./card.css";
import Search from "antd/es/transfer/search";
import { EllipsisOutlined } from "@ant-design/icons";
const CardUi: React.FC = () => {
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
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={7} xl={7}>
        <Card
          title="Contact List"
          bordered={false}
          style={{
            overflowY: "scroll",
            maxHeight: "70%",
          }}
        >
          <Space className="search-bar" direction="vertical">
            <Search placeholder="input search text" />
          </Space>
          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Modal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Yes"
              cancelText="No"
            ></Modal>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>

          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>

          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>

          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={7} xl={7}>
        <Card
          title="Office 360"
          bordered={false}
          style={{ overflowY: "scroll", maxHeight: "70%" }}
        >
          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>

          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>

          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={7} xl={7}>
        <Card
          title="Apple cloud"
          bordered={false}
          style={{ overflowY: "scroll", maxHeight: "70%" }}
        >
          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>

          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>

          <Card className="card-background " bordered={false}>
            <Row>
              <Col className="images-center-align">
                <img
                  className="images-size"
                  src="../assets/images-card.jpg"
                ></img>
              </Col>
              <Col>
                <h3>Muri Gutmann</h3>
                <p>Android developer</p>
              </Col>
              <EllipsisOutlined onClick={showModal} />
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <h5>Role</h5>
                <p>Employee</p>
              </Col>
              <Col span={12}>
                <h5>project</h5>

                <p>Office 360</p>
              </Col>
            </Row>
          </Card>
        </Card>
      </Col>
    </Row>
  );
};

export default CardUi;
