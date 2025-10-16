export default async function ArticleLayout({ children, params, searchParams }: { children:React.ReactNode, params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: "en" | "fr" | "es" }> }) {
    const { articleId } = await params
    
    // const { lang = "en" } = await searchParams
    return (
        <div>
            <h1>Layout Article page</h1>
            <h1 className="text-3xl font-bold mb-4">News Article In Layout with Article Id - {articleId}</h1>
            {/* <p className="mb-8">Reading in {lang}</p> */}
            {children}
        </div>
    )
}