import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { AuthContext } from "../../../pages/AuthProvider/AuthProvider";
const Navber = () => {
  const [open, setOpen] = useState(true);
  const { user, userLogOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  // dark handleform
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const navber = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addProduct">Add Product</NavLink>
      <NavLink to="/myCrat">My Cart</NavLink>
      <NavLink to="/userData">Contact Data</NavLink>
    </>
  );
  return (
    <div className="fixed z-30 w-[100%] bg-gradient-to-l from-[#0242A2] to-[#028A98]  border-b-2 border-[#1721319f]">
      <div className="w-11/12 mx-auto ">
        <div className="navbar gap-4">
          <div className="flex justify-between w-full">
            <div className="dropdown  lg:hidden">
              <div className="drawer drawer-start">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div
                  onClick={() => setOpen(!open)}
                  className="drawer-content text-xl"
                >
                  <label htmlFor="my-drawer-4">
                    {open ? (
                      <FiMenu className="text-white text-2xl" />
                    ) : (
                      <AiOutlineClose className="text-white text-2xl" />
                    )}
                  </label>
                </div>
                <div className="drawer-side mt-16">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-[80%] min-h-full  text-xl bg-gradient-to-r from-[#0242A2] to-[#028A98] text-white">
                    {navber}
                    <label className="swap swap-rotate">
                      {/* this hidden checkbox controls the state */}
                      <input type="checkbox" onChange={handleToggle} />
                      <svg
                        className="swap-on fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg>
                      {/* moon icon */}
                      <svg
                        className="swap-off fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                      </svg>
                    </label>
                    <h1 className="border-2 border-b w-full border-[#093260f1] my-2"></h1>
                    {user ? (
                      <>
                        <img
                          src={user.photoURL}
                          alt=""
                          className="w-[40px] rounded-[50%] text-white"
                        />
                        <h1 className="text-2xl">{user.displayName}</h1>
                        <h1 className="text-sm">{user.email}</h1>
                        <hr />
                        <NavLink onClick={userLogOut}>Log Out</NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to="/singup">Registor</NavLink>
                        <NavLink to="/singin">Login</NavLink>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/6vdS1kT/logo.png"
                alt=""
                className="w-[150px] rounded-lg"
              />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-5 text-2xl font-medium text-white">
              {navber}
            </ul>
          </div>
          <div className="hidden lg:w-full lg:block ">
            <div className="flex justify-end items-center gap-5">
              <Menu>
                <MenuButton colorscheme="pink">
                  <div className="border-2 p-1 rounded-[50%] border-orange-500">
                    {user ? (
                      <img
                        src={user.photoURL}
                        alt=""
                        className="w-[40px] rounded-[50%] text-white"
                      />
                    ) : (
                      <img
                        src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                        alt=""
                        className="w-[40px] rounded-[50%] text-white"
                      />
                    )}
                  </div>
                </MenuButton>
                <MenuList>
                  <div
                    className={`bg-white  ${
                      user ? "w-full" : "w-[150px]"
                    } p-4 text-xl rounded-lg`}
                  >
                    {user ? (
                      <>
                        <MenuItem>{user.displayName}</MenuItem>
                        <MenuItem>{user.email}</MenuItem>
                        <MenuDivider />
                        <MenuItem>
                          <NavLink onClick={userLogOut}>Log Out</NavLink>
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem>
                          <NavLink to="/singup">Registor</NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink to="/singin">Login</NavLink>
                        </MenuItem>
                      </>
                    )}
                  </div>
                </MenuList>
              </Menu>
               <label className="swap swap-rotate">
                <input type="checkbox" onChange={handleToggle} />
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
