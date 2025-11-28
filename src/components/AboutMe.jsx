import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const AboutMe = () => {
    return (
        <main>
            <div className="lg:mt-20 items-center justify-between inset-0 relative min-h-[calc(90vh-6rem)] flex flex-col lg:flex-row">
                <div className="ml-[5%] z-10 p-4">
                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                        About Me
                    </h1>
                    {/* Description */}
                    <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
                        My focus on development sharpens my expertise in syntax, databases, and algorithms, ensuring that I bring a methodical and analytical approach to every task. Any team I work with benefits from my strong work ethic, expertise within the space as well as my use of OOP and good coding practices. Adept in C#, Java, JavaScript, TypeScript, React, HTML, CSS, Client-side and Server-side.
                    </p>
                </div>
                {/* 3d Image */}

                {/* Display a fallback while the Spline scene loads */}
                <Suspense
                    fallback={
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-500 border-t-transparent" />
                        </div>
                    }
                >
                    <Spline className='relative inset-0 -z-10' scene="https://prod.spline.design/dlnTxANk77DA05xc/scene.splinecode" />
                </Suspense>
            </div>
        </main>
    )
}

export default AboutMe
