import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import Menu from './components/menu'

function schemaLoader() {
  return import('./components/schemas/yelp_introspection.json')
}

class VoyagerUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Voyager introspection={this.introspectionProvider} displayOptions={{skipRelay: false, showLeafFields: true}}/>
      <Voyager introspection={schemaLoader}>
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
