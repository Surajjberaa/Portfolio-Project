import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Medium Blogging Website",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim officiis, dignissimos molestiae tenetur ducimus!",
        image: "/images/medium.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Medium-Blogging-app",
        previewUrl: "https://medium-blogging-app.vercel.app/blogs"
    },
    {
        id: 2,
        title: "Music School Website",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim officiis, dignissimos molestiae tenetur ducimus!",
        image: "/images/Music.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Music-school",
        previewUrl: "https://music-school-ashen.vercel.app/"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim officiis, dignissimos molestiae tenetur ducimus!",
        image: "/images/portfolio.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Portfolio-Project",
        previewUrl: "https://portfolio-project-surajs-projects-0f14f766.vercel.app/"
    },
    {
        id: 4,
        title: "Two Good Co Website",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim officiis, dignissimos molestiae tenetur ducimus!",
        image: "/images/Two-good.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Two-Good-Co",
        previewUrl: "https://surajjberaa.github.io/Two-Good-Co/"
    },
]

function ProjectSection() {
  return (
    <div >
        <h2 className='text-4xl text-center mb-5 font-semibold'>My Projects</h2>

        <div className='md:grid-cols-3 grid gap-3'>{projectsData.map((project) => <ProjectCard 
                                            key={project.id}   
                                            title={project.title} 
                                            description={project.description}
                                            imgUrl={project.image}
                                            gitUrl={project.gitUrl}
                                            previewUrl={project.previewUrl}
                                            />)}</div>
                                            </div>
  )
}

export default ProjectSection