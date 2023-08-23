import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import LeftNav from "./LeftNav";
import MenuIcon from "@mui/icons-material/Menu";
import UserPanel from "./UserPanel";
import UserProfile from "../common/UserProfile";

const pages = ["ALL ABOUT ROCKS", "OUR ROCK PROCESS", "MEET OUR ROCKS"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Appbar = styled(AppBar)`
  background-color: #d9d9d9;
  box-shadow: none;
  color: #000000;
`;

const MenuContainer = styled(Box)`
  height: 100%;
  width: 48px;
`;

const MenuIconContainer = styled(Box)`
  align-items: center;
  justify-content: center;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up("xs")} {
    display: flex;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`;

const NavContainer = styled(Box)`
  flex-grow: 1;
  width: calc(100% - 96px);
`;

const NavLinkContainer = styled(Box)`
  align-items: center;
  display: flex;
  width: 100%;
`;
const NavButtonContainer = styled(Box)`
  justify-content: space-evenly;
  width: calc(100% - 200px);
  ${({ theme }) => theme.breakpoints.up("xs")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
  }
`;

const StyledButton = styled(Button)`
  color: #000000;
`;

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Appbar id="app_bar" position="fixed">
      <Toolbar>
        <MenuContainer>
          <MenuIconContainer>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <LeftNav
              pages={pages}
              handleCloseNavMenu={handleCloseNavMenu}
              anchorElNav={anchorElNav}
            />
          </MenuIconContainer>
        </MenuContainer>
        <NavContainer>
          <NavLinkContainer>
            <Typography variant="h6" component="div" fontWeight="bold">
              WE KNOW ROCKS
            </Typography>
            <NavButtonContainer>
              {pages.map((item) => (
                <StyledButton key={item}>{item}</StyledButton>
              ))}
            </NavButtonContainer>
          </NavLinkContainer>
        </NavContainer>
        <Tooltip title="Profile">
          <IconButton onClick={handleOpenUserMenu}>
            <UserProfile userName="Dummy User" />
          </IconButton>
        </Tooltip>

        <UserPanel
          anchorElUser={anchorElUser}
          handleCloseUserMenu={handleCloseUserMenu}
          settings={settings}
        />
      </Toolbar>
    </Appbar>
  );
};

export default Header;
