import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { z } from "zod";

interface Input {
  email: string;
  password: string;
}

export const Schema = z.object({
  email: z.string({ message: "required field" }).email(),
  password: z.string({ message: "required field" }).min(8),
})

export const registerHook = () => {
  const [phone, setPhone] = useState("");

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
    console.log("Phone " + phone);
    console.log("Email " + data.email);
    console.log("Password " + data.password);
    window.location.href = "/profile-info/step-1";
  };

  return { register, errors, handleSubmit, onSubmit, phone };
};
