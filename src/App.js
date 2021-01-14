// import './App.css';
import RECIPE_DATA from "./Data";
import RecipeList  from "./recipes/RecipieList";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  @import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');

  font-family: 'Bad Script', cursive;
  margin: 0;
  padding: 0;
}`

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
     <RecipeList data={RECIPE_DATA.recipes}/>
    </div>
    </>
  );
}

export default App;
