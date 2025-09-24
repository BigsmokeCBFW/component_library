import React from "react"
import { BannerContext } from "./Banner.jsx"

export default function Description ({children}){
  const value = React.useContext(BannerContext)
  return(
    <p className={"description "+  value + "-desc"}>{children}</p>
  )
}