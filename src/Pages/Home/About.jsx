
export default function About() {
    return (
        <div id="about" className="mx-auto py-20 flex flex-col lg:flex-row items-center text-white px-4">
            <div className="w-full lg:w-1/2 space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-[55px] font-semibold ">About Me</h1>
                <p className="md:text-xl">Creative visionary with a flair for design and a passion for storytelling. Proficient in Adobe Creative Suite and skilled in typography, layout, and branding. Dedicated to transforming concepts into visually compelling works of art that leave a lasting impression. Experienced in collaborating with clients to bring their visions to life while exceeding expectations. Striving to push the boundaries of creativity and make a meaningful impact through design.</p>
                <button className="border-2 border-[#425EFF] rounded-md py-2 px-7">WORK WITH ME</button>
            </div>
            <div className="lg:w-1/2 space-y-8 lg:pl-8 pt-8 lg:pt-0">
                <div className="flex items-center justify-around">
                    <div className="text-center border border-[#B886C9] rounded-tl-3xl rounded-br-3xl py-7 w-2/5">
                        <h2 className="text-4xl font-bold">850+</h2>
                        <p className="text-xl font-medium">Project Complete</p>
                    </div>
                    <div className="text-center border border-[#E0CBA6] rounded-tl-3xl rounded-br-3xl py-7 w-2/5">
                        <h2 className="text-4xl font-bold">400+</h2>
                        <p className="text-xl font-medium">Happy Client’s</p>
                    </div>
                </div>
                <div className="flex items-center justify-around">
                    <div className="text-center border border-[#85A8C8] rounded-tl-3xl rounded-br-3xl py-7 w-2/5">
                        <h2 className="text-4xl font-bold">1500+</h2>
                        <p className="text-xl font-medium">Sales</p>
                    </div>
                    <div className="text-center border border-[#D9D9D9] rounded-tl-3xl rounded-br-3xl py-7 w-2/5">
                        <h2 className="text-4xl font-bold">5Y</h2>
                        <p className="text-xl font-medium">Experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
