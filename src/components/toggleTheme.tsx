import Button from '@mui/material/Button';

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}
  
export default function ChangeTheme(props: HomeProps) {
    const check = console.log('hi');

    return (
        <>
            <Button
                onClick={props.toggleTheme}  
                color={'info'}
            >
                Toggle Theme
            </Button>
        </>
    )
}