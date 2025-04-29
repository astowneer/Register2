import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type Input = {
  email: string;
  phone: string;
};

export const Schema = z.object({
  email: z.string({ message: "required field" }).email(),
  phone: z.string({ message: "required field" }).min(9),
});

export const profileInfoHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: Input) => {
    window.location.href = "/profile-info/step-3";
  };

  return { register, errors, handleSubmit, onSubmit };
};
