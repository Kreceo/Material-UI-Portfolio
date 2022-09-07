import { Typography, Box, TextField, Button, TextareaAutosize } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault()

    const formData = new FormData(e.target);
    
    setName(e.target.value);

    formData.append("access_key", "011d0a10-8def-4457-814d-fac6fb718fa");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mesage", message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
    .then((res) => res.json());
    if (res.success) {
      setSuccessMessage(res.message);
    } else {
      setSuccessMessage(res.message);
    }
  }
  return (
      <Box sx={{ margin: 'auto', marginTop: '60px' }}>
      <form onSubmit={handleSubmit}>
        <Typography 
          variant="h1" 
          sx={{ fontSize: {xs: '25px', md: '35px', marginBottom: '20px' }}}
        >
          Contact Form
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <TextField
            // error
            label="Name"
            defaultValue=""
            variant="standard"
            type="text"
            onChange={event => setName(event.target.value)}
            sx={{ marginRight: '20px', width: '100%' }}
          />
          <TextField
            // error
            label="Email"
            defaultValue=""
            variant="standard"
            type="text"
            onChange={event => setEmail(event.target.value)}
            sx={{ width: '100%' }}
          />
        </Box>
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="standard"
          onChange={event => setMessage(event.target.value)}
          sx={{ width: '100%', marginTop: '20px' }}
        />
        <Button 
          variant="outlined" 
          type="submit"
          sx={{ marginTop: '20px' }}
        >
          Submit
        </Button>
        <p>{successMessage}</p>
      </form>
    </Box>
  )
}