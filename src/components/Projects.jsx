import Header from './Header.jsx';
import StarryBackground from "../assets/StarryBackground";
import Spline from '@splinetool/react-spline';

const Projects = () => {
    return (
        <main>
            {/* Starry Background */}
            <StarryBackground starCount={180} />
            {/* Gradient Image */}
            <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-img" />
            {/* Blur Effect */}
            <div className="h-0 w-[40rem] absolute top-[20%] right-[5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
            {/* Header Component */}
            <Header />
        </main>
    )
}

export default Projects
