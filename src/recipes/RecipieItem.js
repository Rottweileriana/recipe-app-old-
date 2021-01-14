import styled from "styled-components";

const StyledLI = styled.li`
display: flex;
flex-direction: column;
align-items: center;
flex-basis: 300px;
padding: 15px;
border: 3px black solid;
border-radius: 10px;
margin: 12px;
&>img {
    border-radius: 10px;
    
}
`



function RecipieItem(props) {
    console.log(props.item)
    return(<StyledLI>
      
      <img src={props.item.image} width="100%" alt={props.item.name}/>
      <h1>{props.item.name}</h1>
      </StyledLI>)
  }
  export default RecipieItem;