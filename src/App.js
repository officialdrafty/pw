// important commpents
import Footer from "./components/Footer"
import "../src/css/layout.css"

// Section of the components
import SectionOne from "./components/section/SectionOne"
import SectionTwo from "./components/section/SectionTwo"
import SectionThree from "./components/section/SectionThree"
import SectionFour from "./components/section/SectionFour"

const Homepage = () => {

  return (
    <div id="content">
        <SectionOne />
        <SectionTwo />
        <div className="line"></div>
        <SectionThree />
        <div className="line"></div>
        <SectionFour/>
        <Footer />
    </div>
  )
}

export default Homepage
