import React from 'react'
import {ReactTyped} from 'react-typed'
import {motion} from 'framer-motion'

export default function About(){

    return (
        <motion.div id='about' className="flex flex-col items-center justify-self-start h-[70vh] text-white md:text-4xl text-2xl font-bold font-mono px-7" initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <h1>
        About me: 
        <br />
        <ReactTyped
          strings={[
            'I\'m Adarsh Nagar, a second-year BSc Computer Science student at St. Xavier\'s College, Kolkata, India. I\'m passionate about web development and skilled in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, TypeScript, WebSockets, PostgreSQL, Prisma ORM and programming languages like C and C++. I\'ve built projects like a Real Time Chat App, Netflix clone, Amazon clone and Paytm Cash App clone showcasing my expertise in creating responsive, full-stack applications.'
          ]}
          typeSpeed={10}
          className="text-purple-300 text-2xl"
        />
      </h1>
    </motion.div>
    )
}