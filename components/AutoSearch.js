import { useState } from "react";
import axios from "axios";
import { FaPlaneDeparture, FaPlane } from "react-icons/fa";
import data from "./data/flights.json";

function AutoSearch() {
  const [allFlights, setAllFlights] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityNameO, setCityNameO] = useState("");
  const [cityNameT, setCityNameT] = useState("");
  const [cityNO, setCityNO] = useState("");
  const [cityNT, setCityNT] = useState("");
  const [countryNameO, setCountryNameO] = useState("");
  const [countryNameT, setCountryNameT] = useState("");
  const [startDate, setStartDate] = useState("");
  const [flightsFound, setFlightsFound] = useState(false);
  const [suggestionsO, setSuggestionsO] = useState([]);
  const [suggestionsT, setSuggestionsT] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [weatherFound, setWeatherFound] = useState(false);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const loadCities = async (cityName) => {
    const response = await axios.get(
      `https://api.sharetrip.net/api/v1/flight/search/airport?name=${cityName}`
    );
    setCities(response.data.response);
    // console.log(response.data.response);
  };

  const onSuggestHandlerO = (selectedCity, selectedName) => {
    let textMerged = `${selectedCity} , ${selectedName}`;
    setCityNameO(textMerged);
    setSuggestionsO([]);
  };
  const onChangeHandlerO = (cityName) => {
    let matches = [];
    loadCities(cityName);
    if (cityName.length > 3) {
      matches = cities.filter((usr) => {
        const regex = new RegExp(`${cityName}`, "gi");
        return usr.city.match(regex);
      });
    }
    setSuggestionsO(matches);
    setCityNameO(cityName);
  };
  const onSuggestHandlerT = (selectedCity, selectedName) => {
    let textMerged = `${selectedCity}, ${selectedName}`;
    setCityNameT(textMerged);
    setSuggestionsT([]);
  };
  const onChangeHandlerT = (cityName) => {
    if (!cityName) {
      setWeatherFound(false);
    }
    let matches = [];
    loadCities(cityName);
    if (cityName.length > 3) {
      matches = cities.filter((usr) => {
        const regex = new RegExp(`${cityName}`, "gi");
        return usr.city.match(regex);
      });
    }
    setSuggestionsT(matches);
    setCityNameT(cityName);
  };

  const onChangeHandlerDate = (inpDate) => {
    setStartDate(inpDate);
    console.log(inpDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountryNameT(
      cityNameT
        .split(",")[1]
        .replace(/^\s+|\s+$/g, "")
        .toLocaleLowerCase()
    );
    setCountryNameO(
      cityNameO
        .split(",")[1]
        .replace(/^\s+|\s+$/g, "")
        .toLocaleLowerCase()
    );
    setCityNT(
      cityNameT
        .split(",")[0]
        .replace(/^\s+|\s+$/g, "")
        .toLocaleLowerCase()
    );
    setCityNO(
      cityNameO
        .split(",")[0]
        .replace(/^\s+|\s+$/g, "")
        .toLocaleLowerCase()
    );
    // http://api.weatherapi.com/v1/forecast.json?key=e6a73467a3e94aa184c122435212812&q=toronto&dt=2022.01.20
    // `https://api.weatherapi.com/v1/history.json?key=e6a73467a3e94aa184c122435212812&q=${countryNameT}&q=${cityNT}&dt=2021.12.30&aqi=yes`
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=e6a73467a3e94aa184c122435212812&q=${cityNT}&dt=${startDate}`
      )
      .then((res) => {
        const hour = res.data.forecast.forecastday[0].hour;
        // console.log("+-" + countryNameT + "--" + cityNT + "--+");
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

        setWeatherForecast(list2);
        setWeatherFound(true);
      })
      .then((res) => {
        console.log(countryNameT, cityNT, countryNameO, cityNO);
        setAllFlights(
          data[0]["2022-01-10"][countryNameT][cityNT][countryNameO][cityNO]
        );
        setFlightsFound(true);
      });
  };
  return (
    <div>
      <nav className="bg-blue-900 text-white flex justify-between items-center px-4 py-4">
        <div className="logo">
          <img
            className="max-w-full nav-row-logo"
            loading="lazy"
            src="/img/header_logo.svg"
            alt="rentByOwner"
            width="182"
            height="26"
          />
        </div>

        <div className="others sm:block flex space-x-4">
          <a href="" className="tracking-wider font-regular text-lg">
            Rentals
            <i className="fas fa-chevron-down"></i>
          </a>
          <a href="" className="tracking-wider font-regular text-lg">
            Nearby <i className="fas fa-chevron-down"></i>
          </a>
          <a href="" className="tracking-wider font-regular text-lg">
            Destinations <i className="fas fa-chevron-down"></i>
          </a>
          <button
            className="
            bg-[#00CD92]
            py-2
            px-3
            rounded-lg
            font-regular
            text-white text-lg
          "
          >
            Find a Vacation Rental
          </button>
        </div>
        <svg
          className="block h-6 w-6 sm:hidden"
          xmlns="https:www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4
        6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
      <form className="flex" onSubmit={handleSubmit}>
        <div className="container mx-auto">
          <input
            type="text"
            name="input-search"
            className="border rounded-sm w-full mt-4"
            placeholder="From..."
            onChange={(e) => onChangeHandlerO(e.target.value)}
            value={cityNameO}
            onBlur={() => {
              setTimeout(() => {
                setSuggestionsO([]);
              }, 100);
            }}
          />
          {suggestionsO &&
            suggestionsO.map(({ city, name }, i) => (
              <div
                className="border w-full cursor-pointer border-b-1 hover:bg-blue-100 border-l-1 border-r-1"
                key={i}
                onClick={() => onSuggestHandlerO(city, name)}
              >
                {city}, {name}
              </div>
            ))}
        </div>
        <div className="container mx-auto">
          <input
            type="text"
            name="input-search-2"
            className="border rounded-sm w-full mt-4"
            placeholder="To...."
            onChange={(e) => onChangeHandlerT(e.target.value)}
            value={cityNameT}
            onBlur={() => {
              setTimeout(() => {
                setSuggestionsT([]);
              }, 100);
            }}
          />
          {suggestionsT &&
            suggestionsT.map(({ city, name }, i) => (
              <div
                className="border w-full cursor-pointer border-b-1 hover:bg-blue-100 border-l-1 border-r-1"
                key={i}
                onClick={() => onSuggestHandlerT(city, name)}
              >
                {city}, {name}
              </div>
            ))}
        </div>
        <div className="container mx-auto">
          <input
            type="date"
            min={disablePastDate()}
            name="input-search-2"
            className="border rounded-sm w-full mt-4"
            placeholder="To...."
            onChange={(e) => onChangeHandlerDate(e.target.value)}
            value={startDate}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
      <div
        className="
        hero
        flex flex-col
        justify-between
        h-[645px]
        p-10
      "
        style={{
          backgroundImage: "url(/img/agadir.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="badge flex justify-end text-white">
          <div
            className="
            badge
            flex
            bg-gray-800
            text-white text-xs
            font-light
            py-1.5
            px-3
            items-center
            space-x-1
            rounded-full
          "
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span className="font-semibold rounded"> Agadir | Morocco</span>
          </div>
        </div>
        <div className="input-form flex justify-left w-1/2">
          <div
            className="
            input
            p-4
            px-5
            field
            bg-white
            rounded-lg
            text-black
            flex flex-col
            space-y-10
          "
          >
            <h1 className="text-4xl font-bold">
              <strike>
                Uncover best flights with RentByOwner
                <sup className="text-sm">TM</sup>
              </strike>
            </h1>
            <div className="grid grid-cols-2 gap-1">
              <input
                type="text"
                placeholder="Going from?"
                className="p-1 border-gray-600 border-b-2 outline-none"
              />
              <input
                type="text"
                placeholder="Going to?"
                className="p-1 border-gray-600 border-b-2 outline-none"
              />
              <input
                type="text"
                placeholder="Depart date?"
                className="p-1 border-gray-600 border-b-2 outline-none"
              />
              <input
                type="text"
                placeholder="Return Date"
                className="p-1 border-gray-600 border-b-2 outline-none"
              />
            </div>
            <div>
              <button
                className="bg-gray-700 text-white font-semibold p-2 rounded-lg hover:scale-105 hover:bg-gray-900
              transform
              transition
              duration-300
              ease-out"
                style={{ fontFamily: "Montserrat" }}
              >
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="container max-w-7xl mx-auto mt-10">
        {weatherFound && (
          <section className="weather">
            <h1 className="text-2xl font-bold">Select departing flights</h1>
            <div className="flex justify-end space-x-8 mt-4 items-center">
              <h2 className="uppercase">
                Weather Forecast of <b>{cityNT}</b>
              </h2>
              {/* <span>
              Wed <b>17 Nov</b>
            </span> */}
            </div>
            <div
              className="
            display-weather
            my-2
            rounded-lg
            h-[200px]
            grid grid-cols-4
            gap-4
            
          "
            >
              <div
                className="
              rounded-lg
              flex
              justify-center
              px-5
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
                <div className="temp text-[62px] font-light">
                  {weatherForecast[0]}°
                </div>
              </div>
              <div
                className="
              rounded-lg
              flex
              justify-center
              px-5
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
                <div className="temp text-[62px] font-light">
                  {weatherForecast[1]}°
                </div>
              </div>
              <div
                className="
              rounded-lg
              flex
              justify-center
              px-5
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
                <div className="temp text-[62px] font-light">
                  {weatherForecast[2]}°
                </div>
              </div>
              <div
                className="
              rounded-lg
              flex
              justify-center
              px-5
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
                <div className="temp text-[62px] font-light">
                  {weatherForecast[3]}°
                </div>
              </div>
            </div>
          </section>
        )}
        {flightsFound && (
          <section className="filter-flights flex mb-20">
            {allFlights.length > 0 && (
              <div className="filter w-4/12 mt-4  border-r-2 mr-4 sticky top-0 pr-4">
                <div className="flex items-center space-x-2">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    ></path>
                  </svg>
                  <h2 className="text-xl font-medium">
                    <strike>Filter by:</strike>
                  </h2>
                </div>
                <div className="mt-6 text-lg">
                  <h3 className="font-medium">Airports</h3>
                  <div className="flex space-x-2 items-center mt-2">
                    <input type="checkbox" id="scales" name="scales" />{" "}
                    <span className="truncate">
                      Vancouver International Airport (YVR)
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center mt-2">
                    <input type="checkbox" id="scales" name="scales" />{" "}
                    <span className="truncate">
                      Vancouver Harbour Water Aerodrome (CXH)
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-lg">
                  <h3 className="font-medium">Airlines</h3>
                  <div className="flex space-x-2 items-center mt-2">
                    <input type="checkbox" id="scales" name="scales" />{" "}
                    <span>Bangladesh Biman</span>
                  </div>
                  <div className="flex space-x-2 items-center mt-2">
                    <input type="checkbox" id="scales" name="scales" />{" "}
                    <span>Qatar Airways</span>
                  </div>
                  <div className="flex space-x-2 items-center mt-2">
                    <input type="checkbox" id="scales" name="scales" />{" "}
                    <span>Kuwait Airways</span>
                  </div>
                  <div className="flex space-x-2 items-center mt-2">
                    <input type="checkbox" id="scales" name="scales" />{" "}
                    <span>Emirates</span>
                  </div>
                </div>
              </div>
            )}

            <div className="all-flights w-8/12 flex flex-col space-y-4 mt-4 border-gray-200 text-lg">
              <div className="flights-found">
                {allFlights.length} flights found
              </div>
              {allFlights.length > 0 && (
                <div className="sort-flights flex space-x-6">
                  <span className="text-gray-600">Sort by: </span>
                  <div className="flex space-x-10 text-blue-600">
                    <div className="flex space-x-1">
                      <span className=" active text-gray-700 font-semibold">
                        <strike>Pricing</strike>
                      </span>
                      <div
                        className="h-10 rounded-lg flex cursor-pointer hover:scale-105
                transform
                transition
                duration-300
                ease-out"
                      >
                        <svg
                          class="down-price price-toggle w-7 h-7 text-gray-800 font-semibold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 17l-4 4m0 0l-4-4m4 4V3"
                          ></path>
                        </svg>
                        <svg
                          class="up-price hidden price-toggle w-7 h-7 text-gray-800 font-semibold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7l4-4m0 0l4 4m-4-4v18"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    {/* <span>Duration</span>
                  <span>Cheapest</span> */}
                  </div>
                </div>
              )}

              <div className="flight-lists flex flex-col pl-4 drop-shadow-xl">
                {allFlights.map((f) => (
                  <div
                    className="
              flight-list-item cursor-pointer hover:scale-[102%]
              transform
              transition
              duration-300
              ease-out
              flex
              justify-between
              bg-gray-100
              rounded-lg
              p-3
            "
                  >
                    <div className="flex flex-col space-y-5">
                      <div className="badge flex justify-left text-white">
                        <div
                          className="badge
                    flex space-x-2 items-center
                    bg-gray-700
                    text-white text-xs
                    font-light
                    py-1.5
                    px-3
                    rounded-full
                  "
                        >
                          <FaPlane className="h-3 w-3" />
                          <span
                            className="font-bold text-gray-100 text-sm rounded"
                            style={{ fontFamily: "Montserrat" }}
                          >
                            {f["flight_name"]}
                          </span>
                        </div>
                      </div>
                      <div className="flight-item-info pl-5 flex justify-between items-center">
                        <div className="flex flex-col items-center text-center">
                          <div className="text-5xl font-regular">
                            {f["start_time"].split(" ")[1]}
                          </div>
                          <div className="text-3xl font-light">
                            {f["start_iata"]}
                          </div>
                        </div>
                        <div className="mx-4 flex flex-col text-center">
                          <div className="text-sm">{f["duration"]}</div>
                          <img
                            className="max-w-full nav-row-logo"
                            loading="lazy"
                            src="/img/plane.png"
                            alt="rentByOwner"
                            width="182"
                            height="26"
                          />
                          <div className="text-sm">{f["stops"]} stop(s)</div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="text-5xl font-regular">
                            {f["end_time"].split(" ")[1]}
                          </div>
                          <div className="text-3xl font-light">
                            {f["end_iata"]}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              "
                    >
                      <div className="text-4xl font-semibold">
                        $
                        <span style={{ fontFamily: "Catamaran" }}>
                          {f["price"]}
                        </span>
                      </div>
                      <button
                        className="bg-gray-700 text-white font-semibold p-2 px-4 rounded-lg"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default AutoSearch;
