"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {

  const pathname=usePathname();
  console.log("Pathname in not-found.tsx:", pathname);
  const productId=pathname.split("/")[2];
  const reviewId=pathname.split("/")[4];
  console.log("Product ID:", productId);
  console.log("Review ID:", reviewId);
  return (
    <main>
      <h1>File Not Found for Product Id {productId} and review Id {reviewId}</h1>
    </main>
  );
}