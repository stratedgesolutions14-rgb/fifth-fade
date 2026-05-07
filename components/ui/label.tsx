import * as React from "react";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-[0.18em] text-secondary peer-disabled:pointer-events-none peer-disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
