import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { SiNginx } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';


const technologyList = [
    {
        name: "React",
        color: "blue",
        icon: FaReact
    },
    {
        name: "Node",
        color: "green",
        icon: FaNode
    },
    {
        name: "Docker",
        color: "blue",
        icon: FaDocker
    },
     {
        name: "Nginx",
        color: "green",
        icon: SiNginx
    },
     {
        name: "Firebase",
        color: "orange",
        icon: IoLogoFirebase
    },
    {
        name: "MongoDb",
        color: "green",
        icon: SiMongodb
    },
    {
        name: "MySQL",
        color: "blue",
        icon: SiMysql
    },
    {
        name: "React Native",
        color: "blue",
        icon: FaReact
    },
]


function TechnologyIcon({icon: Icon}) {
    return (
        <Icon style={{
            color: 'white',
        }}/>
    )
}


export default function Technologies() {
    return (
        <section className='section-technologies'>
            <div className='u-margin-bottom-big'>
                <h3 className='header-tertiary header-custom'>
                    Technologies I use
                </h3>
                <h4 className='heading-4'>
                    Great Frameworks that are used to make your application / sites customizable, scalable and stand out
                </h4>
            </div>
            <ul className='technology'>
                {technologyList.map((item, index) =>(
                    <li  className='technology__item' key={index} >
                        <div className='technology__icon' style={{
                                backgroundColor: item.color,
                                fontSize: "4rem"
                            }}>
                            <TechnologyIcon icon={item.icon} />
                        </div>
                        <h5 className='technology__title'>{item.name}</h5>
                    </li>
                ))}
            </ul>
        </section>
    )
}
