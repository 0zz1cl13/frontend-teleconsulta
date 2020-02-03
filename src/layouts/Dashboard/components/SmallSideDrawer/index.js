import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
 //import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

import './style.css';

export default function SmallSideDrawer() {

  return (
    <Paper className="small-side-drawer">
      <MenuList>
        <MenuItem>
          <ListItemIcon style={{position: 'center'}}>
            <SendIcon fontSize="small" />
          </ListItemIcon>

        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>

        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>

        </MenuItem>
      </MenuList>
    </Paper>
  );
}
