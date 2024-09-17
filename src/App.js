import './App.css';
import List from './List';

function App() {
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
