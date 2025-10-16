export default async function BlogPage() {
    await new Promise((resolve) => setTimeout(()=>resolve("intentional delay"), 3000));
  return <h1>Blog Page</h1>;
}