
import { editReservation, getReservation, getReservations, removeReservation } from "@/lib/reservation"
import { FiEdit, FiTrash2 } from "react-icons/fi"


type BlogAppProps = {
    params: Promise<{ id: string }>
}

export default async function BlogApp(props: BlogAppProps) {
    const id = Number((await props.params).id)
    const res = await getReservation(id)
    const poster = res[0]
    if (!poster) return <p>Hello voici vos données :  {id} {JSON.stringify(poster, null, 2)} </p>
    return (
        <main className="min-h-screen bg-amber-50 px-6 py-10">
            <section className="max-w-2xl mx-auto px-6 py-20 space-y-10">
                <ul className="space-y-3">

                    <li
                        key={poster.id}
                        className="flex justify-between mx-auto items-center bg-white p-5 rounded "
                    >
                        <form action={editReservation} className='justify-between space-x-40 space-y-4 w-90 '>
                            <div className="flex items-center space-x-10 space-y-2">

                                <input
                                    readOnly
                                    value={poster.id}
                                    name='id'
                                />
                                <input
                                    name='reserved'
                                    type='hidden'
                                    value={poster.reserved ? "done" : "on"}
                                />
                                <h3> nom de réservation </h3>
                                <input
                                    name='name_reservation'
                                    defaultValue={poster.name_reservation}
                                    className="flex-1 px-5 py-2 rounded text-black border border-gray-300
                                                    focus:ring-2 focus:ring-amber-500"
                                />

                            </div>
                            <h3> téléphone </h3>
                            <input
                                name="phone_number"
                                defaultValue={poster.phone_number}
                                className="w-full h-6 rounded-lg border p-3 bg-amber-100"
                            />
                            <h3> nombre de personnes </h3>
                            <input
                                name="countpeople"
                                defaultValue={poster.countpeople}
                                className="w-full h-6 rounded-lg border p-3 bg-amber-100"
                            />


                            <button type="submit" aria-label="Editer ..." className="px-3 py-1  bg-red-500 text-white rounded ml-auto hover:bg-red-600 transition scale-3d">
                                <FiEdit size={20} />
                            </button>

                        </form>

                        <form action={removeReservation.bind(null, poster.id)}>
                            <button
                                type="submit"
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition scale-3d"
                            >
                                <FiTrash2 size={20} />
                            </button>
                        </form>


                    </li>


                </ul>
            </section>
        </main>
    )
}
