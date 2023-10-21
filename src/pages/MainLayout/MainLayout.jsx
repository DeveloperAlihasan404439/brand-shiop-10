import { Outlet } from "react-router-dom";
import Navber from "../../companent/Header/Navber/Navber";
import Foter from "../../companent/Header/Foter/Foter";
const MainLayout = () => {
  
  return (
    <div className="font-poppins text-black">
      <div className="pb-[4%]">
        <Navber/>
      </div>
      <Outlet />
      <Foter/>
    </div>
  );
};

export default MainLayout;
