"use server"
// app/articles/page.tsx
import { getReservations } from "@/lib/reservation"
import Link from "next/link"

export default async function ArticlesPage() {
    const reservations = await getReservations()

    return (
        <main className="min-h-screen bg-amber-50 px-6 py-10">
            <div className="max-w-5xl mx-auto space-y-8">



                {/* Liste des articles */}
                <section className="grid gap-6 sm:grid-cols-2">
                    {reservations.map(reservation => (
                        <article
                            key={reservation.id}
                            className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
                        >
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {reservation.name_reservation}
                                </h2>
                                <span> id = {reservation.id}</span>

                                <p className="text-gray-600 line-clamp-3">
                                    Numéro de tél : {reservation.phone_number}
                                </p>
                            </div>

                            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                                <span>
                                    nombres de personnes : {reservation.countpeople}
                                </span>

                                <span>
                                    {reservation.reserdedAt ? new Date(reservation.reserdedAt).toLocaleDateString() : 'N/A'}
                                </span>
                            </div>

                            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                                <span>
                                    Date de réservation : {reservation.date}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="mt-5 flex justify-end gap-3">
                                <Link
                                    href={`/booking/${reservation.id}`}
                                    className="px-3 py-1.5 bg-amber-500 text-white rounded hover:bg-amber-400 transition"
                                >
                                    Éditer
                                </Link>


                            </div>
                        </article>
                    ))}
                </section>

                {/* Aucun article */}
                {reservations.length === 0 && (
                    <p className="text-center text-gray-500">
                        Aucun article pour le moment.
                    </p>
                )}
            </div>
        </main>
    )
}


