import styled from "styled-components";

export const main = styled.main`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`

//ESTILIZAÇÃO DA SECTION "HEADER" QUE ESTA DENTRO DA SECTION "HOME"

export const divHeader = styled.div`
width: 98%;
display: flex;
flex-direction: column;
align-items: center;

h4 {
    width: 90%;
    max-width: 100%;
    font-size: 7vw;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 900;
    text-align: center;
    letter-spacing: 8px;
    margin-bottom: 0;
    margin-top: 0;
    background-image: linear-gradient(to top left, #f5f5f5, #7fff00, #00bfff);
    background-clip: text;
    -web-kit-background-clip: text;
    color: transparent;
    background-size: 300% 300%;
    animation: animate 10s ease-in-out infinite;
}

@keyframes animate {
    0%{
        background-position: 0 0;
    }

    25%{
        background-position: 100% 0;
    }

    50%{
        background-position: 100% 100%;
    }

    75%{
        background-position: 0 100%;
    }

    100%{
        background-position: 0 0;
    }
}


h6 {
    font-size: 3vw;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 900;
    color: #f5f5f5;
    letter-spacing: 1vw;
    margin-top: 0;
    margin-bottom: 2%;
}

@media screen and (min-width: 380px) and (max-width: 480px) {
   h4 {
    font-size: 8vw;
   }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
   h4 {
    font-size: 8.5vw;
    letter-spacing: 9px;
   }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
   h4 {
    font-size: 9vw;
    letter-spacing: 10px;
   }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
   h4 {
    font-size: 9.5vw;
    letter-spacing: 12px;
   }
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
   h4 {
    font-size: 10vw;
    letter-spacing: 18px;
   }
}
`

//ESTILIZAÇÃO DA SECTION "HOME"

export const SectionHome = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 0 2% 0;

.figurePerfil {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
}

.imgPerfil {
    border-radius: 100%;
    width: 40%;
}

.divDescription {
    max-width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.paragrafoDescription {
    color: #f5f5f5;
    text-align: center;
    font-size: 4vw;
    font-family: "Dancing Script", cursive;
}

.divRedesSociais {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
}

a {
    display: flex;
    justify-content: center;
}

a, .imgRedesSociais {
    width: calc(60% - 10px);
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
   margin-bottom: 5%;
   
    .imgPerfil {
    width: 30%;
   }

   .paragrafoDescription {
    font-size: 3.5vw;
   }

   .divRedesSociais {
    width: 50%;
   }
}

@media screen and (min-width: 1025px) and (max-width: 1920px) {
   margin-bottom: 5%;
   
    .imgPerfil {
    width: 25%;
   }

   .paragrafoDescription {
    font-size: 3vw;
   }

   .divRedesSociais {
    width: 40%;
   }
}
`

//ESTILIZAÇÃO DA SECTION "SOBRE MIM"

export const SectionSobre = styled.section`
border-top: solid  #ECBA73 3px;
border-bottom: solid  #ECBA73 3px;
border-top-left-radius: 20vw;
border-bottom-left-radius: 20vw;
background: linear-gradient(to top left, #02454E, #5954A4, #8A54A2, #296986);
background-size: 300% 300%;
animation: animate 60s ease-in-out infinite;
width: 100%;
padding: 5vw 5vw 0 5vw;
display: flex;
flex-direction: column;
align-items: center;


.titleSobreMim {
    width: 90%;
    max-height: 15%;
    
    .h3SobreMim {
        font-size: 5vw;
        font-family: "Josefin Sans", sans-serif;
        color: #ECBA73;
        margin-bottom: 0;
    }

    .h5SobreMim {
        font-size: 3vw;
        font-family: "Josefin Sans", sans-serif;
        color: #f5f5f5;
        margin-top: 0;
    }
@media screen and (min-width: 480px) and (max-width: 1024px) {
    .h3SobreMim {
        font-size: 4vw;
    }

    .h5SobreMim {
        font-size: 2vw;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1920px) {
    .h3SobreMim {
        font-size: 3vw;
    }

    .h5SobreMim {
        font-size: 1.5vw;
    }
}
}

.descriptionSobreMim {
    width: 90%;
    margin-top: 2%;

    p {
    text-align: justify;
    font-size: 3vw;
    font-family: "Josefin Sans", sans-serif;
    color: #f5f5f5;
    }

@media screen and (min-width: 480px) and (max-width: 1024px) {
        p {
            font-size: 2vw;
        }
}

@media screen and (min-width: 1025px) and (max-width: 1920px) {
        p {
            font-size: 1.5vw;
        }
}
}
.figureSectionSobre {
    width: 90%;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 0 0 0 18vw;
    img {
        width: 30%;
    }

    .figureSectionSobre:hover {
    opacity: 0.5;
    transition: 0.5s;
    }

@media screen and (min-width: 768px) and (max-width: 1200px) {
        img {
            width: 20%;
        }
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
        img {
            width: 15%;
        }
}
}
`

//ESTILIZANDO A SEÇÃO HARDSKILLS "SectionHardSkills"

export const SectionHardSkills = styled.section`
width: 100%;
border-top: solid  #ECBA73 3px;
border-bottom: solid  #ECBA73 3px;
border-top-left-radius: 20vw;
border-bottom-left-radius: 20vw;
background: linear-gradient(to top left, #02454E, #5954A4, #8A54A2, #296986);
background-size: 300% 300%;
animation: animate 60s ease-in-out infinite;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 2vw;
flex-wrap: wrap;

.titleHardSkills {
    width: 90%;
    max-height: 15%;
    
    .h3HardSkills {
        font-size: 5vw;
        font-family: "Josefin Sans", sans-serif;
        color: #ECBA73;
        margin-bottom: 0;
    }
    .h5HardSkills {
        font-size: 3vw;
        font-family: "Josefin Sans", sans-serif;
        color: #f5f5f5;
        margin-top: 0;
    }
@media screen and (min-width: 480px) and (max-width: 1024px) {
    .h3HardSkills {
        font-size: 4vw;
    }

    .h5HardSkills {
        font-size: 2vw;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1920px) {
    .h3HardSkills {
        font-size: 3vw;
    }

    .h5HardSkills {
        font-size: 1.5vw;
    }
}
}

.divPaiCardHardSkills {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 2%;
}
`

export const divCardNivel1 = styled.div`
width: calc(140px - 50px);
display: flex;
flex-direction: column;
align-items: center;
margin: 0;
padding: 2vw;

.titleDivCard {
    color: #f5f5f5;
    text-align: center;
    font-size: 100%;
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 5%; 
}

.divCardNivel2 {
    width: 95%;
    height: 15px;
    max-height: 15px;
    display: flex;
    align-items: center;
    justify-content: end;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    p {
        font-size: 80%;
        font-family: "Josefin Sans", sans-serif;
        color: #024757;
    }
}

.divCardNivel3 {
    width: 45%;
    height: 100%;
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    width: calc(160px - 50px);
    
    .divCardNivel2 {
        width: 100%;
        height: 20px;
        max-height: 20px;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: calc(200px - 50px);
    
    .divCardNivel2 {
        width: 100%;
        height: 30px;
        max-height: 30px;
    }

}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
    width: calc(250px - 50px);
    .titleDivCard {
        font-size: 2vw;
    }
    
    .divCardNivel2 {
        width: 100%;
        height: 40px;
        max-height: 40px;
    }
}
`

//ESTILIZANDO O COMPONENTE "CardPortfolio"

export const SectionPortfolio = styled.section`
width: 100%;
border-top: solid  #ECBA73 3px;
border-bottom: solid  #ECBA73 3px;
border-top-left-radius: 20vw;
border-bottom-left-radius: 20vw;
background: linear-gradient(to top left, #02454E, #5954A4, #8A54A2, #296986);
background-size: 300% 300%;
animation: animate 60s ease-in-out infinite;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2%;

.titlePortfolio {
    width: 82%;
    max-height: 15%;
    
    .h3Portfolio {
        font-size: 5vw;
        font-family: "Josefin Sans", sans-serif;
        color: #ECBA73;
        margin-bottom: 0;
    }
    .h5Portfolio {
        font-size: 3vw;
        font-family: "Josefin Sans", sans-serif;
        color: #f5f5f5;
        margin-top: 0;
    }

@media screen and (min-width: 480px) and (max-width: 1024px) {
    .h3Portfolio {
        font-size: 4vw;
    }

    .h5Portfolio {
        font-size: 2vw;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1920px) {
    .h3Portfolio {
        font-size: 3vw;
    }

    .h5Portfolio {
        font-size: 1.5vw;
    }
}
}

.divPaiCardPortfolio {
    width: 82%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2%;

@media screen and (min-width: 637px) and (max-width: 1024px) {
   margin-top: 3%;
}

@media screen and (min-width: 1024px) and (max-width: 1580px) {
   margin-top: 4%;
}

@media screen and (min-width: 1581px) and (max-width: 1920px) {
   margin-top: 5%;
}
}
`

export const divCardPortfolio = styled.div`
width: calc(90% - 30px);
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border-radius: 10% 0px;
margin-bottom: 5%;

img {
    width: 100%;
    border-radius: 2vw 0px 0px;
}

h4 {
    font-size: 100%;
    font-family: "Josefin Sans", sans-serif;
    color: #ECBA73;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
}

p {
    font-size: 80%;
    font-family: "Josefin Sans", sans-serif;
    color: #f5f5f5;
    text-align: justify;
    margin: 0 2% 5% 2%;
    font-family: "Josefin Sans", sans-serif;
}

.divCardButton {
    width: 100%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
}

a {
    width: 40%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    border-radius: 5ch;

    button {
        width: 100%;
        font-family: "Josefin Sans", sans-serif;
        font-size: 65%;
        color: #024757;
        border-radius: 5ch;
        border: 0;
        padding: 5%;
    }
}

button:hover {
    background-color: #ECBA73;
    transition: 0.5s;
}

@media screen and (max-width: 768px) {
   
    h4 {
        font-size: 80%;
    }

    p {
        font-size: 70%;
    }

    a {
        button {
        font-size: 55%;
        }
    }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
    width: calc(30% - 30px);
    height: 320px;
    max-height: 320px;
    margin-bottom: 0;

    h4 {
        font-size: 80%;
    }

    p {
        font-size: 70%;
    }

    a {
        button {
        font-size: 60%;
        }
    }
}

@media screen and (min-width: 1201px) and (max-width: 1580px) {
    width: calc(30% - 30px);
    height: 400px;
    max-height: 400px;
    margin-bottom: 0;

    h4 {
        font-size: 100%;
    }

    p {
        font-size: 92%;
    }

    a {
        button {
        font-size: 90%;
        }
    }
}

@media screen and (min-width: 1581px) and (max-width: 1700px) {
    width: calc(30% - 30px);
    height: 450px;
    max-height: 450px;
    margin-bottom: 0;

    h4 {
        font-size: 100%;
    }

    p {
        font-size: 95%;
    }

    a {
        button {
        font-size: 90%;
        }
    }
}

@media screen and (min-width: 1701px) and (max-width: 1920px) {
    width: calc(30% - 30px);
    height: 480px;
    max-height: 480px;
    margin-bottom: 0;

    h4 {
        font-size: 100%;
    }

    p {
        font-size: 100%;
    }

    a {
        button {
        font-size: 90%;
        }
    }
}
`

//ESTILIZANDO A SEÇÃO DAS TECHS "SectionTechs"

export const SectionTechs = styled.section`
width: 100%;
border-top: solid  #ECBA73 3px;
border-bottom: solid  #ECBA73 3px;
border-top-left-radius: 24vw;
border-bottom-left-radius: 24vw;
background: linear-gradient(to top left, #02454E, #5954A4, #8A54A2, #296986);
background-size: 300% 300%;
animation: animate 60s ease-in-out infinite;
display: flex;
justify-content: center;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;

.titleTechs {
    width: 82%;
    max-height: 15%;
    
    .h3Techs {
        font-size: 5vw;
        font-family: "Josefin Sans", sans-serif;
        color: #ECBA73;
        margin-bottom: 0;
    }
    .h5Techs {
        font-size: 3vw;
        font-family: "Josefin Sans", sans-serif;
        color: #f5f5f5;
        margin-top: 0;
    }
@media screen and (min-width: 480px) and (max-width: 1024px) {
    .h3Techs {
        font-size: 4vw;
    }

    .h5Techs {
        font-size: 2vw;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1920px) {
    .h3Techs {
        font-size: 3vw;
    }

    .h5Techs {
        font-size: 1.5vw;
    }
}
}

.divPaiFigureTechs {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-top: 2%;

    figure {
    width: calc(40px - 5px);
    height: calc(40px - 5px);
    background-color: #f5f5f5;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;

    @media screen and (min-width: 480px) and (max-width: 768px) {
        width: calc(50px - 5px);
        height: calc(50px - 5px);
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        width: calc(60px - 5px);
        height: calc(60px - 5px);
    }

    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        width: calc(70px - 5px);
        height: calc(70px - 5px);
    }

    @media screen and (min-width: 1201px) and (max-width: 1920px) {
        width: calc(80px - 5px);
        height: calc(80px - 5px);
    }
}

figure:hover {
    opacity: 0.5;
    transition: 0.5s;
}

img {
    width: 60%;
}

}
`

//ESTILIZANDO A SECTION "CONTATO"

export const sectionContato = styled.section`
border-top: solid  #ECBA73 3px;
border-bottom: solid  #ECBA73 3px;
border-top-left-radius: 20vw;
border-bottom-left-radius: 20vw;
background: linear-gradient(to top left, #02454E, #5954A4, #8A54A2, #296986);
background-size: 300% 300%;
animation: animate 60s ease-in-out infinite;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2%;

.titleContato {
    width: 82%;
    max-height: 15%;
    
    .h3Contato {
        font-size: 5vw;
        font-family: "Josefin Sans", sans-serif;
        color: #ECBA73;
        margin-bottom: 0;
    }
    .h5Contato {
        font-size: 3vw;
        font-family: "Josefin Sans", sans-serif;
        color: #f5f5f5;
        margin-top: 0;
    }
@media screen and (min-width: 480px) and (max-width: 1024px) {

    .h3Contato {
        font-size: 4vw;
    }

    .h5Contato {
        font-size: 2vw;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1920px) {
    .h3Contato {
        font-size: 3vw;
    }

    .h5Contato {
        font-size: 1.5vw;
    }
}
}

.divPaiContato {
    width: 82%;
    margin-top: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 480px) and (max-width: 768px) {
          margin-top: 7.5%;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
          margin-top: 7%;
    }

    @media screen and (min-width: 1025px) and (max-width: 1200px) {
          margin-top: 6.5%;
    }

    @media screen and (min-width: 1201px) and (max-width: 1920px) {
          margin-top: 6%;
    }

    .figureContato {
        width: 20%;
        display: flex;
        justify-content: center;
        justify-content: space-evenly;
        margin: 2%;


        a, .imgContato {
            display: flex;
            justify-content: center;
            width: 70%;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) {
            width: 18%;
        } 
        
        @media screen and (min-width: 1025px) and (max-width: 1200px) {
            width: 15%;
        } 
        
        @media screen and (min-width: 1201px) and (max-width: 1920px) {
            width: 12%;
        }
    }



    form {
        width: 70%;
        margin: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            width: 95%;
            font-size: 65%;
            font-family: "Josefin Sans", sans-serif;
            color: #f5f5f5;
            text-align: justify;
            margin: 0 2% 4% 2%;
            font-family: "Josefin Sans", sans-serif;
        }

        address, a {
        width: 40%;
        background-color: #f5f5f5;
        font-family: "Josefin Sans", sans-serif;
        font-size: 70%;
        text-decoration: none;
        font-style: normal;
        text-align: center;
        color: #024757;
        border-radius: 5ch;
        border: 0;
        padding: 3%;
        margin-top: 3%;
        }
    

        @media screen and (min-width: 480px) and (max-width: 768px) {
            p {
                font-size: calc(60% + 2px);
                margin: 0 2% 4% 2%;
            }
            
            address, a {
                width: 35%;
                font-size: 80%;
                padding: 2.5%;
            }
        }

        @media screen and (min-width: 769px) and (max-width: 1024px) {
            p {
                font-size: calc(80% + 3px);
                margin: 0 2% 3% 2%;
            }
            
            address, a {
                width: 30%;
                font-size: 90%;
                padding: 2%;
            }
        }

        @media screen and (min-width: 1025px) and (max-width: 1200px) {
            p {
                font-size: calc(100% + 6px);
                margin: 0 2% 2% 2%;
            }
            
            address, a {
                width: 25%;
                font-size: 98%;
                padding: 2%;
            }
        }

        @media screen and (min-width: 1201px) and (max-width: 1920px) {
            p {
                font-size: calc(100% + 8px);
                margin: 0 2% 1% 2%;
            }
            
            address, a {
                width: 20%;
                font-size: 100%;
                padding: 1.5%;
            }
        }
    }
}
`