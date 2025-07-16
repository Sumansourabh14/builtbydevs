import LayoutChildren from "@/components/layout/LayoutChildren";
import React from "react";

export default function AdminLayout({ children }: React.PropsWithChildren) {
  return <LayoutChildren>{children}</LayoutChildren>;
}
