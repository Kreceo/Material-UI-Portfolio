import { Typography, Box } from "@mui/material";
import ImageGrid from "../src/components/ImageGrid";

export default function Portfolio() {
  return (
    <>
      <Box mt={6}>
        <Typography variant="h1" sx={{fontSize: {xs: '25px', md: '35px'}}}>
          Portfolio
        </Typography>
        {/* Portfolio items */}
        <ImageGrid />
      </Box>
    </>
  )
}