'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { eq } from 'drizzle-orm'
import { articlesTable } from '@/db/schema'



export async function getArticles() {
    return await db.select().from(articlesTable)
}

export async function addArticle(form: FormData) {
    await db.insert(articlesTable).values({
        title: String(form.get('title')),
        content: String(form.get('content')),
        author: String(form.get('author')),
        post: false
    })
    redirect((await headers()).get('referer') ?? '/') // pour que ça ne rénvoit dans le site 
}

export async function editArticle(form: FormData) {
    await db
        .update(articlesTable)
        .set({
            title: String(form.get('title')),
            content: String(form.get('content')),
            author: String(form.get('author')),
            post: form.get('done') === "on",
        })
        .where(eq(articlesTable.id, Number(form.get('id'))))
    redirect((await headers()).get('referer') ?? '/')
}

export async function removeArticle(id: number) {
    await db.delete(articlesTable).where(eq(articlesTable.id, id))
    redirect((await headers()).get('referer') ?? '/')
}