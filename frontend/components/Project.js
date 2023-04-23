import Projects from '@/data/Project'
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
                            </div>
                            <div className='project-detail'>
                                <h3>{data.name}</h3>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    )}
                )}
            </div>
        </section>
    )
}