import { FaCheckCircle } from "react-icons/fa"
import { IoMdWarning, IoIosCloseCircle } from "react-icons/io";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { ImQuotesLeft } from "react-icons/im";

export default function Icon({variant}){
  switch(variant){
    case "success":
      return <FaCheckCircle className={`success-icon icon`}/>
    case "warning":
       return <IoMdWarning className={`warning-icon icon`}/>
    case "error":
      return <IoIosCloseCircle className={`error-icon icon`}/>
    case "cloud":
      return <IoCloudUploadOutline className={"cloud-icon"}/>
    case "quote":
      return <ImQuotesLeft className={"quote-icon"}/>
    case "neutral":
      return <TbInfoSquareRoundedFilled className="neutral-icon icon"/>
    default:
      return <></>
    }
    
    
  }

