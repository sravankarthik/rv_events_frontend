import React from "react";
import { useState } from 'react'
import NavigationBar from "./NavigationBar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { API } from './backend';

function Forms() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    eventName: '',
    location: '',
    description: '',
    date: '',
    timefrom: '',
    timeto: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      formData.name = formData.eventName;
      formData.timefrom = formData.date + "T" + formData.timefrom
      formData.timeto = formData.date + "T" + formData.timeto
      delete formData.eventName;
      console.log(formData);
      const response = await axios.post(`${API}/event`, formData);
      // Handle the response as needed (e.g., show success message)
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <NavigationBar />
      <br />
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name="username"
              value={formData.username}
              onChange={handleInputChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"
              value={formData.password}
              onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Event Name" name="eventName"
              value={formData.eventName}
              onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter Location" name="location"
              value={formData.location}
              onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description"
              value={formData.description}
              onChange={handleInputChange} />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} xs={6}>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select Date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} xs={3}>
              <Form.Label>From Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Select Start Time"
                name="timefrom"
                value={formData.timefrom}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} xs={3}>
              <Form.Label>To Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Select End Time"
                name="timeto"
                value={formData.timeto}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>

  )
}

export default Forms;