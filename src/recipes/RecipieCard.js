import styled from "styled-components";
import {useParams} from "react-router-dom"
import RecipieCardItem from "./RecipieCardItem"

 

const RecipieCard = (props) => {
const {id} = useParams();
    return(
        <div className="RecipeCard">
   <p>
       RecipieCard - {id}
       {/* {props.data.map(function(item) {
           return(<RecipieCardItem item={item}/>)
       })} */}
   </p>
   </div>
   );
   
}
 
export default RecipieCard;