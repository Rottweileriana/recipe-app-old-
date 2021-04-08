import RecipieItem from "./RecipieItem"
import styled from "styled-components"
import {Link} from "react-router-dom"

const StyledUL = styled.ul`
display: flex;
list-style-type: none;
flex-wrap: wrap;
`;



const RecipieList = (props) => {
    return (  
        <div className="RecipieList"> 

        {props.data.map((item) =>(
            <div className="recipie-preview" key ={props.item.id}>
            <Link to={`/recept/${props.item.id}`}> 
            <RecipieItem key = {RecipieItem.id} item = {item} />
    
            </Link>
    
    
    </div>))};
    </div>);
}
 
export default RecipieList;

