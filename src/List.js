import React, { useState } from "react";


function List(props) {
    const [recipeClicked, setRecipeClicked] = useState(false);
    const [recipeName, setRecipeName] = useState("None");
    const [recipeInstruction, setRecipeInstruction] = useState();

    const handleClick = () => {
        setRecipeClicked(true);
    }

    const submitRecipe = (event) => {
        event.preventDefault();

        const name = event.target[0].value;
        const instruction = event.target[1].value;

        setRecipeName(name);
        setRecipeInstruction(instruction);

        // do not render form
        setRecipeClicked(false);

        console.log(event);
    }

    if (recipeClicked) {
        return (
            <form onSubmit={submitRecipe}>
                <label for="recipe-name">recipe-name</label>
                <input type="text" id="recipe-name" name="recipe-name" />
                
                <label for="recipe-instructions">recipe-instructions</label>
                <input type="text" id="recipe-instructions" name="recipe-instructions" />
                
                <input type="submit" value="Submit Recipe" />
            </form>      
        )
    } else {
        return (
            <div>
                <p>
                    { recipeName === "None" ? <p>There are no recipes to list</p> : <li> {recipeName} {recipeInstruction} </li> }
                    
                </p>
                <button onClick={handleClick}>
                    Add Recipe
                </button>
            </div>
        );

    }
}

export default List;