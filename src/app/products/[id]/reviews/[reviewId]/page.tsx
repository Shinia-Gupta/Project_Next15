import { notFound } from "next/navigation";

//Server Component
export default async function ProductsById({
    params
}:{
  params:Promise<{id:string,reviewId:string}>
}) {
  const {id,reviewId}=await params;
  if(parseInt(id)>1000){
    notFound();
  }
  return (
    <main>
      <h1>Welcome to Products By Id Page with product Id {id} and review with Id {reviewId}!</h1>
    </main>
  );
}