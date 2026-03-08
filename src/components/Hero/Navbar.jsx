import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full text-white px-20 py-8 [@media(max-width:890px)]:px-10">
        <div className="font-playfair text-3xl">
          <h1>Leadify</h1>
        </div>
        <div className="flex gap-10 [@media(max-width:890px)]:hidden">
          <div className="cursor-pointer duration-300 hover:text-neutral-300">
            Home
          </div>
          <div className="cursor-pointer duration-300 hover:text-neutral-300">
            Services
          </div>
          <div className="cursor-pointer duration-300 hover:text-neutral-300">
            How It Works
          </div>
          <div className="cursor-pointer duration-300 hover:text-neutral-300">
            Pricing
          </div>
        </div>
        <div className="[@media(max-width:890px)]:hidden">
          <button className="bg-white text-black px-4 py-2 rounded-xl cursor-pointer duration-300 hover:opacity-90 font-semibold">
            Contact Us
          </button>
        </div>
        <div
          className="[@media(min-width:890px)]:hidden hover:bg-neutral-700 p-1 rounded cursor-pointer duration-300"
          onClick={() => {
            setIsHamburgerActive((prev) => !prev);
          }}
        >
          {!isHamburgerActive && <Menu />}
          {isHamburgerActive && <X />}
        </div>
      </div>
      {isHamburgerActive && (
        <div className="p-4 w-full absolute left-0">
          <div className="bg-neutral-800 w-full h-fit rounded flex flex-col gap-4 items-center justify-center text-white py-5 px-5 border border-neutral-700">
            <div className="text-neutral-400 hover:text-white cursor-pointer duration-300">
              Home
            </div>
            <div className="text-neutral-400 hover:text-white cursor-pointer duration-300">
              Services
            </div>
            <div className="text-neutral-400 hover:text-white cursor-pointer duration-300">
              How It Works
            </div>
            <div className="text-neutral-400 hover:text-white cursor-pointer duration-300">
              Pricing
            </div>
            <button className="bg-white w-full text-black font-semibold py-2 rounded-md cursor-pointer duration-300 hover:opacity-90">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
