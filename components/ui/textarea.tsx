import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textareaVariants = cva("textarea", {
  variants: {
    color: {
      neutral: "textarea-neutral",
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      accent: "textarea-accent",
      info: "textarea-info",
      success: "textarea-success",
      warning: "textarea-warning",
      error: "textarea-error",
    },
    size: {
      xs: "textarea-xs",
      sm: "textarea-sm",
      md: "textarea-md",
      lg: "textarea-lg",
      xl: "textarea-xl",
    },
    variant: {
      ghost: "textarea-ghost",
    },
  },
});

function Textarea({
  className,
  color,
  size,
  variant,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full",
        textareaVariants({ color, size, variant }),
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
