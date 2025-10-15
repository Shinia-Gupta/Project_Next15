import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Home!</h1>
      <Link href="/products">Go to Products</Link><br/>
      <Link href="/blog">Go to Blog</Link>

    </main>
  );
}