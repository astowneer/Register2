import { useState } from "react";
import { registerHook } from "./hook";

export const Form = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { handleSubmit, onSubmit, phone, register, errors } = registerHook();

  return (
    <form
      className="space-y-8 overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border-[0px] sm:border-[1px] border-[#B9B9C3] bg-[#EFF7FF] sm:bg-transparent rounded-[8px] flex py-4 px-[24px]">
        <div className="flex-1">
          <h2>{phone}</h2>
          <p className="flex items-center gap-1">
            <img src="/ok.svg" alt="confirmed" className="size-[18px]" />
            <span className="text-[13px]">Number confirmed</span>
          </p>
        </div>
      </div>

      <div className="border-[0px] sm:border-[1px] border-[#B9B9C3] rounded-[8px] p-[24px] sm:p-[32px] sm:pb-[50px] space-y-8">
        <div>
          <label>Enter your email</label>
          <div className="flex justify-between gap-2 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              {...register("email")}
              type="text"
              className="outline-none flex-1"
            />
            <div className="absolute -bottom-8 left-0">
              {errors.email && (
                <p className="text-[12px] text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label>Set a password</label>
          <div className="flex justify-between gap-2 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              {...register("password")}
              type={passwordVisible ? "text" : "password"}
              className="outline-none flex-1"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisible((prev) => !prev);
              }}
            >
              <img src="/eye.svg" alt="confirmed" className="size-[18px]" />
            </button>
            {errors.password ? (
              <div className="absolute -bottom-8 left-0 text-[12px]">
                <p className="text-red-500">{errors.password.message}</p>
              </div>
            ) : (
              <p className="absolute -bottom-8 left-0 flex items-center gap-1">
                <img src="/ok.svg" alt="confirmed" className="size-[18px]" />
                <span className="text-[13px] text-green-600">
                  Number confirmed
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center sm:block">
        <button className="font-medium rounded-[4px] px-6 py-3 bg-blue-500 text-white">
          Register Now
        </button>
      </div>
    </form>
  );
};
