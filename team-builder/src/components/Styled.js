import React from 'react';
import styled from 'styled-components'
import Lol from './Lol.jpg'

export const Background = styled.div`
background-image: url(${Lol});
width: 1920px;
height: 1080px;
margin: 0px;
background-attachment: fixed;
background-position: center;
color: #cfa75a;
`

export const ChampionCard = styled.div`
`

export const Header = styled.h1`
color: #cfa75a;
margin: 0px;
`

export const Stacked = styled.div`
color: #cfa75a;
display: flex;
justify-content: center;
flex-direction: column;
`
