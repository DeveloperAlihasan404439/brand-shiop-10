import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
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
  const navber = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addProduct">Add Product</NavLink>
      {user ? (
        <>
          <NavLink to="/myCrat">My Cart</NavLink>
          <NavLink to="/userData">Contact Data</NavLink>
        </>
      ) : (
        ""
      )}
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
                <div className="drawer-side mt-16 ">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-[80%] min-h-full bg-base-200 text-xl bg-gradient-to-r from-[#0242A2] to-[#028A98] text-white">
                    {navber}
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
            <div className="flex justify-end">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
