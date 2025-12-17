
// app/articles/page.tsx
import { getArticles } from "@/lib/article"
import Link from "next/link"

export default async function ArticlesPage() {
    const articles = await getArticles()

    return (
        <main className="min-h-screen bg-amber-50 px-6 py-10">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Titre */}
                <header className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-amber-900">
                        Tous les articles
                    </h1>

                    <Link
                        href="/articles/add"
                        className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-400 transition"
                    >
                        + Nouvel article
                    </Link>
                </header>

                {/* Liste des articles */}
                <section className="grid gap-6 sm:grid-cols-2">
                    {articles.map(article => (
                        <article
                            key={article.id}
                            className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
                        >
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {article.title}
                                </h2>

                                <p className="text-gray-600 line-clamp-3">
                                    {article.content}
                                </p>
                            </div>

                            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                                <span>
                                    {article.author}
                                </span>

                                <span>publishedAt
                                    {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'N/A'}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="mt-5 flex justify-end gap-3">
                                <Link
                                    href={`/articles/edit?id=${article.id}`}
                                    className="px-3 py-1.5 bg-amber-500 text-white rounded hover:bg-amber-400 transition"
                                >
                                    Éditer
                                </Link>

                                <Link
                                    href={`/articles/${article.id}`}
                                    className="px-3 py-1.5 border border-amber-500 text-amber-600 rounded hover:bg-amber-100 transition"
                                >
                                    Voir
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>

                {/* Aucun article */}
                {articles.length === 0 && (
                    <p className="text-center text-gray-500">
                        Aucun article pour le moment.
                    </p>
                )}
            </div>
        </main>
    )
}
