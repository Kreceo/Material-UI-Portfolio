import ImageGrid from '../src/components/ImageGrid'
import { Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box mt={6}>
        <Typography 
          variant="h1" 
          sx={{fontSize: {xs: '25px', md: '35px'}}}
        >
          Welcome to my portfolio
        </Typography>
        <Typography mt={1}>
          Browse around and see what you find
        </Typography>
      </Box>

      {/* Portfolio items */}
      <ImageGrid />
      
    </>
  )
}