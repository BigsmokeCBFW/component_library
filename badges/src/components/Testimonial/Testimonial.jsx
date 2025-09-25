import Icon from "../../icon/Icon.jsx"
import Image from "./Image.jsx"
import Avatar from "../../assets/testimonia-img.jpg"
import Quote from "./Quote.jsx"
import Name from "./Name.jsx"
import Role from "./Role.jsx"

export default function Testimonial({avatar, children}){
  return (
    <div className="testimonial">
      <Image avatar={avatar}/>
      <div className="content">
        <Icon variant="quote"/>
        {children}
      </div>

    </div>
  )
}