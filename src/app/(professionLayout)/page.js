import Image from "next/image";
import Link from "next/link";

const ProfessionLayoutPage = () => {
    return (
        <div className="bg-[#C8AE7D] text-base text-black flex justify-between items-center px-8">
            <div className="flex gap-2 justify-evenly">
                <Link href="/developer">
                    <button className=" rounded-md">
                        Web Developer
                    </button>
                </Link>
                <p>|</p>
                <Link href="/dataScientist">
                    <button className=" rounded-md">
                        Data Scientist
                    </button>
                </Link>
                <p>|</p>
                <Link href="/researcher">
                    <button className=" rounded-md">
                        Researcher
                    </button>
                </Link>
            </div>
            <div>
            <Image src={'https://raw.githubusercontent.com/ruksana03/ruksana03/main/image/dp.jpg'} alt='my image' width={50} height={50} className='rounded-full py-2'/>
            </div>
        </div>
    );
};

export default ProfessionLayoutPage;