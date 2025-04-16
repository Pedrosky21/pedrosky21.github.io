import Image from "next/image";

export default function ProjectCard (props: {title: string; description: string; image: string; technologies: string[]}) {
    return (
        <>
            <div className="relative overflow-hidden">
                <div>
                <Image className="lg:float-end" src={props.image} alt={props.title} width={350} height={50} />
                </div>
                <h3 className="text-lg">{props.title}</h3>
                <p className="text-sm">{props.description}</p>
                <div className="lg:absolute bottom-0 flex space-x-4">
                    {props.technologies.map((tech) => (
                        <div className="w-10 h-10 relative" key={tech}>
                            <Image src={`/${tech}.svg`} alt={`${tech}-logo`} fill className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}