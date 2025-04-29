import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { optional, z } from "zod";

export type Input = {
  address: string;
  zipCode: string;
  optional?: string;
};

export const Schema = z.object({
  address: z.string({ message: "required field" }).min(3),
  zipCode: z.string({ message: "required field" }).min(3),
  optional: z.string().optional(),
});

export const profileInfoHook = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(Schema),
  });

  const onChangeCountry = (val: string) => {
    setCountry(val);
    if (!val) {
      setRegion("");
    }
  };

  const onSubmit = async (data: Input) => {
    console.log("Address " + data.address);
    console.log("City " + region);
    console.log("Country " + country);
    console.log("ZipCode " + data.zipCode);
    console.log("Optional " + data.optional);
  };

  return { register, errors, handleSubmit, onSubmit, country, region, setRegion, onChangeCountry };
};
