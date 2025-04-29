import { Company } from "./company";
import { Progress, ProgressStatus } from "./progress";

export const Navbar = ({ status }: { status: ProgressStatus }) => {
  return (
    <header className="flex">
      <section className="w-4/5 sm:w-2/5 flex items-center px-[24px] sm:px-0">
        <Company />
      </section>

      <section className="w-1/5 sm:w-3/5 flex flex-col px-[24px]">
        <div className="flex sm:justify-between justify-end ">
          <div className="hidden sm:flex">
            <Progress status={status} />
          </div>

          <img src="/close.svg" alt="close" className="size-[48px]" />
        </div>
      </section>
    </header>
  );
};
