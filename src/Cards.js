import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { API } from './backend';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cards() {
    const [d, setD] = useState([]);
    useEffect(() => {
        const getdata = async () => {
            console.log(API)
            const res = await axios.get(`${API}/event`);
            setD(res.data)
            console.log(res.data);
        }
        getdata();
    }, []);
    let data = d.map((value, index) => {
        return <MDBCol>
            <MDBCard className='h-100'>
                <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>{value.name}</MDBCardTitle>
                    <MDBCardText>
                        <strong>Location:</strong> {value.location} <br />
                        <strong>Description:</strong> {value.description} <br />
                        <strong>Date:</strong> {new Date(value.date).toLocaleDateString()} <br />
                        <strong>Time:</strong> {new Date(value.timefrom).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(value.timeto).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    })

    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            {data}

            {/* <MDBCol>
                <MDBCard className='h-100'>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>This is a short card.</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className='h-100'>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className='h-100'>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol> */}
        </MDBRow>
    );
}