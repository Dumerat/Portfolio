import Projects from '/data/project'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Project() {

    const [showInfoMenu, setShowInfoMenu] = useState(true);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProjectId) {
            const project = Projects.find((p) => p.id === selectedProjectId);
            setSelectedProject(project);
        }
    }, [selectedProjectId]);

    function toggleInfo(projectId) {
        setShowInfoMenu(!showInfoMenu);
        setSelectedProjectId(projectId);
    }

    return (
        <section id="project">
            <h2>My Project</h2>
            <div>
                {Projects.map((data) => {
                    return(
                        <div className='project-card-container' key={data.id}>
                            <div className='project-card' data-id={data.name}>
                                <Image alt={data.name} src={data.image} width={360} height={250}/>
                                <div className='project-detail'>
                                    <div>
                                        <h3>{data.name}</h3>
                                        <p>{data.desc}</p>
                                    </div>
                                    <div onClick={() => toggleInfo(data.id)} className='project-more-info'>i</div>
                                    <div className='project-link'>
                                        {data.link ? (
                                            <Image src='/images/logo/link.svg' width={30} height={30} alt='Link' onClick={() => window.open(data.link)} />
                                        ) : (
                                            <Image src='/images/logo/link.svg' width={30} height={30} alt='Link' style={{ opacity: '0' }} />
                                        )}
                                        <Image src='/images/logo/github.svg' width={30} height={30} alt='Github' onClick={() => window.open(data.git)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                )}
                {selectedProject && (
                <div className={`project-info-container ${showInfoMenu ? 'hidden' : ''}`}>
                    <div className='project-info-wrapper'>
                        <section className='project-info' key={selectedProject.id}>
                            <div onClick={() => toggleInfo()} className='close-info'>X</div>
                            <h1>{selectedProject.name}</h1>
                            <div className='div-info-container'>
                                <div className='div-info'>{selectedProject.details}</div>
                                <div className='div-info'>{selectedProject.skill}</div>
                            </div>
                        </section>
                    </div>
                </div>
                )}
            </div>
        </section>
    )
}