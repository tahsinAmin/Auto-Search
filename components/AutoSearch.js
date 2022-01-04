import { useEffect, useState } from "react";
import axios from "axios";

function AutoSearch() {
  const [cities, setCities] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [cityNameO, setCityNameO] = useState("");
  const [suggestionsO, setSuggestionsO] = useState([]);
  const [cityNameT, setCityNameT] = useState("");
  const [suggestionsT, setSuggestionsT] = useState([]);

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
    let countryName = cityNameT.split(",")[1].replace(/^\s+|\s+$/g, "");
    let cityN = cityNameT.split(",")[0];
    console.log(countryName);
    e.preventDefault();
    try {
      axios
        .get(
          `https://api.weatherapi.com/v1/history.json?key=e6a73467a3e94aa184c122435212812&q=${countryName}&q=${cityN}&dt=2021.12.30&aqi=yes`
        )
        .then((res) => {
          const fetch_data = res.data.forecast.forecastday[0].hour;
          // console.log(res.data.location.name);
          // console.log(res.data.forecast.forecastday[0].hour);
          setWeatherForecast(fetch_data);
          console.log(weatherForecast);
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
      {weatherForecast.length ? <div>Hello</div> : ""}
    </div>
  );
}

export default AutoSearch;
