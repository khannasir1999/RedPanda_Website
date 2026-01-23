import * as RadixCheckbox from "@radix-ui/react-checkbox";
import type React from "react";
import { cn } from "../utils/cn";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof RadixCheckbox.Root>) {
  return (
    <RadixCheckbox.Root
      className={cn(
        "CheckboxRoot w-5 h-5 2xl:w-[1.3vw] 2xl:h-[1.3vw] bg-white border-2 rounded-sm flex justify-center items-center",
        className
      )}
      {...props}
    />
  );
}
function CheckboxIndicator({
  className,
  ...props
}: React.ComponentProps<typeof RadixCheckbox.Indicator>) {
  return (
    <RadixCheckbox.Indicator
      className={cn("CheckboxIndicator", className)}
      {...props}
    />
  );
}

export { Checkbox, CheckboxIndicator };