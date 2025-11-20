import Spline from '@splinetool/react-spline';

const Contact = () => {
    return (
        <main>
            {/* Contact Section */}
            <div className="absolute inset-0 z-50 bottom-0 top-0 flex flex-col gap-6 justify-center items-center pointer-events-none overflow-hidden">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8">
                    Contact me:
                </h1>
                <a className="text-blue-500 underline flex items-center pointer-events-auto" href="mailto:stoltz206@gmail.com">
                    <i class="bx bxs-envelope-open bx-tada-hover inline-block w-6 h-4 mr-2" />
                    stoltz206@gmail.com
                </a>
                <a className="text-blue-500 underline flex items-center pointer-events-auto" href="tel:+27733213857">
                    <i className='bx bxs-phone-call bx-tada-hover inline-block w-6 h-4 mr-2'></i>
                    +27 73 321 3857
                </a>
                <a className="text-blue-500 underline flex items-center pointer-events-auto" href="https://www.linkedin.com/in/keegan-stoltz-4758bb244/">
                    <i class='bx bxl-linkedin-square bx-tada-hover inline-block w-6 h-4 mr-2'></i>
                    LinkedIn Profile
                </a>
            </div>

            {/* 3D Image */}
            <Spline className="absolute top-0 bottom-0 -z-1 pointer-events-auto overflow-hidden" scene="https://prod.spline.design/PI66tiR2MsIaH6Ro/scene.splinecode" />
        </main>
    )
}

export default Contact
