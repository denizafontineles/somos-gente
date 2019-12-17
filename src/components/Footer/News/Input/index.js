import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'


const Input = (props) =>{
    return(
        <Form inline className="d-flex justify-content-center">
            <FormControl type="text" placeholder="Digite um projeto" className="mr-sm-2 w-75" />
            <div>
            <Button type="btn">{props.button}</Button>
            </div>
        </Form>
    )
}

export default Input 