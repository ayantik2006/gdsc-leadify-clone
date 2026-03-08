import React from 'react';

function Footer() {
    return (
        <footer className="flex flex-col bg-white text-[#222] font-sans">
            {/* The giant text acting as a header in the document flow */}
            <div className="mt-8 mb-16 text-center select-none font-serif text-[20vw] leading-[0.8] tracking-[-2px] text-[#f2f2f2]">
                Leadify
            </div>

            <div className="mx-auto flex w-full max-w-[1200px] justify-between items-start px-8 pb-24">
                {/* Left: Heading and Socials */}
                <div className="flex-1">
                    <h2 className="mt-0 mb-8 font-serif text-[3rem] font-normal leading-[1.1] text-[#222]">
                        Consistent Leads<br />That Convert
                    </h2>
                    <div className="flex gap-[15px]">
                        {/* Instagram */}
                        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222] text-white transition-colors duration-200 hover:bg-[#555]">
                            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222] text-white transition-colors duration-200 hover:bg-[#555]">
                            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>
                        {/* X / Twitter */}
                        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222] text-white transition-colors duration-200 hover:bg-[#555]">
                            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"></path></svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222] text-white transition-colors duration-200 hover:bg-[#555]">
                            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Middle: Links */}
                <div className="flex-1 flex justify-center">
                    <ul className="m-0 list-none p-0">
                        <li className="mb-6"><a href="#" className="text-[0.95rem] font-medium text-[#444] no-underline transition-color duration-200 hover:text-black">Home</a></li>
                        <li className="mb-6"><a href="#" className="text-[0.95rem] font-medium text-[#444] no-underline transition-color duration-200 hover:text-black">Services</a></li>
                        <li className="mb-6"><a href="#" className="text-[0.95rem] font-medium text-[#444] no-underline transition-color duration-200 hover:text-black">How It Works</a></li>
                        <li className="mb-6"><a href="#" className="text-[0.95rem] font-medium text-[#444] no-underline transition-color duration-200 hover:text-black">Case Studies</a></li>
                        <li className="mb-6"><a href="#" className="text-[0.95rem] font-medium text-[#444] no-underline transition-color duration-200 hover:text-black">Pricing</a></li>
                    </ul>
                </div>

                {/* Right: Feature Image Card */}
                <div className="flex-1 flex justify-end">
                    <div className="relative flex h-[260px] w-[260px] flex-col justify-between bg-[#1a1a1a] bg-cover bg-center p-6 text-white">
                        {/* Add background image here via inline style or CSS: backgroundImage: "url('/path.png')" */}
                        <span className="self-end text-[0.8rem] font-medium tracking-[0.5px]">Free Resources</span>
                        <a href="#" className="flex items-center gap-2 self-start text-[0.85rem] font-semibold tracking-[1px] text-white no-underline">
                            <span className="text-[1.2rem] font-normal">↗</span> EXPLORE NOW
                        </a>
                    </div>
                </div>
            </div>

            {/* Very Bottom Strip */}
            <div className="flex justify-between bg-[#2a2a2a] bg-cover bg-center px-16 py-6 text-[0.85rem] font-medium text-[#e0e0e0]">
                {/* To add the texture, use class: bg-[url('/path/to/texture.jpg')] */}
                <p>Privacy Policy</p>
                <p>© 2026 Leadify. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;