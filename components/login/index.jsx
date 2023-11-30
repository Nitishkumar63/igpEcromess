import Image from "next/image";
import Link from "next/link";
import { Button, Form, DatePicker, Space, Input, Select } from "antd";
import { useState } from "react";

const { Option } = Select;

const onFinish = (values) => {
  console.log(values);
};

const Singup = (values) => {
  console.log(values);
};

const Login = () => {
  const [login, SetLogin] = useState("block");
  const [hiddenSingup, SetSingup] = useState("hidden");

  const selectBefore = (
    <Select defaultValue="MR.">
      <Option value="mr">MR.</Option>
      <Option value="ms">MS</Option>
    </Select>
  );

  return (
    <>
      {/*login coding */}
      <div className={login}>
        <div className=" py-1 border-b flex  justify-center">
          <Image
            src="/image/igp-logo-revamp.png"
            width={60}
            height={56}
            alt="logo"
          />
        </div>

        <div className="flex justify-center relative">
          <div className="-z-2 absolute ">
            <Image
              src="/image/rebrand-login-ill.svg"
              width={1366}
              height={565}
              alt="logo"
              className="  flex justify-center -z-5 items-center"
            />
          </div>
          <div className="shadow-xl w-[550px]  py-10 h-[640px] px-[30px] z-10 bg-white">
            <h1 className="text-2xl mb-5 font-semibold">Sign in</h1>
            <h1 className="mb-7 font-semibold ">
              Don t have an account ?{" "}
              <span
                onClick={() => {
                  SetSingup("block"), SetLogin("hidden");
                }}
                className="text-lg cursor-pointer text-blue-500 "
              >
                Signup
              </span>
            </h1>

            <Form
              className="flex flex-col gap-[0px]"
              onFinish={onFinish}
              layout="vertical"
              autoComplete="off"
            >
              <Form.Item
                label="Email Id"
                name="username"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  className="py-2 w-[485px] h-[44px]"
                  placeholder="Enter Email Id"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  className="py-2 h-[44px] w-[485px]"
                  placeholder="Enter Password"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="bg-[#DD2745] mb-2 h-[50px] text-white font-semibold w-[485px] "
                  htmlType="submit"
                >
                  SIGN IN
                </Button>
                <Link
                  href="#"
                  className="text-sm text-gray-400 font-semibold flex justify-end"
                >
                  Forgot Password ?{" "}
                </Link>
              </Form.Item>

              <div className="font-semibold items-center mb-5 flex justify-center text-gray-500 ">
                <div className="w-[150px] border-b-2 border-t-0 border-l-0 border-r-0 "></div>
                <h1 className="text-lg px-5"> or continue width</h1>
                <div className="w-[150px] border-b-2 border-t-0 border-l-0 border-r-0 "></div>
              </div>

              <Form.Item>
                <Button
                  className="bg-white border text-lg text-black font-semibold border-gray-700 h-[50px]  w-[485px] "
                  htmlType="submit"
                >
                  SIGN WIDTH PASSWORD
                </Button>
              </Form.Item>

              <div className="flex justify-between">
                <Form.Item>
                  <Button
                    className="bg-white border  text-black  border-gray-700  h-[50px]  w-[229px] "
                    htmlType="submit"
                  >
                    <div className="flex items-center justify-center gap-x-2">
                      <i className="bx bxl-google text-lg mt-1 text-green-500"></i>{" "}
                      <h1 className="text-sm">GOOGLE</h1>
                    </div>
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    className="bg-white border text-lg text-black  border-gray-700  h-[50px]  w-[229px] "
                    htmlType="submit"
                  >
                    <div className="flex items-center justify-center gap-x-2">
                      <i className="bx bxl-facebook text-lg mt-1 text-blue-500"></i>{" "}
                      <h1 className="text-sm">FACEBOOK</h1>
                    </div>
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>

      {/*singup coding */}
      <div className={hiddenSingup}>
        <div className=" py-1 border-b flex -z-10 justify-center">
          <Image
            src="/image/igp-logo-revamp.png"
            width={60}
            height={56}
            alt="logo"
          />
        </div>

        <div className="flex justify-center relative">
          <div className="-z-2 absolute ">
            <Image
              src="/image/rebrand-login-ill.svg"
              width={1366}
              height={565}
              alt="logo"
              className="  flex justify-center -z-5 items-center"
            />
          </div>
          <div className="shadow-xl w-[550px]  py-10 h-[1100px] px-[30px] z-10 bg-white">
            <h1 className="text-2xl mb-5 font-semibold">Sign Up</h1>
            <h1 className="mb-7 font-semibold ">
              Already have an account ?{" "}
              <span
                onClick={() => {
                  SetLogin("block"), SetSingup("hidden");
                }}
                className="text-lg text-blue-500 cursor-pointer"
              >
                Sign in
              </span>{" "}
            </h1>

            <Form onFinish={Singup} layout="vertical" autoComplete="off">
              <Form.Item
                label="Full Name"
                name="fullname"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input your fullname!" },
                ]}
              >
                <Input
                  className="py-2 h-[44px] w-[485px]"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item
                label="Country"
                name="country"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input your Country!" },
                ]}
              >
                <Input
                  className="py-2 h-[44px] w-[485px]"
                  placeholder="Enter Country"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item
                label="Mobile Number"
                name="mobile"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input your Mobile !" },
                ]}
              >
                <Input
                  className="py-2 h-[44px] w-[485px]"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item
                label="Email Id"
                name="emailid"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input your Email !" },
                ]}
              >
                <Input
                  className="py-2 h-[44px] w-[485px]"
                  placeholder="Enter Email Id"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="pwd"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  className="py-2 h-[44px] w-[485px]"
                  placeholder="Enter Password"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item
                label="Date Of Birth"
                name="birth"
                className="font-semibold text-lg"
                rules={[
                  {
                    required: true,
                    message: "Please input your Date of Birth !",
                  },
                ]}
              >
                <DatePicker
                  style={{ height: "44px", width: "485px", borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="bg-[#DD2745] mb-2 h-[50px] text-white font-semibold w-[485px] "
                  htmlType="submit"
                >
                  SIGN IN
                </Button>
                <Link
                  href="#"
                  className="text-sm text-gray-400 font-semibold flex justify-end"
                >
                  Forgot Password ?{" "}
                </Link>
              </Form.Item>

              <div className="font-semibold items-center mb-5 flex justify-center text-gray-500 ">
                <div className="w-[150px] border-b-2 border-t-0 border-l-0 border-r-0 "></div>
                <h1 className="text-lg px-5"> or continue width</h1>
                <div className="w-[150px] border-b-2 border-t-0 border-l-0 border-r-0 "></div>
              </div>

              <Form.Item>
                <Button
                  className="bg-white border text-lg text-black font-semibold border-gray-700 h-[50px]  w-[485px] "
                  htmlType="submit"
                >
                  SIGN WIDTH PASSWORD
                </Button>
              </Form.Item>

              <div className="flex justify-between">
                <Form.Item>
                  <Button
                    className="bg-white border  text-black  border-gray-700  h-[50px]  w-[229px] "
                    htmlType="submit"
                  >
                    <div className="flex items-center justify-center gap-x-2">
                      <i class="bx bxl-google text-lg mt-1 text-green-500"></i>{" "}
                      <h1 className="text-sm">GOOGLE</h1>
                    </div>
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    className="bg-white border text-lg text-black  border-gray-700  h-[50px]  w-[229px] "
                    htmlType="submit"
                  >
                    <div className="flex items-center justify-center gap-x-2">
                      <i class="bx bxl-facebook text-lg mt-1 text-blue-500"></i>{" "}
                      <h1 className="text-sm">FACEBOOK</h1>
                    </div>
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
