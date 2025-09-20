import * as Toast from "@radix-ui/react-toast"
import '../../styles/global.css'

const CustomToast = ({
  open,
  setOpen,
}) => {
  return (
    <Toast.Provider swipeDirection="right" duration={6000}>
      <Toast.Root
        className="bg-blue-100/5 border-grayLight border text-white p-4 shadow-lg data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="text-base font-semibold">
          Gracias por tu mensaje
        </Toast.Title>
        <Toast.Description className="text-sm text-gray-300">
          Me comunicaré contigo muy pronto
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 z-50 m-4 flex w-96 max-w-full flex-col gap-2 outline-none" />
    </Toast.Provider>
  )
}

export default CustomToast