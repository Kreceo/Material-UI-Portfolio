import Navbar from "./Navbar"
import { Container, Box } from '@mui/system';
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Container maxWidth="xl" sx={{ height: '100vh', overflow: 'scroll' }}>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3 }}
          >
            {children}
          </Box>
          <Footer />
        </Container>
      </Box>
    </>
  )
}