import MySkilles from "@/components/mySkills/MySkilles";
import Study from "@/components/myStudy/Study";
import ProfessionLayoutPage from "./page";

const Layout = ({ children }) => {
    return (
        <div className=" w-10/12 mx-auto">
            <ProfessionLayoutPage/>
            {children}
        </div>
    );
};

export default Layout;