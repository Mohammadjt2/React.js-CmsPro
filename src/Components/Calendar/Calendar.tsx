import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


export default function Example() {
  return (
    <Calendar
      className="bg-yellow-400 py-4 mx-8 font-bold w-full flex justify-center items-center "
      calendar={persian}
      locale={persian_fa}
    />
  )
}