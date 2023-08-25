import styled from 'styled-components'

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
      setSelectedNumber(value);
      setError("");
    };

    return (
       <NumberSelectorContainer>
            <p className='error'>
                {error}
            </p>
            <div className="flex">
                { arrNumber.map((value,id)=>(
                    <Box 
                        isSelected={value === selectedNumber}
                        key={id}
                        onClick={ () => numberSelectorHandler(value)}
                    >
                        {value}
                    </Box>
                ))} 
            </div>
            <p>Select Number</p>
       </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:end;
  
  .flex{
    
    display:flex;
    justify-content: space-between;
    gap:10px;
  }
  p{
    font-size:24px;
    font-weight:700;
  }

  .error{
    color:red;
  }

  @media (max-width: 640px){
    align-items:center;
    gap:5px;
  }
`;

const Box = styled.div`
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    height: 64px;
    width: 64px;
    border: 1px solid black;
    border-radius: 20px;
    display:grid;
    place-items:center;
    font-weight:700;
    font-size:24px;
    &:hover{
      color: gray;
    }

    @media (max-width: 640px){
      height: 32px;
      width: 32px;
      border-radius: 10px;
    }
`;

