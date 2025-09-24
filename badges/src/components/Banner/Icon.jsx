import { FaCheckCircle } from "react-icons/fa"
import { IoMdWarning, IoIosCloseCircle  } from "react-icons/io";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";

export default function Icon({variant}){
  if(variant === "success"){
    return <FaCheckCircle className={`${variant}-icon icon`}/>
  }else if(variant === "warning"){
    return <IoMdWarning className={`${variant}-icon icon`}/>
  }else if(variant === "error"){
    return <IoIosCloseCircle className={`${variant}-icon icon`}/>
  }else{
    return <TbInfoSquareRoundedFilled className="neutral-icon icon"/>
  }

}