export default async function FirstBlog() {
    await new Promise((resolve) => setTimeout(()=>resolve("intentional delay"), 3000));

  return (
    <main>
      <h1>Welcome to First Blog!</h1>
    </main>
  );
}