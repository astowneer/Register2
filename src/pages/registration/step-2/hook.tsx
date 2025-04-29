import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { z } from "zod";

export type Input = {
  code: string;
};

export const Schema = z.object({
  code: z.string({ message: "required field" }).min(4)
});

export const registerHook = () => {
  const [phone, setPhone] = useState("");
  const [verificationCodeError, setVerificationCodeError] = useState("");

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    setPhone(phone ?? "");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: Input) => {
    if (data.code === "1234") {
      window.location.href = "/register/step-3";
    } else {
      setVerificationCodeError("Verification is not right");
    }
  };

  return { register, errors, handleSubmit, onSubmit, phone, verificationCodeError };
};
