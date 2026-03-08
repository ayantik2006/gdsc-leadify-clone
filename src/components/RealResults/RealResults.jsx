import React from 'react';
import portraitImg from '../../assets/portrait.png';

function RealResults() {
    return (
        <section className="relative flex items-center min-h-[600px] flex-grow py-20 px-8 overflow-hidden bg-[#1a1a1a] text-white font-sans">
            <div className="relative grid w-full grid-cols-1 gap-8 mx-auto items-center">

                {/* Left Column: Text and Button */}
                <div className="z-20 max-w-[400px]">
                    <h2 className="mb-5 font-serif text-[3.2rem] font-normal leading-[1.15] text-[#f0f0f0]">
                        Real Businesses<br />
                        Real Results
                    </h2>
                    <p className="mb-8 text-[0.95rem] leading-[1.7] text-[#f0f0f0] max-w-[375px]">
                        We build high-converting lead systems that bring you qualified leads every single day using ads, landing pages, and automation.
                    </p>
                    <div className="flex items-center gap-0">
                        <button className="bg-[#e8611a] text-white px-6 py-3.5 text-base font-medium rounded-[15px] cursor-pointer transition-colors hover:bg-[#d4570f]">
                            Learn More
                        </button>
                        <button className="bg-[#e8611a] text-white px-[18px] py-3.5 text-base rounded-[15px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#d4570f]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Center Column: Portrait Image (Absolute) */}
                <div className="absolute top-1/2 left-1/2 z-10 w-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                        src={portraitImg}
                        alt="Monochrome Portrait"
                        className="w-full h-auto opacity-70 [mask-image:linear-gradient(to_bottom,black_50%,transparent_80%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_80%)]"
                    />
                </div>

                {/* Right Column: Industry List */}
                <div className="z-20 flex flex-col justify-self-end max-w-[380px] -translate-y-20 mr-48">
                    <div className="py-7 border-b border-white first:pt-0">
                        <h3 className="mb-3 font-serif text-[1.7rem] font-normal text-[#f0f0f0]">
                            Software & Tech
                        </h3>
                        <p className="m-0 text-[0.9rem] leading-[1.6] text-[#f0f0f0] max-w-[400px]">
                            We drive targeted SaaS leads with high-converting demo funnels.
                        </p>
                    </div>

                    <div className="py-7 border-b border-white">
                        <h3 className="mb-3 font-serif text-[1.7rem] font-normal text-[#f0f0f0]">
                            E-Commerce & Retail
                        </h3>
                        <p className="m-0 text-[0.9rem] leading-[1.6] text-[#f0f0f0] max-w-[400px]">
                            We convert visitors into buyers with optimized product funnels and ads.
                        </p>
                    </div>

                    <div className="py-7 border-none last:pb-0">
                        <h3 className="mb-3 font-serif text-[1.7rem] font-normal text-[#f0f0f0]">
                            Health & Wellness
                        </h3>
                        <p className="m-0 text-[0.9rem] leading-[1.6] text-[#f0f0f0] max-w-[400px]">
                            We generate appointment-ready leads using local ads and booking funnels.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default RealResults;