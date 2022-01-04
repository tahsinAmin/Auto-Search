# TODOs

- Make mobile friendly (integrate tap and swipe actions)
- Improve README.md documentation
- Incomplete work, need to merge all components into one to be functional

### Logic

- Axios in component
- Using 2 fetches
- showing country name
- showiung weather data

- [x] Showing the city name in capiatl letter
- [x] Able to Fetch data from local json file in ReactJS
- [x] Able to show json data in page
- [x] Able to show the whole location in the map
- [x] Have 2 inputs like the above.
- [x] Work with Handle Submit
- [ ] Show Weather data with the given values

- [ ] show a message if no flights found
- [ ] Make the toggle work

### UI/UX

- [x] Bring the design in one place
- [x] price arrow button should increase size when hover
- [x] Search Flight button needs to be moveable once clicked
- [ ] Show search and date with modal

- [ ] Must replace bus icon wqith plane icon
- [ ] do something about the hero image
- [ ] Use of Framer Motion to bounce weather icons

## Tiny tasks

- [ ] Remove countryName variable if not needed
- [ ] Better fonts needed
- [ ] bus icon needs to be removed
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
- [x] Removing spaces at the start or end of a string. Sol: .replace(/^\s+|\s+$/g, "");
- [ ] When I type, the heading also changes with it.
- [ ] when I hit search button twice, it gives an error. Probably due to "Dhaka" and not "dhaka"
- [ ] how to remove defualt date icon from date-input
- [ ] How to convert my class based compoent to functional component?
- [ ] how to get the date as YYYY-MM-DD from IOstring => check date = date.split("-").reverse().join("-");

## What I learned

- How to write a callback function
- How to write a class component
- How to read local json file in ReactJS
- Adding fonts in ReactJS
- Learned how to save data in the placeholder => placholder = {placeHold || "Search..."} then deconstruct it in the functional parameters

## For Refactor

- [ ] getStatic Component if needed
