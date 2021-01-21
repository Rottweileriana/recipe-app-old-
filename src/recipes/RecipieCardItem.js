

const RecipieCardItem = (props) => {
    
    const item = props.item;

    return ( <li>
        <h1>{item.name}</h1>
        <h2>{item.id}</h2>
        
            {item.map((item) => (
             <p>{item.ingredients}</p>
             ))}
            
        
        
    </li>  );
}
 
export default RecipieCardItem;