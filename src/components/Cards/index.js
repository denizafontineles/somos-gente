import React from 'react'

import { Card, Button } from 'react-bootstrap'
import './styles.css'

const Cards = (props) => {
    return (
        <div className="card-edit">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className="title-edit">{props.title}</Card.Title>
                    <Card.Text>
                        <strong >{props.strong}</strong> {props.text}
                    </Card.Text>
                    <Button variant="primary">Saiba Mais</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards