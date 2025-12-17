import { addArticle } from "@/lib/article"
import { FiPlus } from "react-icons/fi"
import TypingEffect from "../components/TypingEffet"



export default async function ArticleEditor() {

    return (
        <section className="max-w-4xl mx-auto px-6 py-9 ">
            <h1 className="text-center text-base"><TypingEffect text="Ajouter les Articles" /></h1>
            {/*Add task */}
            <form action={addArticle} className="mx-auto max-w-3xl space-y-4 p-6">
                <input
                    name='title'
                    type="text"
                    placeholder="Titre de l’article"
                    className="w-full rounded-lg border p-3 bg-amber-100"
                />
                <input
                    name='author'
                    type="text"
                    placeholder="Nom de l'auteur"
                    className="w-full rounded-lg border p-3 bg-amber-100"
                />

                <textarea
                    name="content"
                    rows={7}
                    placeholder="Contenu de l’article"
                    className="w-full rounded-lg border p-3 bg-amber-100 text-black"
                />

                <button
                    type="submit"
                    className='px-4 py-2 bg-amber-500 rounded hover:bg-amber-200 transition scale-3d'
                >
                    <FiPlus size={20} />
                </button>
            </form>
        </section>
    )
}