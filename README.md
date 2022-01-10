This is a [NextJs](https://nextjs.org/) project.

# Getting Started

First, install all the dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open the browswer and write [http://localhost:3000](http://localhost:3000) and hit enter

# Features

- To check weather data In first input, search for "Vancouver , Canada, Vancouver International Airport (YVR)" and for second input, search for "Dhaka, Bangladesh, Hazrat Shahjalal International Airport (DAC)".
  (Note:If it doesn't work for the first time, click the search button again after 2/3 seconds)
- No flights available if input is given Toronto to Dhaka
- for a given future date, it shows a weather forecast of what wheather likely to be on that whole day. (Note: Weatherforecast available for the next 14 days from now)

![flights](https://user-images.githubusercontent.com/29802879/148372088-d1c50338-e073-4451-a786-2c8367d79788.png)
![noFlights](https://user-images.githubusercontent.com/29802879/148372173-f2f1a922-5c5d-41c9-a745-65eeb6b0ab69.png)

![alt text](https://github.com/tahsin/Auto-Search/blob/main/noFlights.png?raw=true)

<!-- ![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true) -->

# Tasks, Todos & Problems face while making the project (Optional)

## TODOs

- Make mobile friendly (integrate tap and swipe actions)
- Improve README.md documentation
- Incomplete work, need to merge all components into one to be functional
- Divide code into useful components (More convenient approach, makes it more readable and share codes as a component)

## Logic

- Axios in component
- Using 2 fetches
- showing country name
- showiung weather data
- demo text

- [x] Able to Fetch data from local json file in ReactJS
- [x] Able to show json data in page
- [x] Able to show the whole location in the map
- [x] Have 2 inputs like the above.
- [x] Weather API taking dynamic values from input
- [x] Show Dynamic Weather data with the given values (AutoSearch.js)
- [x] Show Flights for 2 specific names in input, vancouver (1st) and Dhaka
- [x] show a message if no flights found
- [x] Make data fetching from json file as dynamic
- [x] Error: Request failed with status code 400 (Showing when removing all inputs from the input, cityNAmeT)
- [x] The start date will fetch data of weather forecast
- [x] Add Rapid API
- [x] Sort array of objects for price property. Both Ascending and Descending.
- [ ] Restrict date from today to next 14 days
- [ ] Make the toggle work
- [ ] First make a demo frontend project, then add express to it.
- [ ] Fetch data from server side, not client side as need to hit twice. So, need to use ExpressJS
- [ ] If Express is included, only then we can update the json file and edit the date to the date selected by the client

## UI/UX

- [x] Bring the design in one place
- [x] price arrow button should increase size when hover
- [x] Search Flight button needs to be moveable once clicked
- [x] Plane icon added
- [x] Hero image added
- [x] Add stops and duration over the plane
- [x] Make the weather show dynamically toCity input only
- [x] Add image to your repo
- ~~Have the live link in GitHub~~
- [x] Suggestion box needs to be bigger to click
- [x] Put the input form inside the main design
- [x] Change the icon for sort toggle
- [x] white bg form
- [ ] In the hero section, make it center, at the left, there's a text and at the right we have the input
- [ ] Show search and date with modal
- [ ] Have a loading div to show that the data is processing
- [ ] Use of Framer Motion to bounce weather icons

## Tiny tasks

- [ ] Remove countryName variable if not needed
- [ ] Better fonts needed
- [ ] Is there a way to figure out if any of my npm packages is unused or installed by mistake?

## Npm pakages needed

- react-icons

## Problems and Solution

- [x] couldn't do axios in functional component. solved it by usding class component
- [x] didn't know how to fetch copuntry name. Sol: Brought another api top solve that.
- [x] How to load local json file. Sol: [Medium Post Here](https://medium.com/officialrajdeepsingh/how-to-read-local-json-file-in-react-js-564125235fc7)
- [x] setState doesn't update the state immediately. Sol: "Your state needs some time to mutate, and since console.log(this.state.boardAddModalShow) executes before the state mutates, you get the previous value as output. So you need to write the console in the callback to the setState function:
      openAddBoardModal() {
      this.setState({ boardAddModalShow: true }, function () {
      console.log(this.state.boardAddModalShow);
      });
      }"
      [Source](https://stackoverflow.com/questions/41278385/setstate-doesnt-update-the-state-immediately)
- [x] Json fil data recieved but not able to show the data using ".map()". Sol: Used '{}' instead of '()' after '=>'
- [x] npm packages usually encourages to import the css styles and theme in src/App.css file. However, NextJs do not come with that. Sol: Put the imports in tyhe same component where the npm 8is being used.
- [x] Date is decreasing by 1 when we show in output. Sol: Use toLocaleString()
- [x] Removing spaces at the start or end of a string. Sol:

```bash
.replace(/^\s+|\s+$/g, "");
```

- [x] For's handleSubmit was not wroking. sol: On form, we write, "onsubmit={handleSubmit}" and in the function we, wreite, "handleSubmit = (e) => { e.preventDefault();..."
- [x] Couldn't fetch the josn data dynamically. Sol: One of my dictionary key parameter values had a trailing space so, had to

```bash
cityNameT.split(",")[0].replace(/^\s+|\s+$/g, "").toLocaleLowerCase()
```

- [x] Unable to sort a list of objects.
      What I was doing:

```
  const toggleSort = () => {
    let sorted = allFlights.sort((a, b) => {
      return a.price - b.price;
    });

    setAllFlights(sorted);
  };
```

What it sahould be:

```
  const toggleSort = () => {
    let sorted = allFlights.sort((a, b) => {
      return a.price - b.price;
    });

    setAllFlights([...sorted]);
  };
```

- [ ] the solution above. Why is it like that?

- [ ] When I type, the heading also changes with it.
- [ ] when I hit search button twice, it gives an error. Probably due to "Dhaka" and not "dhaka"
- [ ] how to remove defualt date icon from date-input
- [ ] How to convert my class based compoent to functional component?
- [ ] how to get the date as YYYY-MM-DD from IOstring => check date = date.split("-").reverse().join("-");
- [ ] if i give any special charatcers, it gives an error.

## What I learned

- How to write a callback function
- How to write a class component
- How to read local json file in ReactJS
- Adding fonts in ReactJS
- Learned how to save data in the placeholder => placholder = {placeHold || "Search..."} then deconstruct it in the functional parameters
- All HTTP response status codes that are in the 4xx category are considered client error responses
- Sometimes Date in the url api can be in different format but still works (e.g. 2021.1.10, 2021-1-10)

## For Refactor

- [ ] getStatic Component if needed
