import React from "react";
import { useState,useEffect } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import axios from "axios"

function Home() {
  const [users, setUsers] = useState([{name:"youself",email:"abc@gmail.com",age:"13"}]);

    useEffect(()=>{
    axios.get('http://localhost:3000/')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err));
  },[]);
  function handleDelete(id){
     axios.delete('http://localhost:3000/deleteUser/'+id)
     .then(res=>{console.log(`deleted ${res}`)
     window.location.reload()
    })
     .catch(err=>console.log(err));
  }

  return (<div className="display-form">
      <div className="innercontent">
        <Link to="/create" ><button className="add-btn">Add +</button></Link>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name :</th>
              <th>Email :</th>
              <th>Age:</th>
              {/* <th>Photo:</th> */}
              <th>Action:</th>
          </tr>
          </thead>
          <tbody>

            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                   <Link to={`/update/${user._id}`} className="edit-link"> <button style={{background:"green", color:"white", marginLeft:"5px"}}>Edit</button></Link>
                   <button onClick={(e)=>handleDelete(user._id)} style={{background:"red", color:"white", marginLeft:"5px"}}> Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
