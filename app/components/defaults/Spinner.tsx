import { BiLoaderCircle } from "react-icons/bi"


const Spinner = () => {
  return (
    <span className="text-rose-400">
        <BiLoaderCircle className="animate-spin h-5 w-5 mx-auto"/>
    </span>
  )
}

export default Spinner