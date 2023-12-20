import React from "react";
import { useState } from 'react'
import NavigationBar from "./NavigationBar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { API } from './backend';

function Forms() {
  const fruitImages = {
    KANNADA_SANGHA: 'https://media.discordapp.net/attachments/823879741429514281/1186964592430166026/WhatsApp_Image_2023-12-20_at_14.54.04.jpeg?ex=659529eb&is=6582b4eb&hm=bd709e435af0410fd175b436b200fcb6233bd3692ec284698a9050523eb9eab3&=&format=webp&width=1024&height=1024',
    FOOTPRINTS: 'https://media.discordapp.net/attachments/823879741429514281/1186964593336127529/WhatsApp_Image_2023-12-20_at_14.54.03_2.jpeg?ex=659529eb&is=6582b4eb&hm=404bfcf930fbd083dfb13fda9688f4003ab389485ad858fd811a7b2f361a28cb&=&format=webp&width=732&height=1024',
    ASHWA: 'https://media.discordapp.net/attachments/823879741429514281/1186964594711859231/Screenshot_2023-12-20_at_3.01.07_PM.png?ex=659529ec&is=6582b4ec&hm=66787b1c0f59a1025eaf80f674211c7e67b9f6c59000b5685cf6a36b42bd421d&=&format=webp&quality=lossless&width=1082&height=1024',
    // Add more fruits and image URLs as needed
  };
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    eventName: '',
    location: '',
    description: '',
    date: '',
    timefrom: '',
    timeto: '',
    logo: ''
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
  const handleFruitChange = (event) => {
    const selectedFruit = event.target.value;
    setFormData({ ...formData, logo: fruitImages[selectedFruit] });
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
          <Form.Group className="mb-3">
            <Form.Label>Club</Form.Label>
            <Form.Select
              name="logo"
              value={formData.selectedFruit}
              onChange={handleFruitChange}
            >
              <option value="">Select Club</option>
              {Object.keys(fruitImages).map((fruit, index) => (
                <option key={index} value={fruit}>
                  {fruit}
                </option>
              ))}
            </Form.Select>
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