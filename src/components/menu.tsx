import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

// Import list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Import schema presets
import {PRESETS} from './schemas'


export default class Menu extends React.Component {

    constructor(props) {
        super(props);
      }

    state: any = { left: false }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };

    list = () => (
        <div >
          <List>
            {PRESETS.map(item => (
              <ListItem button key={item.schema} onClick={this.toggleDrawer('left', false)}>
                <ListItemText primary={item.schema} secondary={item.version}/>
              </ListItem>
            ))}
          </List>
        </div>
      );

    render() {
        return (
            <div>
                <Button color="primary" variant="contained" onClick={this.toggleDrawer('left', true)}>Open Left</Button>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} >{this.list()}</Drawer>
            </div>
        );
    }
}
