import { profileInfoHook } from "./hook";
import { Header } from "../../../components/profile-info/header";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export const Form = () => {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    country,
    region,
    setRegion,
    onChangeCountry,
  } = profileInfoHook();

  return (
    <form
      className="space-y-8 overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="border-[0px] sm:border-[1px] border-[#B9B9C3] rounded-[8px] p-[24px] sm:p-[32px] sm:pb-[50px] space-y-8">
        <Header title="Delivery address" subtitle="Used for shipping orders" />

        <div>
          <label htmlFor="" className="text-[12px]">
            Address
          </label>
          <div className="flex items-center justify-between gap-4 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              {...register("address")}
              type="text"
              className="outline-none flex-1"
            />
            <div className="absolute -bottom-8 left-0">
              {errors.address && (
                <p className="text-[12px] text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="" className="text-[12px]">
            City
          </label>
          <div className="flex items-center justify-between gap-4 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              className="outline-none show-arrow bg-yellow-500 w-full"
              defaultOptionLabel=""
              blankOptionLabel="New York"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-4 text-[18px] leading-[28px] mt-2">
          <div>
            <label htmlFor="" className="text-[12px]">
              Country
            </label>
            <div className="py-2 px-4 border-b-[1px] border-[#B9B9C3]">
              <CountryDropdown
                value={country}
                onChange={onChangeCountry}
                className="outline-none max-w-full appearance-none show-arrow"
                defaultOptionLabel="Country"
              />
            </div>
          </div>

          <div>
            <label htmlFor="" className="text-[12px]">
              Zip code
            </label>
            <div className="flex justify-between gap-2 relative px-4 py-2  flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
              <input
                {...register("zipCode")}
                type="text"
                className="outline-none flex-1"
              />
              <div className="absolute -left-30 -bottom-8">
                {errors.zipCode && (
                  <p className="text-[12px] text-red-500">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="" className="text-[12px]">
            Optional
          </label>
          <div className="flex items-center justify-between gap-4 relative px-4 py-2 my-2 flex-1 border-b-[1px] border-[#B9B9C3] focus-within:border-blue-500 focus-within:border-b-[2px]">
            <input
              {...register("optional")}
              type="text"
              className="outline-none flex-1"
            />
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center sm:block">
        <button className="font-medium rounded-[4px] px-6 py-3 bg-blue-500 text-white flex gap-2">
          <img src="/ok.svg" alt="confirm" className="size-[24px]" />
          <span>Save</span>
        </button>
      </div>
    </form>
  );
};
