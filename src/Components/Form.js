
import React, {useState, useEffect} from 'react'
import Input from './Input'
import Api from './Api'
import { render } from '@testing-library/react'
const Form = () => {


    const [posts, setPost] = useState([])    
    useEffect(() => {
            fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(json => setPost(json))
        },[])
          
  
          const [name, setFirstName] = useState("");

            const onInputChange = (event) => {
              setFirstName(event.target.value);
            };
          
          
            const [email, setEmail] = useState("");
          
            const onInputCha = (event) => {
              setEmail(event.target.value);
            };
          
            const [password, setPassword] = useState("");
          
            const onInputCh = (event) => {
              setPassword(event.target.value);
            };      


            function OutPut(){
              
              
              render( <Api data ={posts} />)
               
            }


    return (
        <div>             
                <Input type="text" placeholder="Enter Name" value={name} onChange = {(e) => onInputChange(e)}/>
               <Input type="text" placeholder="Enter email" value={email} onChange = {(e) => onInputCha(e)} />
               <Input type="text" placeholder="Enter Password" value={password} onChange = {(e) => onInputCh(e)} />
               <Input type="text" placeholder="Phone"  />                
                <button onClick = {OutPut} >Show Data</button>
                <button onClick={() => {
            let arr = {
              fName: `${name}`,
              lName: `${email}`,
              email: `${password}`,
             
            };

            fetch("http://localhost:8080/users", {
              method: "POST",
              body: JSON.stringify({
                name: arr.fName,
                email: arr.email,
                password: arr.password,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          }} >Submit Data</button>
                
        </div>
    )
    
    
    
}



export default Form
