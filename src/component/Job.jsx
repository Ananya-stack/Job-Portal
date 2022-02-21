import React, { useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Modal, Card } from "react-bootstrap";
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

const Job =() => {
  const history = useHistory()

// modals
const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow();

// input-field
const [job, setJob] = useState("");
const [skill, setSkill] = useState("");
const [exp, setExp] = useState("");
const [name, setName] = useState(getData());

const handleSubmit = (e) => {
e.preventDefault();

const data = { job, skill, exp };
let temp = name;
temp.push(data);
setName(temp);
handleClose();
};

useEffect (()=>{
   localStorage.setItem('All', JSON.stringify(name))
  
})

return (
<div>
<p>WELCOME TO COMPANY PORTAL</p>

<button
type="button"
class="btn btn-primary"
// onClick={() => {history.push('/add')}}
onClick={handleShow}
>
Add Jobs here
<AddBoxIcon />
</button>
<br/>
<button type="button"
class="btn btn-primary btn-view" onClick={() => {history.push('/view')}}>VIEW JOBS</button>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>ADD vacant position</Modal.Title>
</Modal.Header>

<Modal.Body>
<form onSubmit={handleSubmit}>
<div class="form-label">
<label>Job Title :</label>
<div class="col-sm-10">
<input
name="job"
placeholder="Designation"
value={job}
onChange={(e) => setJob(e.target.value)}
/>
</div>
</div>

<div class="form-label">
<label>Required Skills:</label>
<div class="col-sm-10">
<input
name="skill"
placeholder="Skills"
value={skill}
onChange={(e) => setSkill(e.target.value)}
/>
</div>
</div>

<div class="form-label">
<label>Experience level:</label>
<div class="col-sm-10">
<input
name="exp"
placeholder="Experience"
value={exp}
onChange={(e) => setExp(e.target.value)}
/>
</div>
</div>
<button type="submit" 
  class="btn btn-primary">Add Jobs</button>
</form>
</Modal.Body>
</Modal>

{name?.map((i, index) => { 
return ( 
<>

{/* <View name={name}/>  */}
{/* <Card border="primary" className='card-content' style={{ width: '67rem' }}>
 <Card.Header>{i.job}</Card.Header>
 <Card.Body>
  <Card.Title>{i.skill}</Card.Title>
  <Card.Text>{i.exp}</Card.Text>
 </Card.Body>
</Card> */}
</>
 );
})}

</div>
);
}

export default Job;


