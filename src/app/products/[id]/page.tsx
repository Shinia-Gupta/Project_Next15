//Server Component

export default async function ProductsById({
    params
}:{
  params:Promise<{id:string}>
}) {
  const productId=(await params).id;
  return (
    <main>
      <h1>Welcome to Products By Id Page with product Id {productId}!</h1>
    </main>
  );
}