import { Typography, Box, Button, Grid, LinearProgress } from "@mui/material";

export default function About() {
  return (
    <>
      <Box mt={6}>
        <Typography 
          variant="h1" 
          sx={{fontSize: {xs: '25px', md: '35px'}}}
        >
          Hey, I'm Darrell
        </Typography>
        <Typography mt={2}>I'm a Senior Software Engineer with over 4 years commercial experience.</Typography>
        <Grid container spacing={6} mt={1} mb={6}>
          <Grid item xs={12} md={6}>
            <img 
              src="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Portfolio/Profile.jpeg"
              style={{
                'width': '100%', 
                borderRadius: '5px',
                boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" mb={1}>Skills</Typography>
            <Box>
              <Typography mb={1} mt={4}><strong>WordPress</strong> 90%</Typography>
              <LinearProgress
                variant="determinate"
                value={90}
              />
            </Box>
            <Box>
              <Typography mb={1} mt={4}><strong>PHP</strong> 70%</Typography>
              <LinearProgress
                variant="determinate"
                value={70}
              />
            </Box>
            <Box>
              <Typography mb={1} mt={4}><strong>HTML5 / CSS3</strong> 90%</Typography>
              <LinearProgress
                variant="determinate"
                value={90}
              />
            </Box>
            <Box>
              <Typography mb={1} mt={4}><strong>Javascript</strong> 70%</Typography>
              <LinearProgress
                variant="determinate"
                value={70}
              />
            </Box>
            <Box>
              <Typography mb={1} mt={4}><strong>React</strong> 50%</Typography>
              <LinearProgress
                variant="determinate"
                value={50}
              />
            </Box>
            <Box>
              <Typography mb={1} mt={4}><strong>AWS</strong> 50%</Typography>
              <LinearProgress
                variant="determinate"
                value={50}
              />
            </Box>
            <Box>
              <Typography mb={1} mt={4}><strong>JamStack</strong> 70%</Typography>
              <LinearProgress
                variant="determinate"
                value={70}
              />
            </Box>
          </Grid>
        </Grid>
        <Typography>I worked for 3 years in the fitness industry before going down the developer career path, after learning how much I thoroughly enjoyed coding.</Typography>
        <Typography>I'm always seeking out a new challenge / obstacle to overcome, and this goes hand in hand with my personal development as a Web Developer.</Typography>
        <Typography>My drive to be better, pushes me to learn new frameworks, grasp new languages, complete new projects, etc.</Typography>
        <Typography>This means I'm always learning something new, which overall, continues adding to the list of why I love being a web developer</Typography>
        <Button 
          variant="outlined" 
          type="submit"
          sx={{ marginTop: '20px' }}
        >
          Let's connect
        </Button>
      </Box>
      
    </>
  )
}