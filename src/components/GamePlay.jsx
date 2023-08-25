import styled from "styled-components"
import React, { useState } from 'react'
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../Styled/Button.style";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore] = useState(2);
    const [selectedNumber, setSelectedNumber] = useState(undefined);
    const [error, setError] = useState("");
    const [currentDice, setCurrentDice] = useState(1);
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
  
    const roleDice = () => {
      if (!selectedNumber) {
        setError("You have not selected any number");
        return;
      }
  
      const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice((prev) => randomNumber);
  
      if (selectedNumber === randomNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => prev - 2);
      }
  
      setSelectedNumber(undefined);
    };
  
    const resetScore = () => {
      setScore(0);
    };

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector error={error} selectedNumber={selectedNumber} setError={setError} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} selectedNumber={selectedNumber} />
            <div className="btns">
              <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
              <Button onClick={() => setShowRules((prev) => !prev)}>
                {showRules ? "Hide" : "Show"} Rules
              </Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
.top_section {
  display: flex;
  justify-content: space-around;
  align-items: end;
}
.btns {
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

@media (max-width: 640px){
        
  .top_section {
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 1rem;
  }

}

`;

