import "boxicons/css/boxicons.min.css";

const Header = () => {

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px20">

            <h1 className="text -3xl md:text-4xl lg:text-5xl font-light m-0 z-50">Keegan Stoltz</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-12">
                <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 hover:underline underline-offset-8 decoration-2 decoration-[#e99b63] z-50">Home</a>
                <a href="#about" className="text-base tracking-wider transition-colors hover:text-gray-300 hover:underline underline-offset-8 decoration-2 decoration-[#e99b63] z-50">About Me</a>
                <a href="#projects" className="text-base tracking-wider transition-colors hover:text-gray-300 hover:underline underline-offset-8 decoration-2 decoration-[#e99b63] z-50">Projects</a>
                <a href="#contact" className="text-base tracking-wider transition-colors hover:text-gray-300 hover:underline underline-offset-8 decoration-2 decoration-[#e99b63] z-50">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i className='bx bx-menu'></i>
            </button>

            {/* Mobile Navigation - Hidden by default */}
            <div id='mobileMenu' className="hidden fixed top-16 bottom-0 left-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md">
                <nav className="flex flex-col gap-6 items-center">
                    <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 hover:underline underline-offset-8 decoration-2 decoration-[#e99b63] z-50">Home</a>
                    <a href="#about" className="text-base tracking-wider transition-colors hover:text-gray-300 hover:underline underline-offset-8 decoration-2 decoration-[#e99b63] z-50">About Me</a>
                    <a href="#projects" className="text-base tracking-wider transition-colors hover:text-gray-300 hover:underline underline-offset-8 decoration-2 decoration-[#e99b63] z-50">Projects</a>
                    <a href="#contact" className="text-base tracking-wider transition-colors hover:text-gray-300 hover:underline underline-offset-8 decoration-2 decoration-[#e99b63] z-50">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
