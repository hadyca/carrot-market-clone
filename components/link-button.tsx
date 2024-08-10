"use client";

import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function LinkButton() {
  const router = useRouter();

  return (
    <a
      onClick={() => router.push("/products/add")}
      href="/products/add"
      className="bg-orange-500 flex items-center justify-center rounded-full size-16 fixed bottom-24 right-8 text-white transition-colors hover:bg-orange-400"
    >
      <PlusIcon className="size-10" />
    </a>
  );
}
