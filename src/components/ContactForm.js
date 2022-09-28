// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Card, CardContent, CardActions, Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";

const ContactForm = ({tambahKontak}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState(
        {name : "", phone : "", email : "", photo : ""}
    );
  
    const formInputOnChangeHandler = (event) =>{
      const name  = event.target.name;
      const value = event.target.value;
  
      setNewContact({
          ...newContact, [name] : value
      })
    }
  
    const formSubmitHandler = (event) => {
      event.preventDefault();
      tambahKontak(newContact);
      setNewContact({name : "", phone : "", email : "", photo : ""})
    }
    return (
        <>
            <Card
                sx={{
                width: 500,
                height: "auto",
                backgroundColor: "white",
                marginTop: 4,
                }}
            >
                <form onSubmit={formSubmitHandler}>
                <CardContent>
                    <FormControl sx={{ m: 2, width: "50ch" }}>
                    <TextField 
                        required 
                        id="filled-basic"
                        variant="filled" 
                        label="Name"
                        name="name" 
                        value={newContact.name}
                        onChange={formInputOnChangeHandler}
                    />
                    </FormControl>

                    <FormControl sx={{ m: 2, width: "50ch" }}>
                    <TextField
                        required
                        id="input-nomor-hp"
                        name="phone" 
                        label="Phone"
                        variant="filled"
                        value={newContact.phone}
                        onChange={formInputOnChangeHandler}
                    />
                    </FormControl>

                    <FormControl sx={{ m: 2, width: "50ch" }}>
                    <TextField
                        required
                        id="input-email"
                        name="email" 
                        label="Email"
                        variant="filled"
                        value={newContact.email}
                        onChange={formInputOnChangeHandler}
                    />
                    </FormControl>

                    <FormControl sx={{ m: 2, width: "50ch" }}>
                    <TextField
                        required
                        id="input-photo"
                        name="photo" 
                        label="Photo URL"
                        variant="filled"
                        value={newContact.photo}
                        onChange={formInputOnChangeHandler}
                    />
                    </FormControl>

                </CardContent>
                <CardActions>
                    <FormControl sx={{ m: 2, width: "50ch" }}>
                    <Button variant="text" type="submit">
                        ADD NEW
                    </Button>
                    </FormControl>
                </CardActions>
                
                </form>
            </Card>
        </>
    );
}

export default ContactForm;