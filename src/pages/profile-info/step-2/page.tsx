import { Navbar } from "../../../components/registration/navbar";
import { Progress } from "../../../components/registration/progress";
import { Form } from "./form";
import { Header } from "../../../components/registration/header";

export function ProfileInfoStepTwoPage() {
  return (
    <main className="h-screen w-full sm:p-[44px] py-[20px]">
      <Navbar status="inProgress" />

      <div className="flex">
        <div className="w-0 sm:w-2/5"></div>

        <div className="sm:max-w-[456px] w-full py-[80px] flex-1 sm:w-3/5 ">
          <div className="space-y-8">
            <div className="flex justify-center sm:hidden">
              <Progress status="idle" />
            </div>

            <Header
              title="Profile info"
              subtitle="Fill in the data for profile. It will take a couple of minutes. You only need a passport"
            />
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
