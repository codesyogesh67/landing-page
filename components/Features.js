
import { AiFillDatabase } from "react-icons/ai";
const Features = () => {

    const lists = [
        {
            id: 1,
            icon: <AiFillDatabase className="w-12 h-12" />,
            text: "Environmental legal issues might occur since the planned business activities are designed",
            buttonText: "Show more"
        },
        {
            id: 2,
            icon: <AiFillDatabase className="w-12 h-12" />,
            text: "Environmental legal issues might occur since the planned business activities are designed",
            buttonText: "Show more"
        },
        {
            id: 3,
            icon: <AiFillDatabase className="w-12 h-12" />,
            text: "Environmental legal issues might occur since the planned business activities are designed",
            buttonText: "Show more"
        }
    ]


    return (
        <div className="mt-28 px-10 w-full flex justify-center">
            <div className="container px-6 flex flex-col justify-center items-center">

                <p className="text-4xl font-bold text-center">Our Vision and  Our Goals</p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] py-4 pt-20 gap-12 w-full">
                    {lists.map(({ id, icon, text, buttonText }) => (
                        <div className="border-1 border-black-500/5 shadow-2xl p-8 py-12 flex flex-col items-center rounded-[10px]" key={id}>
                            <div>{icon}</div>
                            <p className="py-8 text-center">{text}</p>
                            <button className="bg-btn_background rounded-[10px] p-2 px-4 text-white">{buttonText}</button>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Features