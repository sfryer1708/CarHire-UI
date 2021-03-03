import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "./hire-component.css";
import { getHireCost } from "../../api/hire";
import moment from "moment";
import {
  WEBSERVICE_DATE_FORMAT,
  HIRE_DETAILS_TITLE,
  REGISTRATION_NUMBER,
  CATEGORY,
  MAKE,
  MODEL,
  FUEL,
  HIRED,
  YES,
  NO,
  START_DATE,
  END_DATE,
  YOUR_HIRE_PRICE_IS,
  CALCULATE_HIRE_COST,
  BACK
} from "../../utils/constants";

import "react-datepicker/dist/react-datepicker.css";

export class ShowVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
      endDate: undefined,
      hirePrice: undefined,
    };
  }

  calculateHirePirce = async () => {
    const { startDate, endDate } = this.state;
    const { registration } = this.props.location.state.vehicle;
    const format = WEBSERVICE_DATE_FORMAT;
    const dateStart = moment.utc(startDate);
    const dateEnd = moment.utc(endDate);
    const startDateFormatted = moment(dateStart).format(format);
    const endDateFormatted = moment(dateEnd).format(format);

    const hirePrice = await getHireCost(
      registration,
      startDateFormatted,
      endDateFormatted
    );

    this.setState({ hirePrice: hirePrice.rate });
  };

  handleDateChangeRaw = (e) => {
    e.preventDefault();
  };

  back = (e) => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { startDate, endDate, hirePrice } = this.state;
    const { vehicle } = this.props.location.state;

    return (
      <div className="hireScreen">
        <h2 className="hireScreen--title">{HIRE_DETAILS_TITLE}</h2>
        <div className="vehicleDetails">
          <div>{REGISTRATION_NUMBER}:</div>
          <div className="capitalise">{vehicle.registration}</div>
          <div>{CATEGORY}:</div>
          <div className="capitalise">{vehicle.category}</div>
          <div>{MAKE}:</div>
          <div className="capitalise">{vehicle.make}</div>
          <div>{MODEL}:</div>
          <div className="capitalise">{vehicle.model}</div>
          <div>{FUEL}:</div>
          <div className="capitalise">{vehicle.fuelType}</div>
          <div>{HIRED}:</div>
          <div className="capitalise">{vehicle.hired ? YES : NO}</div>
        </div>
        <div className="hireDateStarts">
          <div>{START_DATE}:</div>
          <DatePicker
            wrapperClassName="react-datepicker-wrapper"
            selected={startDate}
            onChange={(date) => this.setState({ startDate: date })}
            onChangeRaw={this.handleDateChangeRaw}
            dateFormat="dd/MM/yyyy"
            filterDate={(date) => {
              return moment() < date - 1;
            }}
          />
        </div>
        <div className="hireDateEnds">
          <div>{END_DATE}:</div>
          <DatePicker
            wrapperClassName="react-datepicker-wrapper"
            selected={endDate}
            onChange={(date) => this.setState({ endDate: date })}
            onChangeRaw={this.handleDateChangeRaw}
            dateFormat="dd/MM/yyyy"
            filterDate={(date) => {
              return moment() < date - 1;
            }}
          />
        </div>
        <div className="hirePrice">
          <div className="hirePrice--label">{YOUR_HIRE_PRICE_IS}:</div>
          <div className="hirePrice--value">{hirePrice ? `£${hirePrice}` : ''}</div>
        </div>
        <div>
          <button onClick={this.calculateHirePirce}>{CALCULATE_HIRE_COST}</button>
          <button onClick={this.back}>{BACK}</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowVehicles);
