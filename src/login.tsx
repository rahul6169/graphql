import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import ReactDOM from "react-dom";
import "./login.css";
const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row className="row-align">
      <div className="login-page">
        <Col xs={24} sm={12}>
          <div className="illustration-wrapper">
            <img
              className="login-img"
              src="../assets/logo192.png"
              alt="Login"
            />
          </div>
          <div style={{ textAlign: "center" }}>Welcome to BFX INTRA</div>
          <div className="lorem-ipsum-text-alignment">
            <p className="lorem-ipsum-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Col>

        <div className="login-box">
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
        </div>
      </div>
    </Row>
  );
};

export { Login };
