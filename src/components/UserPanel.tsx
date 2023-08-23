import React from "react";
import { Menu, MenuItem, styled, Typography } from "@mui/material";

const ProfilePanel = styled(Menu)`
  ${({ theme }) => theme.breakpoints.up("xs")} {
    margin-top: 40px;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-top: 48px;
  }
  & .MuiPaper-root {
    min-width: 200px;
  }
`;

const UserPanel = ({ settings, handleCloseUserMenu, anchorElUser }: any) => {
  return (
    <React.Fragment>
      <ProfilePanel
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={() => {
          handleCloseUserMenu();
        }}
      >
        {settings.map((setting: any) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </ProfilePanel>
    </React.Fragment>
  );
};

export default UserPanel;
