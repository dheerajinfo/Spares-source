import React, { useState } from "react";
import Steps from "../../library/components/Steps/Steps";
import StepNav from "../../library/components/Steps/StepNav";
import StepStage from "../../library/components/Steps/StepStage";
import Separator from "../../library/components/Separator";
import StepContent from "../../library/components/Steps/StepContent";
import StepLabel from "../../library/components/Steps/StepLabel";
import Step from "../../library/components/Steps/Step";
import StepFooter from "../../library/components/Steps/StepFooter";
import StepButton from "../../library/components/Steps/StepButton";

function StepsDemoTwo() {
  const [stageindex, setStageindex] = useState(0);

  const nextStage = () => {
    setStageindex((prev) => Math.min(prev + 1, 2));
  };

  const prevStage = () => {
    setStageindex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Steps className="w-full flex flex-col">
      <StepNav className="flex  flex-row items-center justify-between gap-4 w-full">
        <Step>
          <StepStage
            className={`flex items-center justify-center w-24 h-24 rounded-full text-xs ${
              stageindex === 0 ? "bg-black text-white" : "bg-white/60 text-black"
            }`}
          >
            1
          </StepStage>
          <StepLabel className="text-nowrap hidden lg:flex text-white">Upload File</StepLabel>
        </Step>
        <Separator className="flex border border-white/30" />
        <Step>
          <StepStage
            className={`flex items-center justify-center w-24 h-24 rounded-full text-xs ${
              stageindex === 1 ? "bg-black text-white" : "bg-white/60 text-black"
            }`}
          >
            2
          </StepStage>
          <StepLabel className="text-nowrap text-white hidden lg:flex">Process Data</StepLabel>
        </Step>
        <Separator className="flex border border-white/30" />
        <Step>
          <StepStage
            className={`flex items-center justify-center w-24 h-24 rounded-full text-xs ${
              stageindex === 2 ? "bg-black text-white" : "bg-white/60 text-black"
            }`}
          >
            3
          </StepStage>
          <StepLabel className="text-nowrap text-white hidden lg:flex">Complete</StepLabel>
        </Step>
      </StepNav>

      {stageindex === 0 && (
        <StepContent className="h-72 flex items-center justify-center py-12">
          Stage 1 Content
        </StepContent>
      )}
      {stageindex === 1 && (
        <StepContent className="h-72 flex items-center justify-center py-12">
          Stage 2 Content
        </StepContent>
      )}
      {stageindex === 2 && (
        <StepContent className="h-72 flex items-center justify-center py-12">
          Stage 3 Content
        </StepContent>
      )}

      <StepFooter className="flex flex-row items-center justify-between">
        <StepButton
          className="bg-white/60 text-black text-xs"
          onClick={prevStage}
          disabled={stageindex === 0}
        >
          Prev
        </StepButton>
        <StepButton
          className="text-white text-xs"
          onClick={nextStage}
          disabled={stageindex === 2}
        >
          Next
        </StepButton>
      </StepFooter>
    </Steps>
  );
}

export default StepsDemoTwo;
