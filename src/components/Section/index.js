import React from 'react'
import About from './About'
import Register from './Register'
import Projects from './Projects'


const Section = () => {
    return (
        <div>
            <About />
            <Register
                title='Cadastre sua empresa e a plataforma irá conectá-la aos projetos sociais.'
                className='home-header'
                size="lg"
            />
            <Projects
            
            />
        </div>
    )
}
export default Section