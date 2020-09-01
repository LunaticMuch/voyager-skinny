import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import Menu from './components/menu'
import { defaultPreset } from './components/schemas';

class VoyagerUI extends React.Component {

  state = {introspection: defaultPreset.source}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Voyager introspection={this.state.introspection}>
      <Voyager.PanelHeader>
        <div className="voyager-panel">
          <Menu />
        </div>
      </Voyager.PanelHeader>
    </Voyager>
    )
  }
}

ReactDOM.render(<VoyagerUI/>, document.getElementById('voyager'));
