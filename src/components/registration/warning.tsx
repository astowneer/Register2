export const Warning = () => {
  return (
    <div className="flex items-start justify-between gap-3 bg-[#F0F2F4] p-4 sm:rounded-[8px] rounded-none">
      <img src="/lock.svg" alt="lock" className="size-[24px]" />
      <p className="font-normal text-[13px] leading-[18px]">
        We take privacy issues seriously. You can be sure that your personal
        data is securely protected.
      </p>
      <img src="/close.svg" alt="close" className="size-[24px]" />
    </div>
  );
};