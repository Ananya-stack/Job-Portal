import React, { useState, useEffect} from "react";
// import { useHistory } from 'react-router-dom';
import { Card } from "react-bootstrap";
// import View from "./View";
import './View.css'

const getData = () =>{
   const data = localStorage.getItem('All');
   if(data) {
     return JSON.parse(data);
   }
    else {
      return []
    }
}

const View =() => {

  // search
  const [search, setSearch] = useState("")
// input-field
const [job, setJob] = useState("");
const [skill, setSkill] = useState("");
const [exp, setExp] = useState("");

const [name, setName] = useState(getData());

const handleSubmit = (e) => {
e.preventDefault();
// history.push("/view")

const data = { job, skill, exp };
let temp = name;
temp.push(data);
setName(temp);
};

useEffect (()=>{
   localStorage.setItem('All', JSON.stringify(name))
   
})

return (
<>
<input type="text" className="search-input" placeholder="search.." 
onChange={(e) =>{setSearch(e.target.value)}} />
{
    name?.filter((i) =>{
        if(search == "" ) {
            return i
        } else if(i.job.includes(search)) {
            return i
        }
    }).map((i, key) => { 
return ( 
<>
{/* <View name={name}/>  */}
<div key={key}>
<Card border="primary" className='card-content' style={{ width: '67rem' }}>
 <Card.Header className="card-para">JOB-TITLE: {i.job}</Card.Header>
 <Card.Body>
  <Card.Title>SKILLS: {i.skill}</Card.Title>
  <Card.Text>EXPERIENCE-LEVEL: {i.exp}</Card.Text>
 </Card.Body>
</Card>
</div>
</>
 );
})
}
</>
);
}

export default View;


