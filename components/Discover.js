import Image from "next/image";

function Discover({img, title, description}) {
    return (
        <div className="cursor-pointer hover:scale-105 
        transform transition duration-500 ease-out">
            <div className="discover-cards">
                <Image src={img} layout="fill" className="rounded-xl" />
            </div>
            <div>
                <h4 className="text-2xl font-medium ml-1 mt-3"> { title } </h4>
                <p className="text-base ml-1 mt-1"> { description } </p>
            </div>
        </div>
    )
}


export default Discover
