import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore

const ScoreContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding:1rem;
  max-width: 200px;
  text-align:center;
  h1{
    font-size: 100px;
    line-height: 100px;
  }

  p{
    font-size: 24px;
    font-weight: 500px;
  }
`;

/*

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;

*/