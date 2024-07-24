import Home from "../Home";
import Navbar from "../Navbar";
import FeatureVehical from "../FeatureVehical";
import WhyChooseUs from "../WhyChooseUs";
import ClientSpeak from "../ClientSpeak";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
// import SignIn from "./SignIn"

export default function Landing() {
  return (
    <div>
    <ScrollToTop/>
     <Navbar/>
      <Home/>
      <FeatureVehical/>
      <WhyChooseUs/>
      <ClientSpeak/>
      <Footer/>
{/* <SignIn/> */}
    </div>
  )
}
