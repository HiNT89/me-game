import * as React from "react";
import type { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "login page",
  };
}

export default function LoginPage() {
  return (
    <div>
      <h1>login page</h1>
    </div>
  );
}
