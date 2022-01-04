## Tasks

- Axios in component
- Using 2 fetches
- showing country name
- showiung weather data
- [x] Bring the design in one place
- [x] Showing the city name in capiatl letter
- [ ] Use of Frmaer Motipon to bounce weather icons
- [ ] Search Fligth btton needs to be moveable once clicked
- [ ] Must replace bus icon wqith plane icon
- [x] Able to Fetch data from local json file in ReactJS

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
- [ ] When I type, the heading also changes with it.

## What I learned

- How to write a callback function
- How to write a class component
