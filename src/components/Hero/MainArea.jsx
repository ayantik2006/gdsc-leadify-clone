import { ArrowUpRight } from "lucide-react"

function MainArea() {
  return (
    <div className="w-full h-full text-white flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-5 font-playfair px-20 pt30 text-7xl [@media(max-width:590px)]:text-5xl [@media(max-width:590px)]:px-10">
            <h1>We Bring You</h1>
            <h1>Customers</h1>
        </div>
        <div className="px-20 max-w-170 text-neutral-300 [@media(max-width:590px)]:px-10">
            <p>We build high-converting lead systems that bring you qualified leads every single day using ads, landing pages, and automation</p>
        </div>
        <div className="flex items-center px-20 [@media(max-width:590px)]:px-10">
            <button className="bg-orange-500 px-6 py-2 rounded-xl cursor-pointer duration-300">
                Get Started
            </button>
            <button className="bg-orange-500 py-2 rounded-xl px-3 cursor-pointer">
                <ArrowUpRight/>
            </button>
        </div>
    </div>
  )
}

export default MainArea