import React from 'react'

function CTA() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen w-full justify-center items-center relative">

      {/* Heading */}
      <div className="relative text-5xl font-serif text-center right-50 bottom-12">
        <p>We Build Systems That Brings you</p>
        <p className="relative right-32">Consistent Customers</p>
      </div>
      <div className="relative top-8 right-40">
        <img src="https://res.cloudinary.com/dpju1wia5/image/upload/v1772970546/photoPage2_yr5isy.jpg" className="h-[210px] w-[310px] object-cover" />
      </div>
      <div className="text-black relative left-60 top-20 w-[800px]">

        <p className="flex flex-col text-sm font-sans leading-relaxed">
          Too many companies waste money on ads, websites, and agencies that
          don't deliver real results. We create complete, conversion-focused
          lead generation systems that attract the right people, capture their
          interest, and turn them into paying customers automatically — without
          guesswork or wasted ad spend.
        </p>

        <div className="flex gap-3 mt-4 relative">
          <button className="bg-orange-400 rounded-2xl px-4 py-2 text-white font-sans hover:scale-110 transition duration-300">
            Learn More
          </button>

          <button className="bg-orange-400 h-10 w-10 rounded-2xl flex items-center justify-center hover:scale-110 transition duration-300">
            <i class="fa-solid fa-arrow-trend-up"></i>
          </button>
        </div>

      </div>

    </div>
  )
}

export default CTA