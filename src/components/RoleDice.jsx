import styled from 'styled-components';

import dice1 from '../assets/dices/dice_1.png';
import dice2 from '../assets/dices/dice_2.png';
import dice3 from '../assets/dices/dice_3.png';
import dice4 from '../assets/dices/dice_4.png';
import dice5 from '../assets/dices/dice_5.png';
import dice6 from '../assets/dices/dice_6.png';
import { Button } from '../Styled/Button.style';

const RoleDice = ({roleDice, currentDice, selectedNumber}) => {

    const dices = [
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
    ]

    return (
        <RoleDiceContainer>
            <div className="dice" >
                <img src={dices[currentDice - 1]} alt="dice" />
            </div>
            {
              selectedNumber ? <Button onClick={roleDice}>Play</Button> 
              :
              <Button disabled >Select a Number</Button>
            }
            
        </RoleDiceContainer>
    )
}

export default RoleDice

const RoleDiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

.dice {
  cursor: pointer;
}

p {
  font-size: 24px;
}
`;

