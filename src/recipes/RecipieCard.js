import styled from "styled-components";
import RecipieCardItem from "./RecipieCardItem"

 

const RecipieCard = (props) => {

    return(
   <p>
       {props.data.map(function(item) {
           return(<RecipieCardItem item={item}/>)
       })}
   </p>
   );
   
}
 
export default RecipieCard;