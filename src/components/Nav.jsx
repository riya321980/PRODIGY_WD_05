import React from "react";
import { AppBar, Tab, Tabs, Toolbar, TextField } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';

const Nav = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
            <CloudIcon/>
            <Tabs>
                <Tab label="W E A T H E R" sx={{color: 'white'}} />
            </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Nav;
