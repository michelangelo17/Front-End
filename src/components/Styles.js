import styled from 'styled-components';


//Navigation Styling
export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    background-color: black;
    color: #fbfbfb;
    postion: sticky;
    top: 0;
`

export const StyledImg = styled.img`
    height: 5rem;

`

export const NavDiv = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
 `
export const NavItems = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
    font-family: 'Julius Sans One', sans-serif;
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        font-size: .7rem;
        
    }
`

export const NavLinks = styled.a`

    text-decoration: none;
    color: #fbfbfb;
    &:hover {
        color: darkgray;
    }
    @media (max-width: 500px) {
        padding: 6%;
    }
`

export const H1 = styled.h1`
    margin-left: 22%;
    font-family: 'Julius Sans One', sans-serif;
    @media (max-width: 500px) {
        font-size: .8rem;
        margin-left: 11%;
    }
`

//Home Styling
export const Header = styled.h1`
    display: flex;
    justify-content: center;
    font-family: 'Julius Sans One', sans-serif;
    margin-top: 5%;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

//Login Styling
export const StyledLoginDiv = styled.div`
  background-color: #fdfdfd;
  
`

export const StyledLoginForm = styled.form`
    font-family: 'Julius Sans One', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
export const StyledLabel = styled.label`
    font-family: 'Julius Sans One', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1%;
    `

export const StyledButton = styled.button`
    font-family: 'Julius Sans One', sans-serif;
    display: block;
    background-color: black;
    cursor: pointer;
    height: 45px;
    font-size: 1rem;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    color: #fbfbfb;
    margin: 1.5rem auto;
    &:hover {
        background-color: darkgray;
    }
    `

export const BottomLoginDiv = styled.div`

    margin-top: 2%;
    margin-bottom: 5%;

`

//Registration Styling
export const RegisterDiv = styled.div`
    font-family: 'Julius Sans One', sans-serif;
    display: flex;
    justify-content: center;
    background-color: #fbfbfb;
    padding-bottom: 5%;
`

export const StyledRegisterForm = styled.form`

    font-family: 'Julius Sans One', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`

export const StyledInput = styled.input`
    
    margin: 5%;
`
export const StyledRegisterButton = styled.button`
    font-family: 'Julius Sans One', sans-serif;
    display: block;
    background-color: black;
    cursor: pointer;
    height: 45px;
    font-size: 1rem;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    color: #fbfbfb;
    margin: 1.5rem auto;
    &:hover {
        background-color: darkgray;
    }
`
export const BottomRegisterDiv = styled.div`
    padding-bottom: 5%;
    padding-top: 5%;

`

//PhotoCard Styling

export const PhotoCardButton = styled.button`
    font-family: 'Roboto', sans-serif;
    padding: 6px;
    background: #f5b942;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    margin: 0 2% 0 2%; 
    &:hover {
    transition: .5s;
    transform: scale(1.10);
    cursor: pointer;
    }
`

//PhotoList Styling
export const ListContainer = styled.div`
    background-color: black;
    display: flex;
    flex-flow: row wrap;
    padding-bottom: 16%;
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`

export const PhotoListDiv = styled.div`
    
    width: 33%;
    text-align: center;
    background-color: black;
    @media (max-width: 500px) {
        width: 95%;
        
    }
`
export const PhotoImg = styled.img`
    width: 90%;
    border-radius: 1rem;
    margin-top: 11%;
    @media (max-width: 500px) {
        width: 95%;
    }
`

export const StyledH2 = styled.h2`
    color: #fbfbfb;
    font-family: 'Julius Sans One', sans-serif;
    text-decoration: none;
    
`
export const StyledH3 = styled.h3`
    color: #fbfbfb;
    font-family: 'Julius Sans One', sans-serif;
    text-decoration: none;
    
`

//UploadPhoto Styling
export const HFive = styled.h5`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    padding: 6px;
    background: #f5b942;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        transition: .5s;
        transform: scale(1.10);
    }
    
`
export const UploadPhotoLabel = styled.label`
    display: flex;
    justify-content: center;
`
    
export const HOne = styled.h1`
    text-align: center;
    font-family: 'Julius Sans One', sans-serif;
`

export const StyledPhotoButton = styled.button`
    font-family: 'Roboto', sans-serif;
    display: block;
    background-color: black;
    cursor: pointer;
    height: 45px;
    font-size: 1rem;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    color: #fbfbfb;
    margin: 1.5rem auto;
    &:hover {
        background-color: darkgray;
    }
    `
//Dashboard Styling
export const DashboardH1 = styled.h1`
    text-align: center;
    font-family: 'Julius Sans One', sans-serif;
    color: #fbfbfb;
    background-color: black;
    margin-bottom: 0;
    margin-top: 0;
    padding: 2%;
`

//Footer Styling
export const StyledFooter = styled.footer`
    width: 100%;
    background-color: black;
    padding-top: 1%;
    position: absolute;
    bottom: 0;
    
`
export const StyledP = styled.p`
    text-align: center;
    color: #fbfbfb;
    font-size: 1rem;

    font-family: 'Raleway', sans-serif;

`
