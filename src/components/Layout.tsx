import Navbar from "./Navbar"
import { Container } from '@mui/system';
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
    return (
        <Navbar>
            <Container maxWidth="lg">
                {children}
                <Footer />
            </Container>
        </Navbar>
    )
}