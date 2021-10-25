import './App.css';
import { T } from '@tolgee/react'

function App() {
  return (
    <div className="App">
      <h1>
        <T keyName="hello_world">
          Hello world!
        </T>
      </h1>
    </div>
  );
}

export default App;
