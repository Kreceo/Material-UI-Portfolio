import { Typography, Box, TextField, Button} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { useState } from "react";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    
    // setName(e.target.value);

    formData.append("access_key", "011d0a10-8def-4457-814d-fac6fb718fa6");
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
          Let's connect
        </Typography>
        <Typography>Drop me a message if you have any questions, or want to chat!</Typography>
        <Box 
          sx={{ display: 'flex' }}
          mt={3}
        >
          <TextField
            // error
            label="Name"
            defaultValue=""
            variant="outlined"
            type="text"
            onChange={event => setName(event.target.value)}
            sx={{ marginRight: '20px' }}
            fullWidth
          />
          <TextField
            // error
            label="Email"
            defaultValue=""
            variant="outlined"
            type="text"
            onChange={event => setEmail(event.target.value)}
            fullWidth
          />
        </Box>
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          onChange={event => setMessage(event.target.value)}
          sx={{ marginTop: '20px' }}
        />
        <Button 
          variant="outlined" 
          type="submit"
          sx={{ marginTop: '20px' }}
        >
          Submit
        </Button>
        <Typography mt={2}>{successMessage}</Typography>
      </form>
      <Typography 
        variant="h2" 
        sx={{ fontSize: {xs: '25px', md: '35px'}}}
        mb={2}
        mt={6}
      >
        Catch me on social media
      </Typography>
      <Typography>Follow me for all the latest updates too</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Link href="https://www.facebook.com/darrell.g.lane/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon 
            sx={{width: '125px', height: '125px', marginRight: '20px'}}
          />
        </Link>
        <Link href="https://twitter.com/Djlane91" target="_blank" rel="noopener noreferrer">
          <TwitterIcon 
            sx={{width: '125px', height: '125px', marginRight: '20px'}}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/kreceo/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon
            sx={{width: '125px', height: '125px', marginRight: '20px'}}
          />
        </Link>
        <Link href="https://github.com/Kreceo" target="_blank" rel="noopener noreferrer">
          <GitHubIcon 
            sx={{width: '125px', height: '125px'}}
          />
        </Link>
      </Box>
    </Box>
  )
}