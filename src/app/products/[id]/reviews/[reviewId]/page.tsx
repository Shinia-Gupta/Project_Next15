//Server Component
export default async function ProductsById({
    params
}:{
  params:Promise<{id:string,reviewId:string}>
}) {
  const {id,reviewId}=await params;
  return (
    <main>
      <h1>Welcome to Products By Id Page with product Id {id} and review with Id {reviewId}!</h1>
    </main>
  );
}