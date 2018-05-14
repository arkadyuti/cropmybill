/**
 *
 * GlobalHeader
 *
 */

import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }
  handleChange = (event, index, value) => this.setState({ value });

  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className="main-container bg_blue global-header container-fluid">
        <div className="row">
          <div className="col-md-2">
            <a href="#home" className="header-logo-anchor">
              <img src="http://via.placeholder.com/350x150" alt="Header Logo" />
            </a>
          </div>
          <div className="col-md-8">
            <ul className="header-links-wrapper">
              <li>One</li>
              <li>Two</li>
              <li>
                <DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="Never" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                {/* <span>Three</span>
                <ul className="header-link-dropdown">
                  <li>DD-1</li>
                  <li>DD-2</li>
                </ul> */}
              </li>
            </ul>
          </div>
        </div>
        {/* <RaisedButton label="material-ui" /> */}
      </header>
    );
  }
}

GlobalHeader.propTypes = {};

export default GlobalHeader;
