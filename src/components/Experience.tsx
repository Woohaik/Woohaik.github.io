import React, { FC } from "react";
import { IExperience } from "../utils/translations";

interface IProps {
    experience: IExperience
}

const Experience: FC<IProps> = (props) => {
    return (
        <div className="flex">
            <div>
                {
                    props.experience.place.name
                }
                <img src={props.experience.place.logoUrl} alt={`${props.experience.place.name} - logo`} />
            </div>
            <div>
                <ul>
                    {
                        props.experience.roles.map(role =>
                            <li key={role.role + props.experience.place.name}>
                                {role.role}
                                {
                                    role.description
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Experience;
