import React from 'react'

import Cards from '../../Cards'

import Img1 from '../../../assets/A-politica-de-combate.jpg'
import Img2 from '../../../assets/mulher.jpg'
import Img3 from '../../../assets/racial.jpg'


import './styles.css'

const Projects = () => {
    return (
        <div >
            <h3>Projetos</h3>
            <div className="projects">

                <Cards
                    img={Img2}
                    title="APOIO A MULHERES VÍTIMAS DE VIOLÊNCIA"
                    strong="Artemis"
                    text="Trabalha para a prevenção e erradicação de todas as formas de violência contra as mulheres. A ONG procura garantir os direitos das mulheres, implementação de políticas públicas e serviços que assegurem uma mudança no cenário atual."
                />

                <Cards
                    img={Img1}
                    title="COMBATE AO ABUSO INFANTIL E APOIO ÀS VÍTIMAS"
                    strong="Associação Fênix"
                    text="Ajuda crianças e adolescentes que foram vítimas de violência doméstica e sexual, além de crianças que vivem com HIV/Aids. Entre os serviços oferecidos estão o atendimento social e psicológico e psicopedagogia."
                />

                <Cards
                    img={Img3}
                    title="COMBATE À DESIGUALDADE RACIAL"
                    strong="Criola"
                    text="desenvolve ações voltadas à melhoria das condições da população negra, em especial das meninas e mulheres negras. Com o empoderamento e a formação de lideranças negras, a ONG visa enfrentar o racismo, sexismo, lesbofobia e transfobia."
                />
            </div>
       </div>
    )
}
        
export default Projects 