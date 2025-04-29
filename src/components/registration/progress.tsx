import { Fragment } from "react";

export type ProgressStatus = "idle" | "inProgress" | "done";

interface ProgressProps {
  status: ProgressStatus;
}

export const Progress = ({ status }: ProgressProps) => {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((step, index) => (
        <Fragment key={index}>
          <ProgressCircle step={step} status={status} />
          {step < 2 && <ProgressDash step={step} status={status} />}
        </Fragment>
      ))}
    </div>
  );
};

const ProgressCircle = ({
  step,
  status,
}: {
  step: number;
  status: ProgressStatus;
}) => {
  const isFilled =
    (status === "idle" && step === 0) ||
    (status === "inProgress" && step <= 1) ||
    status === "done";

  return (
    <div
      className={`size-[12px] rounded-full border-[1px] ${
        isFilled ? "bg-[#007AFF] border-none" : "border-[#B9B9C3]"
      }`}
    />
  );
};

const ProgressDash = ({
  step,
  status,
}: {
  step: number;
  status: ProgressStatus;
}) => {
  const isFilled = (status === "inProgress" && step === 0) || status === "done";

  return (
    <div
      className={`w-[40px] h-[1px] ${
        isFilled ? "bg-[#007AFF]" : "bg-[#B9B9C3]"
      }`}
    />
  );
};
