import { useTranslate } from "@hooks/useTranslate";
import { RootState } from "@store/store";
import styles from "@styles/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface StepperProps {
  step: number;
}
const Stepper: React.FC<StepperProps> = ({ step }) => {
  const trans = useTranslate();
  const [localStep, setLocalStep] = useState<number>(step)
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const isRTL = currentLanguage === "ar"; // Check the `dir` attribute of the document
  return (
    <div className={`flex sm:items-center sm:flex-row flex-col items-start justify-center mt-[50px] sm:gap-20 gap-16`}>
    {/* <select
      name="step"
      id="step"
      className="px-5"
      onChange={(e) => setLocalStep(Number(e.target.value))}
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
    </select> */}
      {["Pick Up", "Processing", "Out for Delivery", "Delivered"].map(
        (label, index) => {
          const isDone = localStep > index;
          return (
              <div className={`flex sm:items-center sm:flex-col flex-row items-start gap-5 relative`}>
                <div
                  className={`w-5 h-5 rounded-full z-5 flex flex-col items-center justify-center ${
                    isRTL ? "right-0" : "left-0"
                  } ${isDone ? "bg-green-600 border-0" : "bg-white border-2 border-gray-500"}`}
                >{isDone && <span className="text-white">✔</span>}</div>
                <h1 className={`${isDone ? "text-green-600" : "text-gray-400"} font-semibold`}>{trans(label)}</h1>
                {index<3 ? <span className={`sm:content-link content-link-vertical absolute ${isDone ? "" : ""} ${index<1 ? isRTL?"sm:right-10 right-2" : "sm:left-10 left-2" : isRTL?"sm:right-8 right-2" : "sm:left-6 left-2"} sm:top-2 top-5 `}></span> : null}
              </div>
          );
        }
      )}
    </div>
  );
};

export default Stepper;
