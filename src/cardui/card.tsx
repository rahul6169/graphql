import {
  Card,
  Col,
  Dropdown,
  MenuProps,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useState } from "react";
import "./card.css";
import { DownOutlined, EllipsisOutlined } from "@ant-design/icons";
const CardUi: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const projectEmployeeList = [1, 2, 3, 4, 5, 6];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "rahuds",
    },
    {
      key: "2",
      label: "Itedfm 2",
    },
    {
      key: "3",
      label: "Iteasdasm 3  ",
    },
  ];

  return (
    <Row>
      <Col span={12}>
        <Card
          title="Office 360"
          bordered={false}
          style={{
            overflowY: "scroll",
            maxHeight: "70vh",
            boxShadow: "0 2px 6px rgba(0,0,0, 0.1)",
          }}
        >
          {projectEmployeeList?.map((projectEmployee) => {
            return (
              <Card className="card-background card-position " bordered={false}>
                <Row>
                  <Col className="images-center-align">
                    <img
                      className="images-size"
                      src="../assets/images-card.jpg"
                    ></img>
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
                    CATOGORY
                    <br></br>
                    <span className="role-type">
                      {" "}
                      <Dropdown
                        menu={{
                          items,
                          selectable: true,
                          defaultSelectedKeys: ["3"],
                        }}
                      >
                        <Typography.Link>
                          <Space>
                            <span className="dropdown-color">Capacity</span>
                            <DownOutlined className="dropdown-arrow" />
                          </Space>
                        </Typography.Link>
                      </Dropdown>
                    </span>
                  </Col>
                  <Col span={12} className="role-project-head-text">
                    STATUS <br></br>{" "}
                    <span className="role-type">
                      <Dropdown
                        menu={{
                          items,
                          selectable: true,
                          defaultSelectedKeys: ["2"],
                        }}
                      >
                        <Typography.Link>
                          <Space>
                            <span className="status-dropdown-color">
                              Active
                            </span>
                            <DownOutlined className="dropdown-arrow" />
                          </Space>
                        </Typography.Link>
                      </Dropdown>
                    </span>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title="Apple cloud"
          bordered={false}
          style={{
            overflowY: "scroll",
            maxHeight: "70vh",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {projectEmployeeList?.map((projectEmployee) => {
            return (
              <Card className="card-background card-position " bordered={false}>
                <Row>
                  <Col className="images-center-align">
                    <img
                      className="images-size"
                      src="../assets/images-card.jpg"
                    ></img>
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
                    CATOGORY
                    <br></br>
                    <span className="role-type">
                      <Dropdown
                        menu={{
                          items,
                          selectable: true,
                          defaultSelectedKeys: ["3"],
                        }}
                      >
                        <Typography.Link>
                          <Space>
                            <span className="dropdown-color">Capacity</span>
                            <DownOutlined className="dropdown-arrow" />
                          </Space>
                        </Typography.Link>
                      </Dropdown>
                    </span>
                  </Col>
                  <Col span={12} className="role-project-head-text">
                    STATUS <br></br>{" "}
                    <span className="role-type">
                      <Dropdown
                        menu={{
                          items,
                          selectable: true,
                          defaultSelectedKeys: ["3"],
                        }}
                      >
                        <Typography.Link>
                          <Space>
                            <span className="unassigned-dropdown-color">
                              Unassigned
                            </span>
                            <DownOutlined className="dropdown-arrow" />
                          </Space>
                        </Typography.Link>
                      </Dropdown>
                    </span>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </Card>
      </Col>
    </Row>
  );
};

export default CardUi;
