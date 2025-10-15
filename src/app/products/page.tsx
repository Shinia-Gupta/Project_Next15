import Link from "next/link";

export default function Products() {
  let prodId="100";
  return (
    <main>
      <h1>Welcome to Products!</h1>
      <Link href={"/"}>Home</Link><br/>
      <Link href={"/products/1"}>Product 1</Link><br/>
      <Link href={"/products/2"}>Product 2</Link><br/>
      <Link href={"/products/3"} replace>Product 3</Link><br/>  {/* Navigates back to the home page instead of this product list page */}
      <Link href={`/products/${prodId}`}>Product {prodId}</Link>
    </main>
  );
}