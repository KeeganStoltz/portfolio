import SplineOnVisible from "../utils/SplineOnVisible";


const Hero = () => {
    const downloadCV = async () => {
        const filePath = `${import.meta.env.BASE_URL}Keegan_Stoltz_CV.pdf`;
        try {
            const res = await fetch(filePath);
            if (!res.ok) throw new Error("CV not found");
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filePath.split("/").pop();
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            window.open(filePath, "_self");
        }
    };


    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
            <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
                <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                        <i className='bx bx-diamond'></i>
                        INTRODUCING
                    </div>
                </div>


                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 text-center">
                    KEEGAN STOLTZ <br /> CV
                </h1>


                <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] text-center">
                    A passionate developer crafting elegant solutions with code. Full stack development expertise with a focus on performance, accessibility, and user experience.
                </p>


                <div className="flex gap-4 mt-12">
                    <button onClick={downloadCV} type="button" aria-label="Download CV" className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]">
                        Download CV <i className='bx bx-download'></i>
                    </button>


                    <a className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white" href="#projects">
                        See Projects <i className='bx bx-link-external'></i>
                    </a>
                </div>
            </div>


            <SplineOnVisible
                className="absolute lg:top-0 top-[-20%] bottom-0 right-0 -z-10 spline-container spline-container--interactive"
                scene={`${import.meta.env.BASE_URL}spline/hero.splinecode`}
            />
        </main>
    );
};


export default Hero;