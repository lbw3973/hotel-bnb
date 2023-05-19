import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useToastMessage = (Msg, position = 'bottom-left') => {
  toast.success(Msg, {
    // position: `${position}`,
    position: position,
    autoClose: 2000,
    hideProgressBar: false,
    rtl: false,
    theme: 'light',
    pauseOnHover: false,
  })
}

export default useToastMessage
