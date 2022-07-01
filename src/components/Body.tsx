import me from "./../assets/me.webp"
import { FaGithub, FaStackOverflow, FaLinkedinIn } from 'react-icons/fa';

const Body = () => {
    return (
        <div className="profile dark:bg-dark bg-white z-10 navbar rounded-md">
            <div className="h-[450px] w-[450px] rounded-md">
                <img className="h-[100%] rounded-md w-[450px] object-cover image-clip-path  " src={me} alt="" />
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
            <div className="h-[50px] flex justify-center place-items-center hover cursor-pointer">
                Descargar Curriculum
            </div>
        </div>

    )
};

export default Body;