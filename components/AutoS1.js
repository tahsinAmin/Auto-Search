import React from "react";
import axios from "axios";
import data from "./data/flights.json";

export default class AutoS1 extends React.Component {
  state = {
    fromCity: "",
    toCity: "",
    departDate: "",
    tempDay: [],
    weatherFound: false,
    countryName: "",
    allFlights: [],
    flightsFound: false,
  };
  render() {
    const {
      fromCity,
      toCity,
      weatherFound,
      tempDay,
      countryName,
      flightsFound,
      allFlights,
    } = this.state;
    const searchFlight = () => {
      axios
        .get(
          `https://api.sharetrip.net/api/v1/flight/search/airport?name=${toCity}`
        )
        .then((res) => {
          const getCountryName = res.data.response[0].name.split(",")[0];
          this.setState({ countryName: getCountryName }, () => {
            this.setState(
              {
                allFlights:
                  data[0]["2022-01-10"][this.state.countryName][toCity].canada
                    .vancouvar,
                flightsFound: true,
              },
              () => {
                console.log(
                  toCity,
                  this.state.countryName,
                  this.state.allFlights
                );
                console.log(
                  data[0]["2022-01-10"][this.state.countryName][toCity].canada
                    .vancouvar[0].duration
                );
              }
            );
          });
        });

      axios
        .get(
          `https://api.weatherapi.com/v1/history.json?key=e6a73467a3e94aa184c122435212812&q=canada&q=${toCity}&dt=2021.12.30&aqi=yes`
        )
        .then((res) => {
          const hour = res.data.forecast.forecastday[0].hour;

          let morning = (
            (hour[5].temp_c +
              hour[6].temp_c +
              hour[7].temp_c +
              hour[8].temp_c +
              hour[9].temp_c +
              hour[10].temp_c +
              hour[11].temp_c) /
            7
          ).toFixed(1);

          let afternoon = (
            (hour[12].temp_c +
              hour[13].temp_c +
              hour[14].temp_c +
              hour[15].temp_c +
              hour[16].temp_c) /
            5
          ).toFixed(1);

          let evening = (
            (hour[17].temp_c +
              hour[18].temp_c +
              hour[19].temp_c +
              hour[20].temp_c) /
            4
          ).toFixed(1);

          let overnight = (
            (hour[21].temp_c +
              hour[22].temp_c +
              hour[23].temp_c +
              hour[0].temp_c +
              hour[1].temp_c +
              hour[2].temp_c +
              hour[3].temp_c +
              hour[4].temp_c) /
            8
          ).toFixed(1);
          const list2 = [];
          list2.push(morning, afternoon, evening, overnight);
          this.setState({ tempDay: list2, weatherFound: true });
        });
    };

    return (
      <div>
        <form onSubmit={() => searchFlight()}>
          <input
            type="text"
            value={fromCity}
            name="fCity"
            onChange={(e) => this.setState({ fromCity: e.target.value })}
            placeholder="fromCity..."
            className="border-2 border-gray-600 p-2 rounded-md"
          />
          <input
            type="text"
            value={toCity}
            name="toCity"
            onChange={(e) => this.setState({ toCity: e.target.value })}
            placeholder="toCity..."
            className="border-2 border-gray-600 p-2 rounded-md"
          />
          <input
            type="date"
            onChange={(event) =>
              this.setState({ departDate: event.target.value })
            }
            placeholder="departDate..."
            className="border-2 border-gray-600 p-2 rounded-md"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>

        {weatherFound && (
          <section className="weather">
            <h1 className="text-3xl font-bold">
              Select departing flights
              {/* Weather forecast today in {toCity}, {countryName} */}
            </h1>
            <div>
              {fromCity} to {toCity}
            </div>
            <div
              className="
            display-weather
            my-5
            rounded-lg
            h-[245px]
            grid grid-cols-4
            gap-4
            p-4
          "
            >
              <div
                className="
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            "
              >
                <div className="icon-text flex flex-col items-center">
                  <div className="icon">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-semibold">Morning</div>
                </div>
                <div className="temp text-[100px] font-light">
                  {tempDay[0]}°
                </div>
              </div>
              <div
                className="
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            "
              >
                <div className="icon-text flex flex-col items-center">
                  <div className="icon">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-semibold">Afternoon</div>
                </div>
                <div className="temp text-[100px] font-light">
                  {tempDay[1]}°
                </div>
              </div>
              <div
                className="
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            "
              >
                <div className="icon-text flex flex-col items-center">
                  <div className="icon">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-semibold">Evening</div>
                </div>
                <div className="temp text-[100px] font-light">
                  {tempDay[2]}°
                </div>
              </div>
              <div
                className="
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            "
              >
                <div className="icon-text flex flex-col items-center">
                  <div className="icon">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-semibold">Overnight</div>
                </div>
                <div className="temp text-[100px] font-light">
                  {tempDay[3]}°
                </div>
              </div>
            </div>
          </section>
        )}

        {flightsFound && (
          <section>
            {allFlights.map((f) => (
              <p>{f["duration"]}</p>
            ))}
          </section>
        )}
      </div>
    );
  }
}
