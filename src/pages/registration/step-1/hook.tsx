import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type Input = {
  phone: string;
  phone_prefix: string;
};

export const Schema = z.object({
  phone: z.string({ message: "required field" }).min(9),
  phone_prefix: z.string({ message: "required field" }).startsWith("+"),
})

export const registerHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: Input) => {
    localStorage.setItem("phone", data.phone_prefix + data.phone);
    window.location.href = "/register/step-2";
  };

  return { register, errors, handleSubmit, onSubmit };
};
