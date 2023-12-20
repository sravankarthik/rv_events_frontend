import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";

function AboutUs() {

    return (
        <div>
            <NavigationBar />
            <br />
            <Container>
                <h1>About Us</h1>

                <h2>🎓 Campus Compass: Revolutionizing University Experience</h2>

                <p>At Campus Compass, we're dedicated to transforming the university landscape through our innovative digital platform. We simplify and enrich campus life by offering streamlined solutions for venue bookings, event management, and effective communication.</p>

                <h3>🔍 What We Do:</h3>
                <ul>
                    <li><strong>Simplify Venue Booking:</strong> Our user-friendly online system revolutionizes how campus venues are booked and managed.</li>
                    <li><strong>Centralize Event Information:</strong> We bring all campus events into one accessible and interactive platform, enhancing student engagement.</li>
                    <li><strong>Empower Through Technology:</strong> Our dedicated chatbot and advanced features make campus navigation and information retrieval hassle-free.</li>
                </ul>

                <h4>🌟 Our Mission:</h4>
                <p>To create a connected, efficient, and vibrant campus environment by integrating cutting-edge technology and user-centric design, making university life more accessible and enjoyable for students and staff alike.</p>

                <h4>🌍 Join Our Journey:</h4>
                <p>We're not just a platform; we're a community. Follow us for updates on our journey, insights into the world of educational technology, and opportunities to collaborate in redefining the educational experience.</p>

                <h4>🤝 Connect with Us:</h4>
                <p>Whether you're a student, educator, or university administrator, we're here to enhance your campus experience. Let's navigate the future of education together!</p>
            </Container>

        </div>
    )
}

export default AboutUs;