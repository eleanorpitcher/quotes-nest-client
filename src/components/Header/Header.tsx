import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router';

interface NavbarItemProps {
  name: string;
  path: string;
  icon?: string;
}

const navbarItems: NavbarItemProps[] = [
  {
    name: 'Your quotes',
    path: '/quotes'
  }
]

function Header() {

  return (
    <AppBar sx={{ flexGrow: 1, position: 'fixed', top: 0, left: 0, width: '100%' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between"}}>
          <Typography
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            QuotesNest
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navbarItems.map((item) => (
              <li>
              <NavLink to={item.path}>
                <i color='white'>{item.name}</i>
              </NavLink>
              </li>
              
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
