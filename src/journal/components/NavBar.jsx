import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'
import { MenuOutlined, LoginOutlined } from "@mui/icons-material";


export const NavBar = ({drawerWidth}) => {
  return (
    <AppBar 
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)`},
            ml: { sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <IconButton 
                color='inherit'
                aria-label='menu-button'
                role="button"
                edge="start"
                sx={{
                    mr: 2, display: { sm:'none'}
                }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>
                    JournalApp
                </Typography>
                <IconButton
                    sx={{':hover': { color: 'error.main', opacity: 0.7 }}}
                >
                    <LoginOutlined color='error' />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
