import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { NavbarMessages } from './Navbar.utils'
import EngineeringIcon from '@mui/icons-material/Engineering';
export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display='flex' alignItems='center' gap={2}>
                    <EngineeringIcon fontSize='large' sx={{ mb: 0.5 }} /><Typography variant='h4' component='h1' letterSpacing={2}>{NavbarMessages.Title}</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
