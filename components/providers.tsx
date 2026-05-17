"use client";

import dynamic from "next/dynamic";

const AosInit = dynamic(
  () => import("@/components/common/aos-init").then((mod) => mod.AosInit),
  {
    ssr: false,
  }
);

export function Providers() {
  return <AosInit />;
}