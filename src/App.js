import React from 'react'
import { useState } from 'react'
// import React, { useState } from 'react'

function App() {
  let [ counter, changeCounter ] = useState(1)
  //takes changeCounter and makes it global
  window.changeCounter = changeCounter
  //Note: We would almost never want to make global variables this way in a finished app. This is just useful for testing and debugging.
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  )
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
