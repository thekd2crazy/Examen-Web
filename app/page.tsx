import { addreservation } from "@/lib/reservation"
import { FiPlus } from "react-icons/fi"
import TypingEffect from "./components/TypingEffet"




export default async function ReservationEditor() {

  return (
    <main className="min-h-screen bg-amber-50 px-6 py-10">
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-2">
        <h1 className="text-center text-base"><TypingEffect text="Ajouter des réservations" /></h1>
        {/*Add task */}
        <form action={addreservation} className="mx-auto max-w-3xl space-y-4 p-6">
          <input
            name='name_reservation'
            type="text"
            placeholder="Nom de la réservation"
            className="w-full rounded-lg border p-3 bg-amber-100"
          />
          <input
            name='phone_number'
            type="text"
            placeholder="numero de tel"
            className="w-full rounded-lg border p-3 bg-amber-100"
          />
          <input
            name='count_people'
            type="text"
            placeholder="nombre de personnes"
            className="w-full rounded-lg border p-3 bg-amber-100"
          />
          <input
            name='date'
            type="text"
            placeholder="date de réservation"
            className="w-full rounded-lg border p-3 bg-amber-100"
          />

          <button
            type="submit"
            className='px-4 py-2 bg-amber-500 rounded hover:bg-amber-200 transition scale-3d'
          >
            <FiPlus size={20} />
          </button>
        </form>
      </section>
    </main>
  )
}