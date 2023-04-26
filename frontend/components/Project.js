import Projects from '/data/project'
import Image from 'next/image'

export default function Project() {

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
            </div>
        </section>
    )
}