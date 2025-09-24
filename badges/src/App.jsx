import Badge from "./components/Badge.jsx"
import Banner from "./components/Banner/index.jsx"

export default function App(){
  
  return(
    <>
      <Badge edge="pill" color="indigo">This was a badge created by Say Gang!</Badge>
      <Banner variant="neutral" >Congratulation!</Banner>
      <Banner variant="warning" >
        <Banner.Title>Attention</Banner.Title>
        <Banner.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Description>
      </Banner>
      <Banner variant="error" >
        <Banner.Title>There is a problem with your application</Banner.Title>
        <Banner.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Description>
      </Banner>
      <Banner variant="success" >Hello Gang!</Banner>
    </>
  )
}