import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Website",
        description: "An elegant e-commerce site with smooth animations, showcasing sustainable products with a clean layout and intuitive navigation with paypal payment integration.",
        image: "/images/Ecom.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/E-Commerce",
        previewUrl: "https://e-commerce-xi-pearl.vercel.app/"
    },
    {
        id: 2,
        title: "Music School Website",
        description: "Music school website with smooth animations, showcasing courses, instructors, and programs in a user-friendly design.",
        image: "/images/Music.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Music-school",
        previewUrl: "https://music-school-ashen.vercel.app/"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A personal portfolio showcasing my journey in web development, featuring projects, skills, and ongoing learning. Built to highlight my passion for technology and hands-on experience.",
        image: "/images/portfolio.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Portfolio-Project",
        previewUrl: "https://portfolio-project-surajs-projects-0f14f766.vercel.app/"
    },
    {
        id: 4,
        title: "Two Good Co Website",
        description: "An elegant e-commerce site with smooth animations, showcasing sustainable products with a clean layout and intuitive navigation.",
        image: "/images/Two-good.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Two-Good-Co",
        previewUrl: "https://surajjberaa.github.io/Two-Good-Co/"
    },
    {
        id: 5,
        title: "Humane",
        description: "Humane's CosmOS is an AI-powered OS with intelligent agents, enabling seamless, context-aware interactions through voice, touch, text, gestures, and vision.",
        image: "/images/Humane.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Humane-Clone",
        previewUrl: "https://humane-clone.vercel.app/"
    },
    {
        id: 6,
        title: "Medium Blogging Website",
        description: "A clean and user-friendly blogging platform inspired by Medium, designed for seamless reading and writing experiences. Built with responsive design and optimized for content creators.",
        image: "/images/medium.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Surajjberaa/Medium-Blogging-app",
        previewUrl: "https://medium-blogging-app.vercel.app/blogs"
    },

]

function ProjectSection() {
  return (
    <div id='projects'>
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