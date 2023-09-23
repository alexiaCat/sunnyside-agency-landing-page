import { useState, useEffect }from 'react';
import Logo from '/images/logofff.svg';
import Hamgurger from '/images/icon-hamburger.svg';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const closeMenuOnClickOutside = (e) => {
            if (isOpen && !e.target.closest('.menu-container')) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', closeMenuOnClickOutside);
        }

        return () => {
            document.removeEventListener('click', closeMenuOnClickOutside);
        };
    }, [isOpen]);


    return (
        <nav className="bg-[#3cbdfd] fixed top-0 w-screen z-10 menu-container ">
            <div className="py-6 md:py-9 md:px-14 px-8  text-neutral-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-[140px] md:w-[230px]"
                        />
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="text-neutral-grayish-blue hover:text-gray-400 focus:outline-none focus:text-gray-400"
                        >
                            <img
                                src={Hamgurger}
                                alt='Hamburger'
                                className='w-[24px] h-[18px]'
                            />
                        </button>
                    </div>

                    <div className="hidden sm:flex items-center space-x-[70px] text-[21px] font-barlow font-bold">
                        <a href="#" className="">About</a>
                        <a href="#" className="">Services</a>
                        <a href="#" className="">Projects</a>
                        <button className="bg-white rounded-full text-black hover:bg-[#80D2FC] hover:border-none hover:text-white py-5 px-10 font-fraunces">
                            CONTACT
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className={`sm:hidden absolute top-10 z-1 inset-x-0 p-10 transition transform origin-top-right ${isOpen ? '' : 'hidden'}`}>
                    <div className="bg-neutral-white py-10  text-center text-neutral-dark-grayish-blue text-[21px] font-bold rounded-lg shadow-lg ">
                        <a
                            href="#"
                            className="block py-5  "
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="block py-5 "
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="block py-5 "
                        >
                            Projects
                        </a>
                        <button className="bg-primary-yellow rounded-full text-black py-5 px-10 font-fraunces">
                            CONTACT
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};
