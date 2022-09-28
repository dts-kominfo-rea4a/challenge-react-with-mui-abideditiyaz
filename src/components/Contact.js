// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import ListItem from "@mui/material/ListItem";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    // console.log(data)
    return (
            <>
            <ListItem>
                <ListItemAvatar sx={{mr:2}}>
                    <Avatar 
                    alt="Contact foto" 
                    src={data.photo}
                    sx={{width: 56, height: 56, margin: 0}}
                    />
                </ListItemAvatar>
                <Box sx={{ marginLeft: "1.5rem" }} textAlign="left">
                    <Typography variant="body1">{data.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    {data.phone}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    {data.email}
                    </Typography>
                </Box>
            </ListItem>
            </>
        // console.log(data)
        );
};

export default Contact;
