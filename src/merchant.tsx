import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import "./merchant.css";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./login.css";
const Merchant = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <Row className="row-alignment login-page" gutter={[16, 16]}>
      <Col className="image-align " xs={24} sm={12}>
        <Form className="image-display" style={{ textAlign: "center" }}>
          <img src="../assets/logo192.png"></img>

          <h6>Welcome to BFX INTRA</h6>
          <div className="lorem-ipsum-text-alignment">
            <p className="lorem-ipsum-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Form>
      </Col>
      <Col className="image-align " xs={24} sm={9}>
        <Card className="card-content-size" style={{ textAlign: "center" }}>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="text-alignment-title-text">
              <p className="form-title">BFX INTRA</p>
              <h6>Login to your account</h6>
            </div>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
export { Merchant };
