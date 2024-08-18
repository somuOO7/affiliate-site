"use client";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const loginClicked = () => {
    router.push("/");
  };
  return (
    <div className="space-y-7 mt-44 mx-4">
      <CustomInput placeholder="Enter mobile number" label="Mobile number" />
      <CustomInput
        placeholder="Enter password"
        label="Password"
        isSecured={true}
      />
      <CustomButton title="Login" onClick={loginClicked} />
    </div>
  );
};

export default Login;
