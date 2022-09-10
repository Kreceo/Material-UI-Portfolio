import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';

export default function ImageGrid() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <ImageList 
        sx={{ maxWidth: 1320, height: 1, marginTop: '60px'}} 
        cols={isMd ? 3 : isSm ? 2 : 1} 
        gap={20}
      >
        {itemData.map((item) => (
          <a href="/single-page">
          <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`} 
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                width={380}
                height={300}
                loading="lazy"
              />
      
            <ImageListItemBar
              title={item.title}
              subtitle={item.category}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          </a>
        ))}
      </ImageList>
      <Box
        sx={{display: 'flex', justifyContent: 'center', marginTop: 4}}  
      >
        <Button variant="contained">See full portfolio</Button>
      </Box>
    </>
  );
}

const itemData = [
  {
    img: 'https://kreceo.sfo2.cdn.digitaloceanspaces.com/Portfolio/chat-app636.png',
    title: 'Firebase / React Chat App',
    category: 'App / Website',
  },
  {
    img: 'https://kreceo.sfo2.cdn.digitaloceanspaces.com/Portfolio/lighthouse-portfolio636.png',
    title: 'Portfolio - 100% Lighthouse Score',
    category: 'Website',
  },
  {
    img: 'https://kreceo.sfo2.cdn.digitaloceanspaces.com/Portfolio/froogle636.png',
    title: 'Google Clone',
    category: 'Website / PHP',
  },
  {
    img: 'https://kreceo.sfo2.cdn.digitaloceanspaces.com/Portfolio/Drumkit636.png',
    title: 'Javascript Drum Kit',
    category: 'Javascript',
  },
  {
    img: 'https://kreceo.sfo2.cdn.digitaloceanspaces.com/Portfolio/git-profiler.png',
    title: 'Git Profiler',
    category: 'Javascript / App',
  },
  {
    img: 'https://kreceo.sfo2.cdn.digitaloceanspaces.com/Portfolio/chat-app636.png',
    title: 'Firebase / React Chat App',
    category: 'App / Website',
  },
];
