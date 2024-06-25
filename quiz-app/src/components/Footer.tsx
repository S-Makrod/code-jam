import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Footer = () => {
    return (
        <Box sx={{width: '100%', paddingTop: '50px'}}>
            <Container maxWidth='xl' sx={{width: '100%', textAlign: 'center' }}>
                <Typography variant='body1'>&copy; 2024 Fishermen. All rights reserved</Typography>
            </Container>
        </Box>
    )
}

export default Footer