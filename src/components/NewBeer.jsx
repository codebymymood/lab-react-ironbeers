import React from "react";
import {Form, Button} from "react-bootstrap"

function NewBeer(props) {
    let {btnSubmit} = props
    
    return (
        <div>
            <Form onSubmit={btnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tagline:</Form.Label>
                    <Form.Control type="text" placeholder="Enter tagline" name="tagline" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" placeholder="Add description" name="description"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>First brewed:</Form.Label>
                    <Form.Control type="text" placeholder="First brewed date" name="first_brewed" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Brewers tips:</Form.Label>
                    <Form.Control type="text" placeholder="Brewers tips:" name="brewers_tips"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Attenuation level:</Form.Label>
                    <Form.Control type="number" placeholder="Attenuation level:" name="attenuation_level"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contributed by:</Form.Label>
                    <Form.Control type="text" placeholder="Contributed by:" name="contributed_by" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add new beer!
                </Button>
                </Form>
        </div>
    )
}

export default NewBeer

