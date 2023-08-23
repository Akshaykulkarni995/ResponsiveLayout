import React from "react";
import { Menu, MenuItem, styled, Typography } from "@mui/material";

const LeftPanel = styled(Menu)`
  ${({ theme }) => theme.breakpoints.up("xs")} {
    margin-top: 0.5rem;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-top: 0.75rem;
  }
  ${({ theme }) => theme.breakpoints.up("xs")} {
    display: block;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
  & .MuiPaper-root {
    min-width: 200px;
  }
`;

const LeftNav = ({ pages, handleCloseNavMenu, anchorElNav }: any) => {
  return (
    <React.Fragment>
      <LeftPanel
        className="testandtry"
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={() => {
          handleCloseNavMenu();
        }}
      >
        {pages.map((page: any) => (
          <MenuItem
            key={page}
            onClick={() => {
              handleCloseNavMenu();
            }}
          >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </LeftPanel>
    </React.Fragment>
  );
};

export default LeftNav;
