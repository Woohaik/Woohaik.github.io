import DarkMode from "./DarkMode";
import NavbarItem from "./Navbar/NavbarItem";
import { FaBriefcase, FaUser, FaAddressBook } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className="max-w-[1240px] mx-auto flex gap-8 justify-end">

            <div className="navbar rounded-md h-auto flex gap-14 p-3 justify-between  max-w-[1240px] dark:bg-dark dark:bg-dark bg-white">
                < NavbarItem
                    to="xd"
                    icon={<FaUser className="w-5 h-5" />}
                    text="Sobre mi"
                />
                < NavbarItem
                    to="xd"
                    icon={<FaBriefcase className="w-5 h-5" />}
                    text="Curriculum"

                />
                < NavbarItem
                    to="xd"
                    icon={<FaAddressBook className="w-5 h-5" />}
                    text="Contacto"
                />
            </div>
            <div className="navbar rounded-md h-auto flex px-6   justify-between  dark:bg-dark bg-white">
                <DarkMode />
            </div>
        </div>

    )
};

export default Navbar;