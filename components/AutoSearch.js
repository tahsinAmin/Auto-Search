import { useState } from "react";
import axios from "axios";
import { FaPlaneDeparture, FaWarehouse } from "react-icons/fa";
import data from "./data/flights.json";

function AutoSearch() {
  const [cities, setCities] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [cityNameO, setCityNameO] = useState("");
  const [suggestionsO, setSuggestionsO] = useState([]);
  const [cityNameT, setCityNameT] = useState("");
  const [cityNT, setCityNT] = useState("");
  const [countryNameT, setCountryNameT] = useState("");
  const [suggestionsT, setSuggestionsT] = useState([]);
  const [weatherFound, setWeatherFound] = useState(false);
  const [flightsFound, setFlightsFound] = useState(false);
  const [allFlights, setAllFlights] = useState([]);

  const loadCities = async (cityName) => {
    const response = await axios.get(
      `https://api.sharetrip.net/api/v1/flight/search/airport?name=${cityName}`
    );
    setCities(response.data.response);
    console.log(response.data.response);
  };

  const onSuggestHandlerO = (selectedCity, selectedName) => {
    let textMerged = `${selectedCity} , ${selectedName}`;
    setCityNameO(textMerged);
    setSuggestionsO([]);
  };
  const onChangeHandlerO = (cityName) => {
    let matches = [];
    loadCities(cityName);
    if (cityName.length > 0) {
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
    if (cityName.length > 0) {
      matches = cities.filter((usr) => {
        const regex = new RegExp(`${cityName}`, "gi");
        return usr.city.match(regex);
      });
    }
    setSuggestionsT(matches);
    setCityNameT(cityName);
  };
  const handleSubmit = async (e) => {
    setCountryNameT(cityNameT.split(",")[1].replace(/^\s+|\s+$/g, ""));
    setCityNT(cityNameT.split(",")[0]);
    e.preventDefault();
    try {
      axios
        .get(
          `https://api.weatherapi.com/v1/history.json?key=e6a73467a3e94aa184c122435212812&q=${countryNameT}&q=${cityNT}&dt=2021.12.30&aqi=yes`
        )

        .then((res) => {
          const hour = res.data.forecast.forecastday[0].hour;
          console.log("+-" + countryNameT + "--" + cityNT + "--+");
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
          setAllFlights(
            data[0]["2022-01-10"][countryNameT][cityNT].canada.vancouvar
          );
          setFlightsFound(true);
        });
    } catch (error) {
      if (error.response) {
        // get response with a status code not in range 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // no response
        console.log(error.request);
      } else {
        // Something wrong in setting up the request
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };
  return (
    <div>
      <form className='flex' onSubmit={(e) => handleSubmit(e)}>
        <div className='container mx-auto'>
          <input
            type='text'
            name='input-search'
            className='border rounded-sm w-full mt-4'
            placeholder='From...'
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
                className='border w-full cursor-pointer border-b-1 hover:bg-blue-100 border-l-1 border-r-1'
                key={i}
                onClick={() => onSuggestHandlerO(city, name)}
              >
                {city}, {name}
              </div>
            ))}
        </div>
        <div className='container mx-auto'>
          <input
            type='text'
            name='input-search-2'
            className='border rounded-sm w-full mt-4'
            placeholder='To....'
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
                className='border w-full cursor-pointer border-b-1 hover:bg-blue-100 border-l-1 border-r-1'
                key={i}
                onClick={() => onSuggestHandlerT(city, name)}
              >
                {city}, {name}
              </div>
            ))}
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
        >
          Submit
        </button>
      </form>
      {weatherFound && (
        <section className='weather'>
          <h1 className='text-xl font-bold'>Select departing flights</h1>
          <div className='flex space-x-8 mt-4 items-center'>
            <div className='flex space-x-4'>
              <FaPlaneDeparture />
              <h2>
                <b>{cityNameO}</b> to <b>{cityNameT}</b>
              </h2>
            </div>
            {/* <span>
              Wed <b>17 Nov</b>
            </span> */}
          </div>
          <div
            className='
            display-weather
            my-5
            rounded-lg
            h-[245px]
            grid grid-cols-4
            gap-4
            p-4
          '
          >
            <div
              className='
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            '
            >
              <div className='icon-text flex flex-col items-center'>
                <div className='icon'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    ></path>
                  </svg>
                </div>
                <div className='text-2xl font-semibold'>Morning</div>
              </div>
              <div className='temp text-[100px] font-light'>
                {weatherForecast[0]}°
              </div>
            </div>
            <div
              className='
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            '
            >
              <div className='icon-text flex flex-col items-center'>
                <div className='icon'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    ></path>
                  </svg>
                </div>
                <div className='text-2xl font-semibold'>Afternoon</div>
              </div>
              <div className='temp text-[100px] font-light'>
                {weatherForecast[1]}°
              </div>
            </div>
            <div
              className='
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            '
            >
              <div className='icon-text flex flex-col items-center'>
                <div className='icon'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
                    ></path>
                  </svg>
                </div>
                <div className='text-2xl font-semibold'>Evening</div>
              </div>
              <div className='temp text-[100px] font-light'>
                {weatherForecast[2]}°
              </div>
            </div>
            <div
              className='
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            '
            >
              <div className='icon-text flex flex-col items-center'>
                <div className='icon'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    ></path>
                  </svg>
                </div>
                <div className='text-2xl font-semibold'>Overnight</div>
              </div>
              <div className='temp text-[100px] font-light'>
                {weatherForecast[3]}°
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default AutoSearch;
