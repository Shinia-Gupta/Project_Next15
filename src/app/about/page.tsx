//WAY 1 of configuring metadata
//this metadata will be added to the parent metadata
//(in this case root layout metadata) and will be merged
//(if same key then child metadata will override parent metadata)
//to form the final metadata for this page
//(in this case about page)
//this is static metadata
//to make it dynamic use generateMetadata function
//like in page.tsx of products/[id] folder
//(in that case metadata will be generated at request time)
//(in that case metadata can be async also)
//(in that case metadata can use params also)
//(in that case metadata can use fetch also)
//(in that case metadata can use anything which is available at request time)
//(in that case metadata can be different for different requests)

export const metadata={
  title:"About Page Metadata title"
}

export default function About() {
  return (
    <main>
      <h1>Welcome to About!</h1>
    </main>
  );
}