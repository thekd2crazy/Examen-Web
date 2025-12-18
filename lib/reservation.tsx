'use server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { eq } from 'drizzle-orm'
import { reservationsTable } from '@/db/schema'



export async function getReservations() {
    return await db.select().from(reservationsTable)
}

export async function getReservation(id: number) { // est définit comme un string UUID 
    return await db.select()
        .from(reservationsTable)
        .where(eq(reservationsTable.id, Number(id)))
        .limit(1);
}

export async function addreservation(form: FormData) {
    await db.insert(reservationsTable).values({
        name_reservation: String(form.get('name_reservation')),
        phone_number: String(form.get('phone_number')),
        countpeople: String(form.get('count_people')),
        date: String(form.get("date")),
        reserved: false
    })
    redirect((await headers()).get('referer') ?? '/') // pour que ça ne rénvoit dans le site 
}

export async function editReservation(form: FormData) {
    await db
        .update(reservationsTable)
        .set({
            name_reservation: String(form.get('name_reservation')),
            phone_number: String(form.get('phone_number')),
            countpeople: String(form.get('count_people')),
            date: String(form.get("date")),
            reserved: form.get('done') === "on",
        })
        .where(eq(reservationsTable.id, Number(form.get('id'))))
    redirect((await headers()).get('referer') ?? '/')
}

export async function removeReservation(id: number) {
    await db.delete(reservationsTable).where(eq(reservationsTable.id, id))
    redirect((await headers()).get('referer') ?? '/')
}