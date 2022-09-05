import { Box, Typography, List, ListItem, Grid, Button } from "@mui/material"

export default function Single() {
  return (
    <Box mt={4}>
      <Typography variant="h1" sx={{fontSize: {xs: '25px', md: '35px'}}}>
        Firebase / React Chat App
      </Typography>
      <Typography mt={1}>
        A chat platform, similar to google chats, built for solo or group convos.
      </Typography>
      
      <Grid container spacing={6} mt={1}>
        <Grid item xs={12} md={6}>
          <img 
            src="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Portfolio/chat-app636.png"
            style={{
              'width': '100%', 
              borderRadius: '5px',
              boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" mb={1}>Description</Typography>
          <Typography mb={3}>App / Website</Typography>
          <Typography>The app has a login / signup screen, which requires you to create an account using the form, or with your social accounts. You can also log back in if you already have an account. All the data is stored in firestore database.<br /><br />

          Once logged in, your presented with a chat screen, which you can begin chatting. It will also show other users on the left who have previously signed up.<br /><br />

          There is still some more work to be done on the app, but currently all messages are stored into a realtime database.</Typography>
          <Typography variant="h4" mb={1} mt={4}>Built with:</Typography>
          <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>Firebase</ListItem>
            <ListItem sx={{ display: 'list-item' }}>React</ListItem>
            <ListItem sx={{ display: 'list-item' }}>JSX</ListItem>
            <ListItem sx={{ display: 'list-item' }}>SASS</ListItem>
          </List>
          <Button variant="contained">See Github Repo</Button>
        </Grid>
      </Grid>
    </Box>
  )
}