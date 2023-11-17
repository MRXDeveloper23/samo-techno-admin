import { Button, Form, Input, notification } from "antd";

import Phone from "@/assets/icons/phone.svg";
import Password from "@/assets/icons/password.svg";
import { appConfig } from "../config";

export const LoginForm = () => {
  console.log(appConfig);
  const onLogin = async (values) => {
    try {
      const res = await fetch(`${appConfig.apiBaseUrl}/api/v1/auth/log-in`, {
        method: "POST",
        body: JSON.stringify(values),
      });
      const response = await res.json();
      if (response.error) {
        notification.error({ message: response.message });
      } else {
        notification.success({ message: "Muvaffaqiyatli" });
        localStorage.setItem("kassa_token", response.data.token.access_token);
        localStorage.setItem(
          "refresh_token",
          response.data.token.refresh_token
        );
        localStorage.setItem("expiry_date", response.data.token.expires_at);
        localStorage.setItem("company_id", response.data.company.id);
        // dispatch(setCompanyId(response.data.company.id));
        // dispatch(setToken(response.data.token.access_token));
        // navigate('/', { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onFinishFailed = () => {
    console.log("onFinish Failed");
  };

  return (
    <Form
      initialValues={{}}
      onFinish={onLogin}
      onFinishFailed={onFinishFailed}
      className="login-form flex w-full flex-col gap-4"
    >
      <Form.Item name="phone" rules={[{ required: true, message: "" }]}>
        <Input
          prefix={
            <img
              src={Phone}
              className="px-2"
              alt="user"
              width={32}
              height={32}
              style={{ color: "#ccc" }}
            />
          }
          placeholder="Telefon raqam"
          className="h-[60px] rounded-2xl bg-[#F9F9F9] px-4 text-[20px] custom-input2"
        />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: "" }]}>
        <Input.Password
          prefix={<img src={Password} className="px-2" alt="password" />}
          placeholder="Parol"
          className="h-[60px] rounded-2xl bg-[#F9F9F9] px-4 text-[20px] custom-input2"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="h-[60px] w-full rounded-[13px] bg-primary font-ptsans text-[25px] font-bold leading-[25px]"
        >
          Kirish
        </Button>
      </Form.Item>
    </Form>
  );
};
