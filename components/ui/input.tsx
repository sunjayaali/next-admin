import * as React from "react";

import { cn } from "@/lib/utils";
import { Input as InputPrimitive } from "@base-ui/react/input";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn("input w-full", className)}
      {...props}
    />
  );
}

export { Input };
