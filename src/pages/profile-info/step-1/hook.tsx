import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type Input = {
  firstName: string;
  secondName: string;
};

export const Schema = z.object({
  firstName: z.string({ message: "required field" }).min(3),
  secondName: z.string({ message: "required field" }).min(3),
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
    window.location.href = "/profile-info/step-2";
  };

  return { register, errors, handleSubmit, onSubmit };
};
