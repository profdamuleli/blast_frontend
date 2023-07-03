import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Hello");

  const reqBody = {
    "username" : "Lutendo",
    "password" : "Lodav72#"
  }

  fetch('api/auth/login', {
    headers : {
      "Content-Type" : "application/json" 
    },
    method : "post",
    body : JSON.stringify(reqBody),
  })
  .then((response) => response.json())
  .then((data) => console.log(data) );

  return <div className="App">
    <h1>Hello world</h1>
  </div>
}

export default App;
