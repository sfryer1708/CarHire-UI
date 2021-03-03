import React, { Component} from "react";
import Select from 'react-select'
import { withRouter } from "react-router-dom";

export class DropdownComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: true
    };
  }

  render() {

    const { filter } = this.state;
    const { filterTable } = this.props;

    const options = [
      { value: 'true', label: 'Available Cars' },
      { value: 'false', label: 'All Cars' } 
    ];

    return (
      <div>
        <Select
            id="demo-simple-select-placeholder-label"
            value={filter}
            onChange={filterTable}
            options={options}
            onSelectResetsInput={false} 
            onBlurResetsInput={false}
          />
      </div>
    );
  }
}

export default withRouter(DropdownComponent);