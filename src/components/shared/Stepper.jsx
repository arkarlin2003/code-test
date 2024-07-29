import { FiCheck } from "react-icons/fi"

const Stepper = ({children}) => {
  return (
    <div className="w-full flex space-x-[75px] relative after:content-[''] after:w-full  after:z-10 after:border  after:absolute after:top-[20.37px] after:left-[26px] after:border-[#FF9C72]">
        {children}
    </div>
  )
}

export default Stepper