import React from "react";
import axios from "axios";
export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.weatherapi.com/v1/history.json?key=e6a73467a3e94aa184c122435212812&q=canada&q=vancouvar&dt=2021.12.30&aqi=yes`
      )
      .then((res) => {
        console.log(res.data.forecast.forecastday);
        const persons = res.data.forecast.forecastday[0].hour;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>{person.time_epoch}</li>
        ))}
      </ul>
    );
  }
}
