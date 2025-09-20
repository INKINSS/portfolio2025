import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import emailjs from "@emailjs/browser"
import { useState } from "react"
import CustomToast from '../common/CustomToast'

const Form = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setStatus("success")
      setOpen(true)
      setTimeout(() => {
        localStorage.setItem("toastMessage", "success")
        window.location.href = '/'
      }, 4000)
    } catch (error) {
      console.error("Error al enviar:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
        <div>
          <Label className="text-grayLight text-sm md:text-base" htmlFor="name">
            Nombre
          </Label>
          <Input type="text" id="name" name="name" required />
        </div>

        <div>
          <Label className="text-grayLight text-sm md:text-base" htmlFor="email">
            Correo
          </Label>
          <Input type="email" id="email" name="email" required />
        </div>

        <div>
          <Label
            className="text-grayLight text-sm md:text-base"
            htmlFor="message"
          >
            Mensaje
          </Label>
          <Input type="text" id="message" name="message" required />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="text-grayLight mt-5 text-sm md:text-base border border-white px-3 py-1 bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-300 disabled:opacity-50"
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>

        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">
            ❌ Hubo un error, inténtalo de nuevo
          </p>
        )}
      </form>

      <CustomToast open={open} setOpen={setOpen} />
    </>
  )
}

export default Form
