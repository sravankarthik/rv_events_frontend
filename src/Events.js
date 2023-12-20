import React from "react";
import { useState } from 'react'
import NavigationBar from "./NavigationBar";
import Cards from "./Cards";
import { Container } from "react-bootstrap";

function Events() {

    return (
        <div>
            <NavigationBar />
            <br />
            <Container>
                <Cards />
            </Container>

        </div>
    )
}

export default Events;