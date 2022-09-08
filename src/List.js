import React, { useState } from "react";


function List(props) {
    // when true, don't render "add recipe" button, render form
    const [recipeClicked, setRecipeClicked] = useState(false);

    // replace "there are no recipes to display"
    const [recipe, setRecipe] = useState();

    const handleClick = () => {
        //onClick();
        setRecipeClicked(true);
    }

    const submitRecipe = (event) => {
        event.preventDefault();

        //print stuff from form -- how?
    }

    if (recipeClicked) {
        return (
            <form onSubmit={submitRecipe}>
                <label for="recipe-name">Recipe Name: </label>
                <input type="text" id="recipe-name" name="recipe-name" />
                
                <label for="recipe-instructions">Recipe Instructions: </label>
                <input type="text" id="recipe-instructions" name="recipe-instructions" />
                
                <input type="submit" value="Submit Recipe" />
            </form>      
        )
    }

    // if (setRecipe) {
    //     return (
    //         <div>
    //             render test
    //             {{recipe}}
    //         </div>
    //     )
    // }

    return (
        <div>
            <button onClick={handleClick}>
                Add Recipe
            </button>
        </div>
    );
}

export default List;