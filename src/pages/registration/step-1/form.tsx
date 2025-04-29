import { useState } from "react";
import { formatPhone } from "../../../shared/utils";
import { registerHook } from "./hook";

export const Form = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const { register, errors, handleSubmit, onSubmit } = registerHook();

  return (
    <form
      className="space-y-8 overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border-[0px] sm:border-[1px] border-[#B9B9C3] rounded-[8px] p-[24px] sm:p-[32px]">
        <div>
          <label>Enter your phone number</label>

          <div className="flex items-center gap-4 text-[18px] leading-[28px] mt-2">
            <div className="py-2 px-4 border-b-[1px] border-[#B9B9C3]">
              <select
                {...register("phone_prefix")}
                id="phone-prefix"
                className="outline-none appearance-none show-arrow"
              >
                <option value="+1">+1</option>
                <option value="+380">+380</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
              <input
                {...register("phone")}
                type="text"
                value={phoneInput}
                onChange={(e) => setPhoneInput(formatPhone(e.target.value))}
                className="outline-none flex-1"
              />
              <div className="absolute -left-30 -bottom-8">
                {errors.phone && (
                  <p className="text-[12px] text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center sm:block">
        <button
          type="submit"
          className="font-medium border-[#BBBFC1] border-[1px] rounded-[4px] px-6 block w-fit py-3"
        >
          Send code
        </button>
      </div>
    </form>
  );
};
