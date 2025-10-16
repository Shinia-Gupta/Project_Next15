"use client"

import Link from "next/link"
import { use } from "react"


export default function ArticlePage({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: "en" | "fr" | "es" }> }) {
    const { articleId } = use(params)
    const { lang = "en" } = use(searchParams)
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">News Article {articleId}</h1>
            <p className="mb-8">Reading in {lang}</p>
            <div>

                <Link href={`/articles/${articleId}?lang=en`} className="text-blue-500 hover:underline">
                    English
                </Link><br />
                <Link href={`/articles/${articleId}?lang=fr`} className="text-blue-500 hover:underline">
                    French
                </Link> <br />
                <Link href={`/articles/${articleId}?lang=es`} className="text-blue-500 hover:underline">
                    Spanish
                </Link>
            </div>
        </div>
    )
}