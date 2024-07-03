import { Button } from "@/components/ui/button";
import about from "../assets/about.png";
import landingImage from '../assets/5.png';
import appDownloadImage from "../assets/appDownload.png";
const Home = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className=" bg-slate-100 shadow-md rounded-xl py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-cyan-600 ">
                Tuck into a takeway today
            </h1>
            <span className="text-xl "> Enjoy food now!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-">
            <img src={about} alt="about" className="rounded-"/>
            <div className="flex flex-col items-start justify-center sm:gap-3 md:gap-1 lg:gap-4 text-start py-6 px-10 bg-cyan-700 ">
                <span className="font-bold tracking-tighter text-3xl text-white"> All About FoodApp</span>
                <span className="text-white"> 
                    We have been serving irresistible comfort food since 1999. Our mission is to keep you smiling with every bite.
                </span>
                <span className="text-white">
                    Treat yourself to a feel-good meal today!
                </span>
                <Button className="rounded-3xl py-2 text-white font-bold tracking-wider">
                    Learn More
                </Button>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>

    </div>
  )
}

export default Home;