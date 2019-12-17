import React from 'react'

import Input from './Input'

import './styles.css'

const News = () => {
    return (
        <div className="news">
            <p className="title-news">Receba notícias sobre novos projetos sociais</p>
            <Input
                button="Entrar"
            />
        </div>
    )
}

export default News