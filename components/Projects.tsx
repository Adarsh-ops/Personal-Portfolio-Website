import Project from "./Project"
import Amazon from '../images/Amazon-Preview.png'
import Netflix from '../images/Netflix-Clone-Preview.png'
import ChatApp from '../images/Chat-App-Preview.jpeg'
import CashApp from '../images/Cash-App-Preview.jpeg'
import Collabidraw from '../images/Collabidraw-Preview.png'

export default function Projects() {
    const projects = [
        { title: 'Real time Chat App', description: 'Built a real-time group chat application with unique room codes and instant messaging using WebSockets. Deployed the frontend on Vercel and backend on Render for seamless cross-service communication.', image: ChatApp, github: 'https://github.com/Adarsh-ops/Chat-App-Frontend', deployed: 'https://chat-app-frontend-one-eta.vercel.app' },
        { title:'Collabidraw- Collaborative Drawing App', description:'Created a real-time collaborative drawing platform where multiple users can sketch, write, and edit together on a shared canvas with live synchronization.',image:Collabidraw, github:'https://github.com/Adarsh-ops/Collabidraw', techstack:'Next.js, Tailwind CSS, Express.js, Node.js, TypeScript, Zod, Websockets, PostgreSQL and Prisma ORM'},
        { title: 'Cash App (Paytm Clone)', description: 'Developed a digital payment web app featuring secure authentication, account management, and real-time money transfers with JWT and MongoDB sessions.', image: CashApp, github: 'https://github.com/Adarsh-ops/Paytm-Clone',techstack:'React.js, Tailwind CSS, Express.js, Node.js, MongoDB' },
        
    ]

    return <div id="projects" className="px-5 my-50 md:my-0 min-h-screen items-start">
        <p className="font-mono text-3xl text-gray-200 font-bold">Projects:</p>
        <div className="grid grid-cols-1 items:center sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {projects.map((project) => (
                // @ts-ignore
                <Project key={project.title} project={project} />
            ))}
        </div>
    </div>

}