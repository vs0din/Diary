import React, {Component} from 'react';
import './Sidebar.css';


class Sidebar extends Component {
  state = {}

  render() {
    return (
        <nav id="Sidebar">
          <div className="Sidebar__header">
            <h3 className="Sidebar__logotext--big">{this.props.logotextBig}</h3>
            <span className="Sidebar__logotext--small">{this.props.logotextSmall}</span>
          </div>
        </nav>
    )
  }

}

export default Sidebar
