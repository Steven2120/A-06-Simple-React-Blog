import { useState } from "react";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import Blog from "./components/Blog";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <NavBar user={user} />
      {!user && <Login setUser={setUser} />}
      {user && <Blog user={user} />}
    </div>
  );
};

export default App;
