import React, { Component } from 'react';
import styled from 'styled-components';

const NasaCard = props => {
    const Container = styled.div`
        width: 60%;
        margin : 0 auto;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        h1{
            font-weight: bold;
            font-size: 40px;
            color: blue;
        }
        p{
            text-align: center;
        }
    `
    return (

        <Container>
            <h2>{props.date}</h2>
            <h1>{props.title}</h1>
            <img src={props.url} />
            <p>{props.explaination}</p>
        </Container>
    )
}
export default NasaCard;