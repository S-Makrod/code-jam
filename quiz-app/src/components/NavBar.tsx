import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '75px' }}>
      <AppBar position="fixed" sx={{backgroundColor: '#fff', color: "#000"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fishermen's Quiz
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar