import styled from "styled-components";
import HeroDice from "../assets/dices.png"
import { Button } from "../Styled/Button.style";
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div className="logo">
            <img src={HeroDice} alt="hero" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle} className="button">Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    
    height: 100vh;
    display: flex;
    
    align-items: center;
    
    
    .content{
        width:100%;
        height: 50vh;
        display: flex;
        flex-direction:column;
        justify-content: center;
        min-width: 100px;
        padding:4rem;
        h1{
            font-size: 4rem;
            white-space: wrap;
        }
    }

    .logo{
        width:0%;
        img{
            visibility: hidden;
            max-width:100%;
            height:auto;
        }
    }

    @media (min-width: 640px){
        
        .content{
            width:50%;
        }
        
        .logo{
            width:50%;
            img{
                visibility: visible;
                max-width:100%;
                height:auto;
            }
        }
    }
`;
