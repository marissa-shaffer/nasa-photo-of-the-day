import React, { Component } from 'react';
import styled from 'styled-components';

const NasaCard = props => {
    const Container = styled.div`
        width: 60%;
        margin : 0 auto;
        margin-bottom: 5rem; 
        padding: 2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: grey;
        border-radius: 10px;
        h1{
            font-weight: bold;
            font-size: 40px;
            color: darkblue;
        }
        p{
            text-align: center;
        }
         img{
             width: 100%;
             height: 100%;
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