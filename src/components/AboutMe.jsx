import Header from './Header.jsx';
import StarryBackground from "../assets/StarryBackground";
import Spline from '@splinetool/react-spline';

const AboutMe = () => {
    return (
        <main>
            {/* Starry Background */}
            <StarryBackground starCount={180} />
            {/* Blur Effect */}
            <div className="h-0 w-[40rem] absolute top-[20%] right-[5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
            {/* Header Component */}
            <Header />
            <div className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
                <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
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
                <Spline className="absolute top-0 bottom-0 -z-10 scale-75 md:scale-90 lg:scale-100" scene="https://prod.spline.design/dlnTxANk77DA05xc/scene.splinecode" />
            </div>
        </main>
    )
}

export default AboutMe
