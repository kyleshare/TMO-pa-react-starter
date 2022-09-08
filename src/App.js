import './App.css';
import List from './List';

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
      
      <List />
    </div>
  );
}

export default App;
