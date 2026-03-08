import MainArea from "./MainArea";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="flex flex-col h-screen">
        <Navbar/>
        <MainArea/>
    </div>
  )
}

export default Hero