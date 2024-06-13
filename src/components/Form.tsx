import { useState, ChangeEvent, FormEvent } from 'react'
import { Activity } from '../types'
import { categories } from '../data/categories'

export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: '',
    calories: 0,
  })

  const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id)
    setActivity({
      ...activity,
      [e.target.id] : isNumberField ? +e.target.value : e.target.value
    })
  }

  const isValidActivity = () => {
    const {name, calories} = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category" className="font-bold">
            {' '}
            Categoria:{' '}
          </label>
          <select
            className="border border-slate-300 rounded-lg bg-white p-2 w-full"
            id="category"
            value={activity.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-bold">
            Actividad:
          </label>
          <input
            value={activity.name}
            className="border border-slate-300 p-2 rounded-lg"
            type="text"
            name="name"
            id="name"
            placeholder="Ej. Comida, Jugo de Naranja, Ejercicio, Ensalada, Pesas, Etc"
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">
            Calorias:
          </label>
          <input
            value={activity.calories}
            className="border border-slate-300 p-2 rounded-lg"
            type="number"
            name="calories"
            id="calories"
            placeholder="Calorias Ej. 300 O 500"
            onChange={handleChange}
          />
        </div>
        <input
          disabled={!isValidActivity()}
          type="submit"
          className="bg-gray-800 hover:bg-gay-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
          value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
        />
      </form>
    </>
  )
}
