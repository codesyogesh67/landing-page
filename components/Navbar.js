
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';


const Navbar = () => {
    const [showSideBar, setShowSideBar] = useState(false)

    const links = [
        { title: 'Home' },
        { title: 'Blog' },
        { title: 'About Us' },
        { title: 'Contact Us' },
    ]

    return (
        <div className="w-full">
            <header className="flex items-center justify-center py-6 bg-nav_background px-10">



                <nav className="container flex items-center justify-between gap-8 text-white px-6 ">

                    <p>Logo</p>
                    <ul className="hidden sm:flex flex-1 gap-8 justify-end items-center">
                        {links.map(({ title }) => (
                            <li key={title}>{title}</li>
                        ))}


                    </ul>
                    <div className="flex-1 sm:hidden flex justify-end cursor-pointer">
                        {
                            showSideBar ? (
                                <IoClose onClick={() => setShowSideBar(!showSideBar)} />
                            ) : (
                                <RxHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} />
                            )
                        }

                    </div>

                </nav>
                {showSideBar && (
                    <nav
                        className="sm:hidden z-100 absolute top-[54px] flex flex-col items-center py-4 w-full bg-black text-sm text-white"
                        aria-label="mobile">
                        {links.map(({ title }) => (
                            <a key={title} href="#hero" className="w-full py-6 text-center hover:opacity-90">{title}</a>

                        ))}


                    </nav>
                )}
            </header>
        </div>




    )
}

export default Navbar