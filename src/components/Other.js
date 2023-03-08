import React, { useState } from 'react';
import { Paper,Button} from '@material-ui/core';

export const Pet=()=> {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[id,setId]=useState('')
    const[petName,setPetName]=useState('')
    const[petBreed,setPetBreed]=useState('')
    const[gender,setGender]=useState('')
    const[age,setAge]=useState('')
    const[weight,setWeight]=useState('')
    const[pet,setPet]=useState([])
    const [numPets, setNumPets] = useState(0);
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const Pet={id,petName,petBreed,gender,age,weight,}
        console.log(pet)
        fetch("http://localhost:8080/post",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(Pet)
        }).then(()=>{
            console.log("New Pet added");
            setNumPets(numPets +1);
          });
};
}
const handleUpdate = (id) => {
    const Pet = pet.find((s) => s.id === id);
    const updatedpetName = prompt('Enter updated petname:', Pet.petName);
    const updatedpetBreed = prompt('Enter updated petbreed:', Pet.petBreed);
    const updatedgender = prompt('Enter updated gender:', Pet.gender);
    const updatedage = prompt('Enter updated age:', Pet.age);
    const updatedweight = prompt('Enter updated weight:', Pet.weight);
    const updatedPet = {
      id: Pet.id,
      PetName: updatedpetName,
      PetBreed:updatedpetBreed,
      Gender:updatedgender,
      Age:updatedage,
      Weight:updatedweight
    };
    fetch('http://localhost:8080/put', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPet),
    })
  
    .then(() => {
      setNumPets(numPets +1);
    });
  };
  
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/delete?id=${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setNumPets(numPets +1);
      });
  };
  <h1>Pets</h1>
  
      
  
        {pet.map((Pet)=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={Pet.id}>
            <div className='output'>
            <div style={{ paddingRight: 50 }}>
           Id:{Pet.id}<br/>
           PetName:{Pet.petName}<br/>
           PetBreed:{Pet.petBreed}<br/>
           Gender:{Pet.gender}<br/>
           Age:{Pet.age}<br/>
           Weight:{Pet.weight}
           </div>
           <div>
            <Button variant="contained" color='secondary' style={{marginTop: 25,marginLeft: 200 }} onClick={() =>handleDelete(Pet.id)}>
              Delete
            </Button>
            <br/>
            <Button
  variant="contained"
  color="secondary"
  style={{ marginTop: 25, marginLeft: 200 }}
  onClick={() => handleUpdate(Pet.id)}
>
  Update
</Button>
           </div>
  </div>
          </Paper>
          ))}