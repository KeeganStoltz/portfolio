import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
    // Download CV handler
    const downloadCV = async () => {
        const filePath = `${import.meta.env.BASE_URL}Keegan_Stoltz_CV.pdf`;
        console.log('Downloading CV from:', filePath);
        try {
            const res = await fetch(filePath);
            if (!res.ok) throw new Error('CV not found');
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filePath.split('/').pop();
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            // Fallback: try opening the file directly (this will let the browser handle it)
            window.open(filePath, '_self');
        }
    };
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
            <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
                {/* Tag box with gradient border */}
                <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                        <i className='bx bx-diamond'></i>
                        INTRODUCING
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 text-center">
                    KEEGAN STOLTZ <br /> CV
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] text-center">
                    A passionate developer crafting elegant solutions with code. Full stack development
                    expertise with a focus on performance, accessibility, and user experience.
                </p>

                {/* Call-to-Action Button */}
                <div className="flex gap-4 mt-12">
                    <button onClick={downloadCV} type="button" aria-label="Download CV" className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]">
                        Download CV <i className='bx bx-download'></i>
                    </button>

                    <a className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white" href="#projects">
                        See Projects <i className='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            {/* 3d Image */}

            <Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-500 border-t-transparent" />
                    </div>
                }
            >
                <Spline className="absolute lg:top-0 top-[-20%] bottom-0 right-0 -z-10"
                    scene="https://prod.spline.design/ixJQTDKiAac2De5s/scene.splinecode"
                />
            </Suspense>

        </main>
    )
}

export default Hero
