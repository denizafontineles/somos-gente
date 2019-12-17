import React from 'react'
import { Image } from 'react-bootstrap'

import imgCard from '../../assets/imagem-kids.jpg'

import './styles.css'

const Cardproj = () => {
    return (
        <div>
            <Image className="img-carrossel" src={imgCard} fluid />

        </div>
    )
}

export default Cardproj
