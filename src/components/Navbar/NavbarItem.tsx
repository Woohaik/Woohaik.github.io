import { FC } from "react"
interface IProps {
    text?: string,
    icon: JSX.Element,
    to: string
}
const NavbarItem: FC<IProps> = (props: IProps) => {
    return (
        <div className="flex navbar__item place-items-center p-2 rounded-md flex-col-reverse justify-center cursor-pointer" onClick={() => console.log(props.to)}>
            {
                props.text ?

                    <div className="text-lg">
                        {props.text}
                    </div> : null
            }

            <div>
                {
                    props.icon
                }
            </div>
        </div>
    )

}

export default NavbarItem; 