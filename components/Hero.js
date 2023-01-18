import Image from "next/image"


const Hero = () => {
    return (
        <div className="h-full px-10 w-full flex justify-center mt-8">
            <div className="container px-6 flex flex-col md:flex-row-reverse justify-between">


                <div className="flex-1 flex justify-end py-8 mb-4">
                    <Image src="/banner.png" alt="Banner" width={400} height={400} />
                </div>
                <div className="flex-1 flex flex-col justify-center items-center md:items-start">

                    {/* header */}
                    <p className="text-xs text-black/50">Stay connected ith upcoming and recent jobs</p>
                    {/* title */}
                    <div className="text-[40px] lg:text-[60px] py-2 font-extrabold">
                        <p className="text-center md:text-left">Your Solution Legal Consultancy</p>
                    </div>
                    {/* text */}
                    <p className="text-center md:text-left mt-6">We are here to help you take care of your legality with the best service especially for you.</p>
                    {/* button */}
                    <button className="bg-btn_background w-40 mt-10 p-4 border rounded-[5px] text-white hover:bg-blue-800/50">Get Started</button>
                </div>
            </div>
        </div>

    )
}


export default Hero