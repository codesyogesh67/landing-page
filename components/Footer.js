import { CiFacebook, CiYoutube } from "react-icons/ci";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="mt-28 px-10 w-full flex flex-col justify-center bg-black text-white py-20">
            <div className="container px-6 mr-4 grid gap-10  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center">

                {/* Description */}
                <div className="">
                    <p className="font-bold text-md pb-6">Growfy</p>
                    <p className="text-sm pb-4">Alternatively, you can use the loaderFile configuration in next.config.js
                    to configure every
                        instance of next/image in your application, without passing a prop.</p>
                    <div className="flex py-4 items-center">
                        <CiFacebook className="w-8 h-8 hover:bg-white hover:text-black hover:rounded-[20px] cursor-pointer mr-2" />
                        <FiTwitter className="w-7 h-7 hover:bg-white hover:text-black  cursor-pointer mr-2" />
                        <FiLinkedin className="w-7 h-7 hover:bg-white hover:text-black cursor-pointer mr-2" />
                        <CiYoutube className="w-8 h-8 hover:bg-white hover:text-black cursor-pointer mr-2" />
                        <BsInstagram className="w-7 h-7 hover:bg-white hover:text-black cursor-pointer mr-2" />
                    </div>
                </div>
                {/* links 1 */}
                <div className="flex gap-20 sm:justify-around sm:gap-0">
                    <div>  <p className="pb-3">Pages</p>
                        <ul className="text-sm">
                            <li className="py-2">
                                Home
                            </li>
                            <li className="py-2">
                                About
                            </li>
                            <li className="py-2">
                                Services
                            </li>
                            <li className="py-2">
                                Blog
                            </li>
                            <li className="py-2">
                                Contact
                            </li>
                        </ul></div>
                    {/* links 2 */}
                    <div>
                        <p className="pb-3">Utility</p>
                        <ul className="text-sm">
                            <li className="py-2">
                                Home
                            </li>
                            <li className="py-2">
                                About
                            </li>
                            <li className="py-2">
                                Services
                            </li>
                            <li className="py-2">
                                Blog
                            </li>
                            <li className="py-2">
                                Contact
                            </li>
                        </ul>
                    </div>


                </div>

                {/* subscribe + buttons */}
                <div className="">
                    <p className="pb-4 font-bold">Subscribe to our newsletters</p>
                    <p className="text-sm pb-4">orem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.</p>
                    <div className="py-3 px-2">
                        <input placeholder="Enter your email" className="py-[6px] border-1 rounded-[4px] text-black placeholder:text-black pl-4" />
                        <button className="ml-3">Submit</button>
                    </div>
                </div>
                {/* copyright */}


            </div>
            <div className="py-4 px-6 text-xs ">
                <p>@Copyright - Powered by ABCD</p>
            </div>
        </div>
    )
}

export default Footer