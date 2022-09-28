import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import { useState } from "react";
import contactsJSON from './data/contacts.json'
import Grid from "@mui/material/Grid";
import { Container } from '@mui/system';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  const [datas, setData] = useState (contactsJSON);
  // const isiData = datas.contactsJSON;
  // console.log(isiData.length)
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const nambahContacts = (tambahContacts) => {
    const contactBaru = {
      "name": tambahContacts.name,
      "phone": tambahContacts.phone,
      "email": tambahContacts.email,
      "photo": tambahContacts.photo
    } 

    setData([...datas, contactBaru])
  }
  return (
    <div className="App">
      {/* {console.log(isiData)} */}
      <Container sx={{width: "100vw"}}>
        <Header />
        <Grid container spacing={4}>
          <Grid item xs={6} md={6}>
            <ContactForm tambahKontak={nambahContacts} />
          </Grid>
          <Grid item xs={6} md={6}>
            <List sx={{ width: "100%", maxWidth: 500, bgcolor: "aquamarine", marginTop: 4}}>
              {
                datas.map((data, index)=>{
                  // console.log(data)
                  return(
                    <div className="isiJSON" key={index}>
                      <Contact data={data}/>
                    </div>
                  )
                })
              }
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
