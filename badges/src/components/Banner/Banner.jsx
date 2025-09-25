import React from "react"

import Icon from "../../icon/Icon.jsx"


const BannerContext = React.createContext()

export default function Banner({variant, children}){
  if(!["success", "warning", "error", "neutral"].includes(variant)){
    variant = "neutral"
  }
  return(
    <BannerContext.Provider value={variant}>
      <div className={"banner " + variant}>
        <Icon variant={variant}/>
        <div>
          {children}
        </div>
          
      </div>
    </BannerContext.Provider>
  )
}

export { BannerContext }