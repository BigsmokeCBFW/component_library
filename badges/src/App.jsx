import Badge from "./components/Badge.jsx"
import Banner from "./components/Banner/index.jsx"
import Testimonial from "./components/Testimonial/index.jsx"
import Avatar from "./assets/testimonia-img.jpg"

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


      <Testimonial avatar={Avatar}>
          <Testimonial.Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial.Quote>
          <Testimonial.Name>May Anderson</Testimonial.Name>
          <Testimonial.Role>Workcation, CTO</Testimonial.Role>
      </Testimonial>
    </>
  )
}

/*

*/