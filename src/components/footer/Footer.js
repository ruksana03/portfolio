import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#65451F]  border-2 px-28">
            <div className="grid grid-cols-4">
                <div className="col-span-2">
                    <h1>Contact</h1>
                    <p>Phone: +880 8473563487</p>
                    <p>Email: ruksana01official@gmail.com</p>

                </div>
                <div className="col-span-1 flex flex-col">
                    <button>Contact Me</button>
                    <button>About Me</button>
                </div>
                <div className="col-span-1">
                    <FaLinkedinIn />
                    <FaGithubSquare />
                    <FaXTwitter />
                </div>
            </div>
            <p className="text-center text-sm"> © Ruksana </p>
        </div>
    );
};

export default Footer;
