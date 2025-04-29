import { profileInfoHook } from "./hook";
import { DatePickerComponent } from "../../../components/datepicker";
import { RegionPicker } from "../../../components/regionpicker";
import { Header } from "../../../components/profile-info/header";

export const Form = () => {
  const { register, errors, handleSubmit, onSubmit } = profileInfoHook();

  return (
    <form
      className="space-y-8 overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        htmlFor="terms"
        className="flex gap-3 justify-center sm:justify-start"
      >
        <input type="checkbox" id="terms" />
        <span>I agree with</span>
        <a href="/profile-info/step-1" className="text-blue-500 font-medium">
          Terms of use
        </a>
      </label>

      <section className="border-[0px] sm:border-[1px] border-[#B9B9C3] rounded-[8px] p-[24px] sm:p-[32px] sm:pb-[50px] space-y-8">
        <Header
          title="Personal data"
          subtitle="Specify exactly as in your passport"
        />

        <div>
          <label className="text-[14px]">First name</label>
          <div className="flex justify-between gap-2 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              {...register("firstName")}
              type="text"
              className="outline-none flex-1"
            />
            <div className="absolute -bottom-8 left-0">
              {errors.firstName && (
                <p className="text-[12px] text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="text-[14px]">Second name</label>
          <div className="flex justify-between gap-2 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              {...register("secondName")}
              type="text"
              className="outline-none flex-1"
            />
            <div className="absolute -bottom-8 left-0">
              {errors.secondName && (
                <p className="text-[12px] text-red-500">
                  {errors.secondName.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-[18px] leading-[28px] mt-2">
          <div className=" sm:w-fit w-full">
            <label className="text-[14px]">Date of Birth</label>
            <div className="py-2 px-4 border-b-[1px] border-[#B9B9C3]  sm:max-w-[120px] w-full overflow-hidden">
              <DatePickerComponent />
            </div>
          </div>

          <div className="w-full">
            <label className="text-[14px]">Place of Birth</label>
            <div className="py-2 px-4 border-b-[1px] border-[#B9B9C3] flex-1 flex gap-2 justify-between">
              <RegionPicker />
            </div>
          </div>
        </div>
      </section>

      <section className="border-[0px] sm:border-[1px] border-[#B9B9C3] bg-[#EFF7FF] sm:bg-transparent rounded-[8px] flex py-4 px-[24px]">
        <div className="flex-1">
          {/* <h2>sldfjk</h2> */}
          <input
            {...register("firstName")}
            type="text"
            className="outline-none flex-1"
          />
          <p className="flex items-center gap-1">
            <img src="/ok.svg" alt="confirmed" className="size-[18px]" />
            <span className="text-[13px]">Your ITIN</span>
          </p>
        </div>
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
