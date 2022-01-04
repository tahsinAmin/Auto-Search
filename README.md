## Tasks

- Axios in component
- Using 2 fetches
- showing country name
- showiung weather data
- [x] Bring the design in one place
- [x] Showing the city name in capiatl letter
- [x] Able to Fetch data from local json file in ReactJS
- [x] Able to show json data in page
- [ ] Use of Framer Motion to bounce weather icons
- [ ] Search Fligth button needs to be moveable once clicked
- [ ] Must replace bus icon wqith plane icon
- [ ] show a message if no flights found

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
- [ ] When I type, the heading also changes with it.
- [ ] when I hit search button twice, it gives an error. Probably due to "Dhaka" and not "dhaka"
- [ ] how to remove defualt date icon from date-input
- [ ] How to convert my class based compoent to functional component?

## What I learned

- How to write a callback function
- How to write a class component
- How to read local json file in ReactJS
- Adding fonts in ReactJS

## For Refactor

- [ ] getStatic Component if needed
