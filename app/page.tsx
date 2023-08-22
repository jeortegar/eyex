"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "./store";

export default function Home() {
  const router = useRouter();

  // @ts-ignore
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!Object.keys(user).length) {
      router.push("/create-account");
    }
  }, []);

  return <></>;
}
