import SplineOnVisible from "../utils/SplineOnVisible";


const AboutMe = () => {
    return (
        <main>
            <div className="lg:mt-20 items-center justify-between inset-0 relative min-h-[calc(90vh-6rem)] flex flex-col lg:flex-row">
                <div className="ml-[5%] z-10 p-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                        About Me
                    </h1>


                    <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
                        My focus on development sharpens my expertise in syntax, databases, and algorithms. I bring a methodical and analytical approach to every task and follow OOP and enterprise coding practices.
                    </p>
                </div>


                <SplineOnVisible
                    className="relative -z-10 spline-container spline-container--interactive h-[100%] w-[100%] mr-0 lg:w-[40%] lg:h-[40%] lg:mr-[30%]"
                    scene="/spline/about.splinecode"
                />
            </div>
        </main>
    );
};


export default AboutMe;