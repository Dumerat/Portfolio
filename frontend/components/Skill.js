import Skill from '../data/skill'
import Image from 'next/image'
import { useState } from 'react'

export default function Skills() {

    const [activeSkill, setActiveSkill] = useState("1")
    function setSkill(skill) {
        setActiveSkill(skill)
    }
    const SkillSelected = Skill.filter(item => item.id === activeSkill)
    
    return (
    <div className='skill'>
        <h2>SKILLS</h2>
        <div className='skill-container'>
            <div className='skill-side-container'>
                {Skill.map((data) => {
                    return (
                        <div className='skill-wrapper' key={data.id} onClick={() => setSkill(data.id)}>
                            <div className='skill-image'>
                                <Image
                                    src={data.logo}
                                    alt='logo'
                                    fill
                                />
                            </div>
                            {data.category}
                        </div>
                    )}
                )}
            </div>

            <div className='skill-main-container'>
                {SkillSelected.length > 0 && SkillSelected[0].skills.map((data) => {
                    return(
                        <div className='selected-skill-wrapper' key={data.name}>
                            <div className='skill-logo-image'>
                                <Image
                                    fill
                                    src={data.image}
                                    alt={data.name + "logo"}
                                    onClick={() => window.open(data.link)}
                                />
                                </div>
                            <div>{data.name}</div>
                        </div>
                    )}
                )}
            </div>   
        </div>
    </div>
    )
}