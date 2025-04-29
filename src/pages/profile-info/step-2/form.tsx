import { Header } from "../../../components/profile-info/header";
import Select from "react-select";
import { profileInfoHook } from "./hook";

const options = [
  {
    value: "skype",
    label: (
      <div className="flex items-center gap-2">
        <img src="/skype.svg" alt="skype" className="size-[24px]" />
        <span>Skype</span>
      </div>
    ),
  },
  {
    value: "facebook",
    label: (
      <div className="flex items-center gap-2">
        <img src="/facebook.svg" alt="facebook" className="size-[24px]" />
        <span>Facebook</span>
      </div>
    ),
  },
];

export const Form = () => {
  const { register, errors, handleSubmit, onSubmit } = profileInfoHook();

  return (
    <form
      className="space-y-8 overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="border-[0px] sm:border-[1px] border-[#B9B9C3] rounded-[8px] p-[24px] sm:p-[32px] sm:pb-[50px] space-y-8">
        <Header
          title="Contacts"
          subtitle="These contacts are used to inform about orders"
        />

        <div>
          <div className="flex items-center justify-between gap-4 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <img src="/mail.svg" alt="go-next" className="size-[24px]" />

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
          <div className="flex items-center justify-between gap-4 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <img src="/phone.svg" alt="go-next" className="size-[18px]" />

            <input
              {...register("phone")}
              type="text"
              className="outline-none flex-1"
            />
            <div className="absolute -bottom-8 left-0">
              {errors.phone && (
                <p className="text-[12px] text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <Header
          title="Social Network"
          subtitle="Indicate the desired communication method"
        />

        <div className="grid grid-cols-2 items-center sm:gap-4  text-[18px] leading-[28px] mt-2">
          <div className="pt-1 px-4 border-b-[1px] border-[#B9B9C3] w-full">
            <Select options={options} />
          </div>

          <div className="flex justify-between gap-2 overflow-hidden relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              type="text"
              className="outline-none flex-1"
              placeholder="@profile"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center sm:gap-4  text-[18px] leading-[28px] mt-2">
          <div className="pt-1 px-4 border-b-[1px] border-[#B9B9C3] w-full">
            <Select options={options} />
          </div>

          <div className="flex justify-between gap-2 overflow-hidden relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              type="text"
              className="outline-none flex-1"
              placeholder="@profile"
            />
          </div>
        </div>

        <button className="flex gap-2 cursor-pointer">
          <img src="/add.svg" alt="go-next" className="size-[24px]" />
          <span className="text-blue-500">Add More</span>
        </button>
      </section>

      <div className="w-full flex justify-center sm:block">
        <button
          type="submit"
          className="font-medium border-[#BBBFC1] border-[1px] rounded-[4px] px-6 w-fit py-3 flex gap-2 items-center"
        >
          <span>Go next</span>
          <img src="/arrow-right.svg" alt="go-next" className="size-[18px]" />
        </button>
      </div>
    </form>
  );
};
