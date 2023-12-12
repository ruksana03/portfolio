import { FaPhoneAlt, FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";


const Navbar = () => {
    return (
        <div className="bg-[#EAC696] lg:h-6 text-sm px-28 flex justify-between">
            <h1 className="flex gap-2 justify-start items-center"><FaPhoneAlt /> +880 1243535</h1>
            <p className="flex gap-2 justify-start items-center"><MdMarkEmailRead/> ruksana01official@gmail.com</p>
            <div className="flex gap-2 items-center cursor-pointer">
                <FaLinkedinIn />
                <FaGithubSquare />
                <FaXTwitter />
            </div>
        </div>
    );
};

export default Navbar;