import { FC } from "react"
import { NavLink } from "react-router-dom";
interface IProps {
    text?: string,
    icon: JSX.Element,
    to: string
}
const NavbarItem: FC<IProps> = (props: IProps) => {
    return (
        <NavLink
            to={props.to}
        >
            <div className="hover flex navbar__item place-items-center p-2 rounded-md flex-col-reverse justify-center cursor-pointer" onClick={() => console.log(props.to)}>

                {
                    props.text ?
                        <div className="text-lg">
                            {props.text}
                        </div> : null
                }

                {
                    props.icon
                }


            </div>
        </NavLink>
    )

}

export default NavbarItem; 