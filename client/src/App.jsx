import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";

function App() {
  return(
    <div>
      <h1>User Authentication</h1>
      <Signup />
      <hr />
      <Login />
    </div>
  );
}

export default App; 