import { useEffect, useState } from "react";
import axios from "axios";

function AutoSearch() {
  const [users, setUsers] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const loadCities = async (text) => {
    // const response = await axios.get("https://reqres.in/api/users");
    const response = await axios.get(
      `https://api.sharetrip.net/api/v1/flight/search/airport?name=${text}`
    );

    setUsers(response.data.response);
    console.log(response.data.response);
  };

  const onSuggestHandler = (selectedItem) => {
    setText(selectedItem);
    setSuggestions([]);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    loadCities(text);
    if (text.length > 0) {
      matches = users.filter((usr) => {
        const regex = new RegExp(`${text}`, "gi");
        return usr.city.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestions(matches);
    setText(text);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios
        .get(
          `https://api.weatherapi.com/v1/history.json?key=e6a73467a3e94aa184c122435212812&q=canada&q=vancouvar&dt=2021.12.30&aqi=yes`
        )
        .then((res) => {
          // console.log(res.data.forecast.forecastday);
          const fetch_data = res.data.forecast.forecastday[0].hour;
          console.log(res.data.forecast.forecastday[0].hour);
          setWeatherForecast(fetch_data);
          console.log(weatherForecast);
        });

      // const response = await axios.get(
      //   `https://api.weatherapi.com/v1/history.json?key=e6a73467a3e94aa184c122435212812&q=canada&q=${text}&dt=2021.12.30&aqi=yes`
      // );
      // let list = [];
      // console.log(response.data.forecast);
      // list = response.data.forecast.hour;
      // console.log(list);
      // setWeatherForecast(response.data.forecast);
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

    // await axios
    //   // .get(
    //   //   `https://api.weatherapi.com/v1/history.json?key=e6a73467a3e94aa184c122435212812&q=canada&q=${text}&dt=2021.12.30&aqi=yes`
    //   // )
    //   .get(
    //     `https://api.sharetrip.net/api/v1/flight/search/airport?name=${text}`
    //   )
    //   .then((response) => {
    //     setCityNameArray(response.data.response);
    //     console.log("Hello to " + cityNameArray);
    //   });

    alert("HEllo" + text);
  };
  console.log("hello" + weatherForecast);
  return (
    <div>
      <form className="flex" onSubmit={(e) => handleSubmit(e)}>
        <div className="container mx-auto">
          <input
            type="text"
            name="input-search"
            className="border rounded-sm w-full mt-4"
            placeholder="Search...."
            onChange={(e) => onChangeHandler(e.target.value)}
            value={text}
            onBlur={() => {
              setTimeout(() => {
                setSuggestions([]);
              }, 100);
            }}
          />
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div
                className="border w-full cursor-pointer border-b-1 hover:bg-blue-100 border-l-1 border-r-1"
                key={i}
                onClick={() => onSuggestHandler(suggestion.city)}
              >
                {suggestion.city}
              </div>
            ))}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
      {/* {cityName.length > 0 ? <div>{cityName.name}</div> : null} */}
      {weatherForecast.length ? <div>Hello</div> : ""}
    </div>
  );
}

export default AutoSearch;
