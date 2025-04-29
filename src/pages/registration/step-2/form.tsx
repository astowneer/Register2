import { useState } from "react";
import { VerifiacationPlaceholder } from "../../../components/registration/placeholders";
import { formatVerificationCode } from "../../../shared/utils";
import { registerHook } from "./hook";

export const Form = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const {
    handleSubmit,
    onSubmit,
    phone,
    register,
    errors,
    verificationCodeError,
  } = registerHook();

  return (
    <form
      className="space-y-8 overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border-[0px] sm:border-[1px] border-[#B9B9C3] bg-[#EFF7FF] sm:bg-transparent rounded-[8px] flex py-4 px-[24px]">
        <div className="flex-1">
          <h2>{phone}</h2>
          <span className="text-[13px]">Number not confirmed yet</span>
        </div>
        <button className="self-end cursor-pointer">
          <img src="/edit.svg" alt="close" className="size-[24px] " />
        </button>
      </div>

      <div className="flex sm:flex-row flex-col gap-2 px-[24px]">
        <div className="flex-1">
          <label className="text-[13px]">Confirmation code</label>
          <div className="flex justify-between gap-2 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              {...register("code")}
              type="text"
              value={verificationCode}
              onChange={(e) =>
                setVerificationCode(formatVerificationCode(e.target.value))
              }
              className="outline-none flex-1"
            />

            {!verificationCode && (
              <div className="absolute left-7 top-1/2 -translate-y-1/2">
                <VerifiacationPlaceholder />
              </div>
            )}

            {errors.code ? (
              <div className="absolute -bottom-8 left-0 text-[12px]">
                <p className="text-red-500">{errors.code.message}</p>
              </div>
            ) : verificationCodeError ? (
              <div className="absolute -bottom-8 left-0 text-[12px]">
                <p className="text-red-500">{verificationCodeError}</p>
              </div>
            ) : (
              <div className="absolute -bottom-8 sm:-bottom-12 left-0 text-[12px]">
                <p>Confirm phone number with code from sms message</p>
              </div>
            )}
          </div>
        </div>

        <button
          className="px-4 py-1 flex items-center gap-2 pt-7 sm:pt-1 cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          <img src="/repeat.svg" alt="send again" className="size-[18px]" />
          <span className="text-blue-500 font-semibold ">Send again</span>
        </button>
      </div>

      <div className="w-full flex justify-center sm:block pt-7">
        <button
          type="submit"
          className="font-medium border-[#BBBFC1] border-[1px] rounded-[4px] px-6 block w-fit py-3"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};
