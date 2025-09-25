import Project from "./Project"
import Amazon from '../images/Amazon-Preview.png'
import Netflix from '../images/Netflix-Clone-Preview.png'
import ChatApp from '../images/Chat-App-Preview.jpeg'
import CashApp from '../images/Cash-App-Preview.jpeg'

export default function Projects() {
    const projects = [
        { title: 'Real time Chat App', description: 'Developed a real-time chat app using React, TypeScript, and WebSockets, featuring a room-based system for group chats with unique room codes. Leveraged Vite for rapid development and deployed the frontend on Vercel and the backend on Render, ensuring seamless cross-service communication.', techstack: 'React, Tailwind, Websockets, Typescript', image: ChatApp, github: 'https://github.com/Adarsh-ops/Chat-App-Frontend', deployed: 'https://chat-app-frontend-one-eta.vercel.app' },
        { title: 'Cash App (Paytm Clone)', description: 'Developed a full-stack web application replicating core functionalities of Paytm, including user authentication, account balance management, and secure money transfers. Built the frontend using React and Tailwind CSS for a responsive and modern UI, and the backend with Node.js, Express, and MongoDB for robust API and data management. Utilized JWT for secure authentication and Zod for input validation. Implemented transaction logic with MongoDB sessions to ensure data integrity. A screen-recorded demo showcases the app\'s features.', image: CashApp, github: 'https://github.com/Adarsh-ops/Paytm-Clone',techstack:'React.js, Tailwind CSS, Express.js, Node.js, MongoDB' },
        { title: 'Shopping App(Amazon Clone)', description: 'This project is a fully-functional Amazon clone built using HTML, CSS, and JavaScript. It features product listings, a shopping cart, checkout functionality, and order management.- Features: Product listing, cart, checkout, order history', github: 'https://github.com/Adarsh-ops/Amazon-clone', image: Amazon, techstack: 'HTML, CSS, Javascript' , deployed:'https://adarsh-ops.github.io/Amazon-Clone/Amazon.html'},
        { title: 'Netflix Clone', description: 'Built entirely with HTML and CSS, this project was created during my early journey into web development. I manually coded a replica of Netflix\'s layout to practice building responsive web pages and crafting a clean, structured design. This hands-on project helped me understand core web technologies and sharpen my front-end coding skills.', image: Netflix, github: 'https://github.com/Adarsh-ops/Netflix-clone', deployed:'https://adarsh-ops.github.io/Netflix-Clone/net.html', techstack: 'HTML and CSS' }
    ]

    return <div id="projects" className="px-5 my-50 md:my-0 min-h-screen items-start">
        <p className="font-mono text-3xl text-gray-200 font-bold">Projects:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {projects.map((project) => (
                // @ts-ignore
                <Project key={project.title} project={project} />
            ))}
        </div>
    </div>

}