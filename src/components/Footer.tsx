import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function Footer() {
    return (
        <>
            <Box sx={{width: 1, textAlign: 'center', display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}, marginTop: '120px' }}>
                <Box mb={2}>
                    <Typography>© Copyright Darrell Lane. All Rights Reserved</Typography>
                </Box>
                <Box>
                    <Link href="https://www.facebook.com/darrell.g.lane/" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon 
                            sx={{width: '30px', height: '30px', marginRight: '20px'}}
                        />
                    </Link>
                    <Link href="https://twitter.com/Djlane91" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon 
                        sx={{width: '30px', height: '30px', marginRight: '20px'}}
                        
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kreceo/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon
                            sx={{width: '30px', height: '30px', marginRight: '20px'}}
                        />
                    </Link>
                    <Link href="https://github.com/Kreceo" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon 
                            sx={{width: '30px', height: '30px'}}
                        />
                    </Link>
                </Box>
            </Box>
        </>
    )
}