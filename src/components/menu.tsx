import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

// Import list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Import schema presets
import { PRESETS } from './schemas'

export default class Menu extends React.Component {

    state = {
      left: false
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };

    handleChange = (item)  => {
      console.log(item.source)
      //console.log(...this.state.current)
      this.setState({
        introspection: item.source
      })
    }

    list = () => (
        <div >
          <List>
            {PRESETS.map(item => (
              <ListItem button key={item.name} onClick={this.toggleDrawer('left', false)}>
                <ListItemText
                  primary={item.name}
                  secondary={item.version}
                  onClick={() => console.log(this.state)}
                />
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
