import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from "@mui/material";

export default function StudentTextFields() {
    const paperStyle = {
        padding: "50px 20px",
        width: 600,
        margin: "20px auto",
    };

    const [name, setName] = React.useState("Name");
    const [address, setAddress] = React.useState("Address");
    const onSubmitButtonClick = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log(student);
        fetch("http://localhost:8080/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("Added: " + JSON.stringify(student))})};

  return (
    <Container>
        
        <Paper elevation={ 3 } style={ paperStyle }>
            <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }} noValidate autoComplete="off">
            <h1>Add Student</h1>
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                value={ name } onChange={ (e) => setName(e.target.value) }
                />
            <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                value={ address } onChange={ (e) => setAddress(e.target.value) }
            />
            { name } lives at { address }
            </Box>
            <Button variant="contained" size="large" onClick={ onSubmitButtonClick }>
                Submit
            </Button>
        </Paper>
    </Container>
  );
}