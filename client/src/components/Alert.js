import { useAppContext } from "../../src/context/appContext"

const Alert = () => {
const {alertType,alertText}=useAppContext()
  return (
    <div className={`alert alert-${alertType}`} >
           {alertText}
    </div>
  )
}

export default Alert
