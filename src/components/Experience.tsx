import React, { FC } from "react";
import { IExperience } from "../utils/translations";

interface IProps {
    experience: IExperience
}

const Experience: FC<IProps> = (props) => {
    return (
        <div className="flex experience gap-7 mb-3">
            <div className="experience__company text-right">
                <div className="text-[15px] font-medium">
                    {
                        props.experience.place.name

                    }
                </div>
                <img className="ml-auto h-[100px] mt-2" src={require(`./../assets/${props.experience.place.logoUrl}`)} alt={`${props.experience.place.name} - logo`} />
            </div>

            <div className="experience__timeline relative flex flex-col gap-5 flex-1">
                {
                    props.experience.roles.map(role =>
                        <div className="experience__timeline__item relative" key={role.role + props.experience.place.name}>
                            <div className="experience__timeline__item__title relative text-[16px] font-medium">
                                {role.role}
                            </div>
                            <div className="text-[13px] mt-1">
                                {
                                    role.description
                                }
                            </div>
                            <div className="text-[12px] font-medium text-primary mt-1 dark:text-primary-dark">
                                <span className="text-dark dark:text-white">
                                    Tecnologias:&nbsp;
                                </span>
                                {
                                    role.technologies.join(", ")
                                }.
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Experience;
