import React from 'react';
import Search from './Search.js';
import GameTable from './GameTable.js';
import Container from '@material-ui/core/Container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTag: [],
      gameData: null,
      error: null,
      isLoades: false,
      searchInput: "",
      platforms: {},
      rank: {},
      status: {}
    }
    this.handleChange = this.handleChange.bind(this);
  }

   componentDidMount() {
    fetch("http://localhost:3001/gameData")
      .then(res => res.json())
      .then((gameData) => {
        let platforms = {};
        let rank = {};
        let status = {};
        let platformList = [];
        let rankList = [];
        let statusList = [];
        let item, tmp;
        for (item in gameData.results) {
          tmp = gameData.results[item];
          if (platformList.includes(tmp["Platform"]) === false) {
            platformList.push(tmp["Platform"]);
            platforms[tmp["Platform"]] = false;
          }
          if (rankList.includes(tmp["Rank"]) === false) {
            rankList.push(tmp["Rank"]);
            rank[tmp["Rank"]] = false;
          }
          if (statusList.includes(tmp["Status"]) === false) {
            statusList.push(tmp["Status"]);
            status[tmp["Status"]] = false;
          }
        }
        this.setState({
          gameData: gameData,
          platforms: platforms,
          rank: rank,
          status: status
        });
      });
  }

  handleChange(jud, val) {
    console.log(this);
    console.log(jud, val);
    if (jud === "searchInput") {
      this.setState({ searchInput: val });
    } else {
      let tmp = this.state[jud];
      tmp[val] = !tmp[val];
      this.setState({[jud]:tmp});
    }
  }

  render() {
    if (this.state.gameData === null) return <div></div>;
    const platformsList = Object.keys(this.state.platforms);
    const rankList = Object.keys(this.state.rank);
    const statusList = Object.keys(this.state.status);
    const gameData = [];
    const data = this.state.gameData.results;
    let item;
    const selectPlatform = Object.values(this.state.platforms).indexOf(true) > -1;
    const selectRank = Object.values(this.state.rank).indexOf(true) > -1;
    const selectStatus = Object.values(this.state.status).indexOf(true) > -1;
    for(item in data){
      if(this.state.searchInput!==null){
        const Name = data[item]['Name'];
        const TranslatedName = data[item]['TranslatedName'];
        const Notes = data[item]['Notes'];
        let searchInput = this.state.searchInput;
        let find = false;
        searchInput = searchInput.toLowerCase();
        find = find || Name.toLowerCase().includes(searchInput);
        find = find || TranslatedName.toLowerCase().includes(searchInput);
        find = find || Notes.toLowerCase().includes(searchInput);
        if(!find) continue;
      }
      if((selectPlatform)&&(this.state.platforms[data[item]['Platform']]===false)) continue;
      if((selectRank)&&(this.state.rank[data[item]['Rank']]===false)) continue;
      if((selectStatus)&&(this.state.status[data[item]['Status']]===false)) continue;
      gameData.push(data[item]);
    }

    return (
      <div className="App">
        <Container>
          <Search platforms={platformsList} rank={rankList} status={statusList} onChange={this.handleChange} />
        </Container>
        <Container>
          <GameTable gameData={gameData} />
        </Container>
      </div>
    );
  }
}

