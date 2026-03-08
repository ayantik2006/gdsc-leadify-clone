"use client"

import React, { useState } from "react"

function Testimonials() {

  const dummyCardDatas = [
    {
      image: "/assets/avatar1.jpg",
      text: "Working with this agency completely transformed our digital presence. Our inbound leads increased by 3x in just 60 days.",
      name: "Sarah Thompson",
      role: "Head of Marketing, Fintechly"
    },
    {
      image: "/assets/avatar2.jpg",
      text: "They don't just design — they think like business partners. Every decision was backed by strategy and data.",
      name: "Michael Chen",
      role: "Product Manager, SaaScore"
    },
    {
      image: "/assets/avatar3.jpg",
      text: "From branding to website performance marketing — everything felt aligned. Best agency experience we've had.",
      name: "Daniel Roberts",
      role: "Founder, GrowthLab"
    },
    {
        image : "",
        text : "Something",
        name : "i dont know man",
        role : "Neither do i bro",
    },
    {
       image : "",
        text : "Something",
        name : "i dont know man",
        role : "Neither do i bro",
    },
    {
        image : "",
        text : "Something",
        name : "i dont know man",
        role : "Neither do i bro",
    },
    {
        image : "",
        text : "Something",
        name : "i dont know man",
        role : "Neither do i bro",
    },
    
  ]

  const [index, setIndex] = useState(0)

  const nextCard = () =>
    setIndex((i) => (i + 1) % dummyCardDatas.length)

  const previousCard = () =>
    setIndex((i) => (i - 1 + dummyCardDatas.length) % dummyCardDatas.length)

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto flex justify-between items-start mb-16">

        <h2 className="text-5xl font-serif leading-tight">
          What Our <br /> Clients Say
        </h2>

        <p className="text-gray-600 w-100 relative top-10">
          Real feedback from businesses that use our lead
          generation systems to grow every day.
        </p>

      </div>

      {/* Carousel or Pagination whatever people call it */}
      <div className="max-w-6xl mx-auto overflow-hidden">

        <div
          className="flex transition-transform duration-500 gap-6"
          style={{
            transform: `translateX(-${index * 33.333}%)`
          }}
        >

          {dummyCardDatas.map((card, i) => (

            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm min-w-[32%]"
            >
              <div className="mb-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>

              <p className="text-gray-700 mb-6">
                "{card.text}"
              </p>

              <div className="mt-6">
                <p className="font-semibold">
                  {card.name}
                </p>
                <p className="text-sm text-gray-500">
                  {card.role}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
      {/* the left and right buttons */}
      <div className="flex justify-center gap-6 mt-10">

        <button
          onClick={previousCard}
          className="border px-4 py-2 rounded-md"
        >
          ←
        </button>

        <button
          onClick={nextCard}
          className="border px-4 py-2 rounded-md"
        >
          →
        </button>

      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-6">

        {dummyCardDatas.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full ${
              i === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}

      </div>

    </section>
  )
}

export default Testimonials