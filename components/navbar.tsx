import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [
  { title: "Home", link: "" },
  { title: "La vie du syndicat", link: "la-vie-du-syndicat" },
  { title: "Le rucher école", link: "le-rucher-ecole" },
  { title: "Actualités", link: "actualites" },
  { title: "Utile", link: "utile" },
  { title: "Petites annonces", link: "petites-annonces" },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "60vw" }}
    >
      <Typography variant='h5' sx={{ my: 2 }}>
        Le syndicat apicole artésien
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={"/" + item.link}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position='static'
        color='transparent'
        component='nav'
        sx={{
          color: "#fff",
          border: 0,
        }}
        elevation={0}
      >
        <Toolbar sx={{ mt: { sm: 1, lg: 4 }, mx: { sm: 1, lg: 8 } }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
            <Link href='/'>
              <Typography variant='h5' fontWeight={550}>
                Accueil
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems
              .filter((item) => item.title !== "Home")
              .map((item) => (
                <Box sx={{ mx: { xs: 0.5, sm: 1, lg: 2 } }} key={item.title}>
                  <Link href={"/" + item.link}>
                    <Typography
                      variant='h5'
                      fontWeight={550}
                      sx={{
                        fontSize: { sm: "1rem", md: "1.4rem" },
                        letterSpacing: "-0.025em",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
