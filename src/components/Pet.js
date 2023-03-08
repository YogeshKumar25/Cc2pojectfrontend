import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export const Pet=()=> {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"AntiqueWhite"}
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

const handleUpdate = (id) => {
  const Pet = pet.find((s) => s.id === id);
  const updatedpetName = prompt('Enter updated petname:', Pet.petName);
  const updatedpetBreed = prompt('Enter updated petbreed:', Pet.petBreed);
  const updatedgender = prompt('Enter updated gender:', Pet.gender);
  const updatedage = prompt('Enter updated age:', Pet.age);
  const updatedweight = prompt('Enter updated weight:', Pet.weight);
  const updatedPet = {
    id: Pet.id,
    petName: updatedpetName,
    petBreed:updatedpetBreed,
    gender:updatedgender,
    age:updatedage,
    weight:updatedweight
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





useEffect(()=>{
    fetch("http://localhost:8080/get")
    .then(res=>res.json())
    .then((result)=>{
      setPet(result);
    }
  );
  },[numPets]);
    return (
  
      <Container>
          <Paper elevation={3} style={paperStyle} >
              <h1 style={{color:"Maroon"}}>Pet</h1>
  
      <form className={classes.root} noValidate autoComplete="off">

      <TextField id="outlined-basic" label="ID" variant="outlined" fullWidth 
        value={id}
        onChange={(e)=>setId(e.target.value)}
        />
      
        <TextField id="outlined-basic" label="PETNAME" variant="outlined" fullWidth 
        value={petName}
        onChange={(e)=>setPetName(e.target.value)}
        />
        <TextField id="outlined-basic" label="PETBREED" variant="outlined" fullWidth
        value={petBreed}
        onChange={(e)=>setPetBreed(e.target.value)}
        />
        <TextField id="outlined-basic" label="GENDER" variant="outlined" fullWidth 
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        />
        <TextField id="outlined-basic" label="AGE" variant="outlined" fullWidth 
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        />
        <TextField id="outlined-basic" label="WEIGHT" variant="outlined" fullWidth 
        value={weight}
        onChange={(e)=>setWeight(e.target.value)}
        />
        <Button variant="contained" color="Magenta" onClick={handleClick}>
    Submit
  </Button>
      </form>
     
      </Paper>
      <h1>Pets</h1>
  
      
  
        {pet.map((Pet)=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={Pet.id}>
            <div className='output'>
            <div style={{ paddingRight: 50 }}>
           id:{Pet.id}<br/>
           petName:{Pet.petName}<br/>
           petBreed:{Pet.petBreed}<br/>
           gender:{Pet.gender}<br/>
           age:{Pet.age}<br/>
           weight:{Pet.weight}
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
      
        </Container>
  )
}
  export default Pet
  