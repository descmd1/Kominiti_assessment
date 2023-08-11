import { useState } from "react";
import UserList from "./components/UserList"
import userData from './data.json';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

const App = () => {
  
  
  const [users, setUsers] = useState(userData)
  return(
    <div>
      <Header/>
      <UserList users={users}/>
    </div>
  )
}
export default App;