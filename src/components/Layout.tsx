import Navbar from "./Navbar";
import me from "./../assets/me.webp"
import { FaGithub, FaStackOverflow, FaLinkedinIn } from 'react-icons/fa';

const Layout = () => {
    return (
        <div className="max-w-[1240px] ">
            <div className="w-[1240px]  mx-auto flex my-auto ">
                {/* body */}
                <div className="profile dark:bg-dark bg-white z-10 navbar rounded-md">
                    <div className="h-[450px] w-[450px]">
                        <img className="h-[100%] w-[450px] object-cover image-clip-path  " src={me} alt="" />
                    </div>
                    <div className="text-center my-5">
                        <div className="py-1 text-3xl">Wilfredo Hernández</div>
                        <div className="py-1 text-xl">
                            Web Developer
                        </div>
                        <div className="flex gap-[10px] py-3 mb-5 mx-auto w-fit">
                            <a href="https://github.com/Woohaik" target="_blank">
                                <FaGithub />
                            </a>
                            <a href="https://stackoverflow.com/users/17200950/woohaik" target="_blank">
                                <FaStackOverflow />
                            </a>
                            <a href="https://www.linkedin.com/in/wilfredo-hndz" target="_blank">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="h-[50px] flex justify-center place-items-center cursor-pointer">
                        Descargar Curriculum
                    </div>
                </div>
                <div className="card-area relative    w-[100%]" >
                    <div className="card absolute rounded-tr-md rounded-br-md p-4 pl-7 dark:bg-dark bg-white h-[100%] w-[100%]">
                        Area 1
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
};

export default Layout;
