import React from "react";
import {Navbar, Container} from  'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="/">
                    <img
                        src="data:image/png;base64,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"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                </Container>
                </Navbar>
        </div>
    )
}


export default NavBar
