//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
    const[users, userState] = useState([])
    const loaduser = async()=>{
    const data = await fetch("https://reqres.in/api/users?page=1");
    const d = await data.json()
    userState(d.data)

  }
  return (
    <><div className="Navbar">
      <h2 className="title">Fetcher</h2>
      
      <h2 className="UserBtn" onClick={loaduser}>Get User</h2>
    </div>
    <div className="start">
    <div className="container">
        <ul>
        
          {users.map(({ id, email, first_name, last_name, avatar }) => (
            <li key={id}>
              <div className="image"><img className="img" src={avatar} alt="txt"></img></div>
              <div className="name"><li className="flname e">{first_name} {last_name}</li></div>
              <div className="emails"><li className="flname e">{email}</li></div>
              <div className="emails"><li className="flname e"> {id}</li></div>
            </li>
          ))}
        </ul>
      </div></div></>
    
  );
}

export default App;
