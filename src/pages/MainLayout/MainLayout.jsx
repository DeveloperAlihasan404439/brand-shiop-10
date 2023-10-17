import { Outlet } from "react-router-dom";
import Navber from "../../companent/Header/Navber/Navber";
// import { motion, useScroll } from "framer-motion";
const MainLayout = () => {
//   const { scrollYProgress } = useScroll();
  {
    /* <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    /> */
  }
  return (
    <div className="font-poppins">
      <div className="pb-[4.5%]">
        <Navber />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
