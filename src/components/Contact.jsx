import SplineOnVisible from "../utils/SplineOnVisible";


const Contact = () => {
    return (
        <main>
            <div className="absolute inset-0 z-50 bottom-0 top-0 flex flex-col gap-6 justify-center items-center pointer-events-none overflow-hidden">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8">
                    Contact me:
                </h1>
                <a className="text-blue-500 underline flex items-center pointer-events-auto" href="mailto:stoltz206@gmail.com">
                    <i className="bx bxs-envelope-open bx-tada-hover inline-block w-6 h-4 mr-2" />
                    stoltz206@gmail.com
                </a>
                <a className="text-blue-500 underline flex items-center pointer-events-auto" href="tel:+27733213857">
                    <i className='bx bxs-phone-call bx-tada-hover inline-block w-6 h-4 mr-2'></i>
                    +27 73 321 3857
                </a>
                <a className="text-blue-500 underline flex items-center pointer-events-auto" href="https://www.linkedin.com/in/keegan-stoltz-4758bb244/">
                    <i className='bx bxl-linkedin-square bx-tada-hover inline-block w-6 h-4 mr-2'></i>
                    LinkedIn Profile
                </a>
            </div>


            <SplineOnVisible
                className="absolute top-0 bottom-0 -z-1 pointer-events-auto overflow-hidden spline-container spline-container--interactive"
                scene={`${import.meta.env.BASE_URL}spline/contact.splinecode`}
            />
        </main>
    );
};


export default Contact;