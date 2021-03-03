import React, { Component} from "react";
import BasicTable from "../../components/basicTable/basicTable";
import DropdownComponent from "../../components/dropdownComponent/dropdownComponent";
import { withRouter } from "react-router-dom";
import { getVehicles } from "../../api/vehicles";
import {CAR_TABLE_TITLES, FILTER, VEHICLES_TITLE} from "../../utils/constants";

export class ShowVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAvailableVehciles: true,
      vehicles: []
    };
  }
  
  async componentDidMount() {
    const { showAvailableVehciles } = this.state;
    const vehicleData = await getVehicles(showAvailableVehciles);
    this.setState({vehicles: vehicleData});
  }

  async componentDidUpdate(prevProps, prevState) {
    const { showAvailableVehciles } = this.state;

    if(prevState.showAvailableVehciles && 
      showAvailableVehciles !== prevState.showAvailableVehciles) {
      const vehicleData = await getVehicles(showAvailableVehciles);
      this.setState({vehicles: vehicleData});
    }
  }

  filterTable = (event) => {
    this.setState({showAvailableVehciles: event.value});
  };

  render() {
    const {vehicles} = this.state;

    return (
      <div className="vehicleScreen">
      <h2 className="vehicleScreen--title">{VEHICLES_TITLE}</h2>
      <div className="vehicleScreen--filterVehicles">
        <div className="filterLabel">{FILTER}:</div>
        <DropdownComponent filterTable={this.filterTable} />
      </div>
      <div className="vehicleScreen--list">
        <BasicTable headers={CAR_TABLE_TITLES} vehicles={vehicles}/>
      </div>
    </div>
    );
  }
}

export default withRouter(ShowVehicles);