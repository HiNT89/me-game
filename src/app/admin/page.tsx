import * as React from "react";
import type { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin page",
  };
}

export default function AdminPage() {
  return (
    <div>
      <h1>Admin page</h1>
    </div>
  );
}
