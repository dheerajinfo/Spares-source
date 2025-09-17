import React, { useState } from "react";
import CheckboxSelector from "../../library/components/Checkbox/CheckboxSelector";
import Checkbox from "../../library/components/Checkbox/Checkbox";

function CheckboxDemo() {
  const [agreeChecked, setAgreeChecked] = useState(false);

  return (
    <Checkbox className="flex items-center gap-8 p-4">
      <CheckboxSelector
        id="agree"
        label="I agree to the terms"
        checked={agreeChecked}
        onChange={(e) => setAgreeChecked(e.target.checked)}
        className="text-white text-sm font-normal tracking-widest"
        boxClassName="h-4 w-4 border-white peer-checked:bg-white       peer-checked:border-white"
        checkmarkClassName="text-lg"
      />
    </Checkbox>
  );
}

export default CheckboxDemo;