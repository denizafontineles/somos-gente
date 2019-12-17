import React from 'react'
import {Button} from 'react-bootstrap'


import './styles.css'

const Register = (props) => {
    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            <Button variant="primary" size="lg" active>Cadastre-se</Button>
        </div>
    )
}

export default Register