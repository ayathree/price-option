import { FaCircleChevronRight } from "react-icons/fa6";

const Price = ({option}) => {
    const {name,price,feature}=option
    return (
        <div className="bg-green-400 rounded-xl flex flex-col p-5 m-5">
            <h2 className="text-center">
                <span className="text-7xl">{price}</span>
                <span className="text-2xl ">/mon</span>
            </h2>
            <h4 className="text-2xl text-center mb-5">{name}</h4>
            <h4 className="flex-grow mb-5">
                {
                    feature.map((fea, idx)=><p className="flex gap-3 items-center "  key={idx}> <FaCircleChevronRight></FaCircleChevronRight>{fea}</p>)
                }
            </h4>
            <button className="bg-white px-6 rounded-xl w-full hover:bg-rose-400">Click</button>
            
        </div>
    );
};

export default Price;