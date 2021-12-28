import { 
    Box, 
    Typography, 
    Button,
} from '@mui/material';

export interface TestComponentProps {
    title: string;
    content: JSX.Element;
    onClick: () => void;
}

export function TestComponent({
    title,
    content,
    onClick,
}:TestComponentProps) {
    return(
        <Box sx={{
            width: 420,
            display: 'flex',
            flexDirection: { xs: 'column' },
            alignItems: 'center',
            borderRadius: 1,
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 4,
            paddingRight: 4,
            boxShadow: 1,
            textAlign: 'center',
        }}>
            <Typography variant='h1' fontSize={26}>{title}</Typography>
            {content}
            <Button variant="contained" onClick={onClick}>Click me</Button>
        </Box>
    );
}