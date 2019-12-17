import React from 'react'
import { getProjects } from '../../service/base'
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap'

import Cards from '../../components/Cards'
import Cardproj from '../../components/Cardproj'
import Footer from '../../components/Footer'

import './styles.css'


class Projectspage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: [{}],
            filteredCard: [],
            value: ''
        }
    }

    componentDidMount() {
        setTimeout(
            getProjects()
                .then(response => {
                    this.setState({
                        project: response.data,
                        filteredCard: response.data
                    })
                })
                .catch(error => {
                    console.error(error)
                }),
            5000
        )
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleClick = () => {
        const { project } = this.state;
        this.setState({
            filteredCard: project.filter(obj => obj.title.toLowerCase().includes(this.state.value.toLowerCase())
                || obj.text.toLowerCase().includes(this.state.value.toLowerCase())
            )
        })
    }

    render() {
        // console.log(this.state.filteredCard);
        console.log(this.state.value);

        return (
            <div className="project-pg">
                <Cardproj />
                <div>
                    <h3>Conheça nossos projetos sociais</h3>
                </div>
                <div className="d-flex justify-content-center edit-card">
                    <Form inline className="d-flex justify-content-center col-lg inline ">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 w-50"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <Button className="input-page" placeholder="Digite um projeto" onClick={this.handleClick}>Procurar</Button>
                    </Form>

                </div>
                <div>
                    <Row className="w-100">
                        {this.state.project.length > 0 ?
                            this.state.filteredCard.map(card => {
                                return (
                                    <Col key={card.id} sm={12} md={8} lg={4}>
                                        <Cards
                                            title={card.title}
                                            strong={card.association}
                                            text={card.text}
                                            img={card.img}
                                        />
                                    </Col>
                                )
                            }) : <span>Carregando Projetos</span>
                        }
                    </Row>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Projectspage