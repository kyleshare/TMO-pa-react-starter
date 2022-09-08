import './App.css';

function App() {
  function addRecipe(e) {
    e.preventDefault();
    console.log('Test');
    return (
      <h1>
        Conditional render
      </h1>
    );

  }
  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
 
      <h1>
        My Recipes
      </h1>
      <p>
        There are no recipes to list.
      </p>


      {/* <button onClick={addRecipe}>Add Recipe</button>  */}
      
      {/* LIST IS RENDERED IN INDEX
      <List /> */}
    </div>
  );
}

export default App;
