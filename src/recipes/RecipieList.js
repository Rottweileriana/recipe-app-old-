import RecipieItem from "./RecipieItem"
import styled from "styled-components";

const StyledUL = styled.ul`
display: flex;
list-style-type: none;
flex-wrap: wrap;
`;



const RecipieList = (props) => {
    return ( <StyledUL>{props.data.map(function(item){
        return ( <RecipieItem key = {RecipieItem.id} item = {item} />);
})}</StyledUL>);}
 
export default RecipieList;

