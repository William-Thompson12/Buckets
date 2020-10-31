//Runs functons to render the information on the screen on DOM load

function onDOMLoad(){
  renderTeamStandingsWest(nbaTeamRankedSorted);
  renderTeamStandingsEast(nbaTeamRankedSorted);
  picList(nbaTeamDataArr); 
  renderTeams(nbaTeamDataArr);
  getSeed(); 
}

//Renders the logo and rosters for each team

function renderTeams(nbaTeamDataArr) {
  var logoWall = document.getElementById('logoWall')
  var teamLogos = nbaTeamDataArr.map((currentTeam) => {
    return `
      <div id="${currentTeam.name}" class="logoContainer">  
        <img id="teamLogo" src="https://stats.nba.com/media/img/teams/logos/${currentTeam.abbreviation}_logo.svg">
        ${currentTeam.full_name}<br> [${currentTeam.abbreviation}]
        <a href="https://en.wikipedia.org/wiki/${currentTeam.full_name}" target="_blank">Learn More</a>
        <button class="btn btn-dark" type="button" onclick="getRoster(${currentTeam.id})" data-toggle="collapse" data-target="#collapseExample${currentTeam.id}" aria-expanded="false" aria-controls="collapseExample${currentTeam.teamId}">Roster</button>
        <div class="team-Card collapse" id="collapseExample${currentTeam.id}">
          <div class="card card-body">
            <div class="team-roster" id="team-roster">
              <div class="teamRoster-title">
                <h4>${currentTeam.name} Roster:</h4>
              </div>
              <div id="${rosterContainer(currentTeam.id)}-Roster" class="players">
                
              </div>
            </div>
          </div>
        </div>
      </div>`
  })
logoWall.innerHTML = teamLogos.join(` `)
}

function rosterContainer(teamId){
  if(teamId < 2){
    return `${teamId}`
  } else if (teamId > 2 && teamId < 11) {
    return `${teamId - 1}`
  } else {
    return `${teamId - 4}`
  }
}

// Renders all the team standings

function renderTeamStandingsWest (nbaTeamDataArr) {
  var rankedTeam = document.getElementById(`rankedTeamWestern`)
  var newTeamArr = nbaTeamDataArr.map((currentTeam) => {
    if (findTeamConference(currentTeam.conference) == `West`) {
     return `
     <div class="teamRankedContainer" ${findTeamRank(currentTeam.name)}>
       <div class="card-top">
         <img id="teamLogo2" src="https://stats.nba.com/media/img/teams/logos/${currentTeam.abbreviation}_logo.svg">
         <div>
          <h4 class="seed${currentTeam.conference}" id="seed-${currentTeam.name}"></h4>
         </div>
         <div class="team-body">
           <div class="teamName">
             <h4><a id="team-link" href="#${currentTeam.name}">${currentTeam.full_name}</a></h4>
             <h6>${currentTeam.division}</h6>
           </div>
         </div>
       </div>
     </div>
     `
    }else {
      return
    }
  })
rankedTeam.innerHTML = newTeamArr.join(` `)
}

function renderTeamStandingsEast (nbaTeamDataArr) {
  var rankedTeam = document.getElementById(`rankedTeamEastern`)
  var newTeamArr = nbaTeamDataArr.map((currentTeam) => {
    if (findTeamConference(currentTeam.conference) == `East`) {
     return `
      <div class="teamRankedContainer" id="${findTeamRank(currentTeam.name)}">
        <div class="card-top">
          <img id="teamLogo2" src="https://stats.nba.com/media/img/teams/logos/${currentTeam.abbreviation}_logo.svg">
          <div>
            <h4 class="seed${currentTeam.conference}" id="seed-${currentTeam.name}"></h4>
          </div>
          <div class="team-body">
            <div class="teamName">
              <h4><a id="team-link" href="#${currentTeam.name}">${currentTeam.full_name}</a></h4>
              <h6>${currentTeam.division}</h6>
            </div>
          </div>
        </div>
      </div>
     `
    }else {
      return
    }
  })
    rankedTeam.innerHTML = newTeamArr.join(` `)
}

// Finds the rosters for each team in the renderTeams function above

function findPlayerRoster(teamRoster, teamId){
  teamRoster = teamRoster.slice(0, 14)
  var container = document.getElementById(`${rosterContainer(teamId)}-Roster`)
  var newPlayerRoster = teamRoster.map(currentPlayer => {
      return `
      <div class="playerBar">
      ${currentPlayer.firstName + ' ' + currentPlayer.lastName} 
      </div>
      `
  })
  container.innerHTML = newPlayerRoster.join(' ')
}

//returns team rank for standing

function findTeamRank(currentTeamName){
  nbaTeamRankedArr.map(function(rankedTeam){
    if(rankedTeam.name.toString() == currentTeamName){
      newSeed = `${rankedTeam.seed.toString()}`
      return newSeed
    }else {
    }
  })
}

function getSeed(){
  nbaTeamRankedArr.map(function(rankedTeam){
    var newTeamSeed = document.getElementById(`seed-${rankedTeam.name}`)
    newTeamSeed.innerHTML = `${rankedTeam.seed.toString()}`
  })
}

//sorts the teams by conference for standings

function findTeamConference(team){
  return `${team}`
}

//the toggle for profile popup

function profilePopup() {
  var x = document.getElementById("profile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("userPic2").innerHTML = null;
}

//Sets users pic to the team logo chosen

function picList(nbaTeams) {
  nbaTeams.map(function(team) { 
    let teamName = document.getElementById('teamSelector');
    let teamElement = document.createElement('option');
    teamElement.setAttribute('value', team.abbreviation);
    teamElement.innerHTML = team.name;        
    teamName.appendChild(teamElement);
  });
};  

function getTeamPic2(nbaTeams) {
  return  `<img id="userImg2" src="https://stats.nba.com/media/img/teams/logos/${nbaTeams}_logo.svg">`
}

function getTeamPic(nbaTeams) {
  return  `<img id="userImg" src="https://stats.nba.com/media/img/teams/logos/${nbaTeams}_logo.svg">`
}

var changeUserPic = document.getElementById('teamSelector');
changeUserPic.addEventListener("change", () => {
  let teamName = document.getElementById('teamSelector');
  newTeamName = teamName.value;
  document.getElementById("userPic").innerHTML = getTeamPic(newTeamName);    
  document.getElementById("userPic2").innerHTML = getTeamPic2(newTeamName);
  document.getElementById("userFav").innerHTML = setFavTeam(newTeamName);
});

// Displays chosen teams name in profile popup

function setFavTeam(selectTeam) {
    return `Favorite Team: ${selectTeam}`
}

// Sets Username 

function userNameChanger(){
  var name = document.getElementById('changeUsername').value
  document.getElementById('username1').innerHTML = `${name}`
  document.getElementById('user2').innerHTML = `${name}`
}

//Decides what to do when a user doesn't save the changes

function notSave() {
  userpic1 = document.getElementById("userPic")
  userpic2 = document.getElementById("userPic2")
  if(userpic1 != null && userpic2 != null) {
    userpic1.innerHTML = null
  }else{
    return console.log('Error at notSave')
  }
  profilePopup();
}

// Below prints all the data for player finder, sorted by bio and stats

function printPlayerBio(playerData, playerGivenFirst, playerGivenLast){
  playerData.map(function(newArr){
    if(newArr.firstName.toString() == playerGivenFirst.charAt(0).toUpperCase() + playerGivenFirst.slice(1) && playerGivenLast.charAt(0).toUpperCase() + playerGivenLast.slice(1) == newArr.lastName.toString()){
      document.getElementById("playerImg").innerHTML = `<img id="playerDisplayImg" src="https://nba-players.herokuapp.com/players/${newArr.lastName + "/" + newArr.firstName}">`
      document.getElementById("playerPosition").innerHTML = `Positon: ${newArr.leagues.standard.pos} | Jersey: #${newArr.leagues.standard.jersey}`
      document.getElementById("playerDisplayName").innerHTML = `${newArr.firstName + ' ' + newArr.lastName}`
      document.getElementById('playerSecondary').innerHTML = sceondaryBio(newArr.collegeName, newArr.dateOfBirth)
      console.log(newArr)
    }else{
    }
  })
}

function sceondaryBio(college, dob){
  if(college == null || " " && dob == null || " "){
    return `College: Not Listed | Born: Not Listed`
  }else{
    return `College: ${college} | Born: ${dob}`
  }
}

function printPlayerStats(data){
  document.getElementById('ppg').innerHTML = data.points_per_game
  document.getElementById('apg').innerHTML = data.assists_per_game
  document.getElementById('rpg').innerHTML = data.rebounds_per_game
  document.getElementById('spg').innerHTML = data.steals_per_game
  document.getElementById('bpg').innerHTML = data.blocks_per_game
  document.getElementById('topg').innerHTML = data.turnovers_per_game
  document.getElementById('mpg').innerHTML = data.minutes_per_game
  document.getElementById('fapg').innerHTML = data.field_goals_attempted_per_game
  document.getElementById('fmpg').innerHTML = data.field_goals_made_per_game
  document.getElementById('ft').innerHTML = `${data.free_throw_percentage}%`
  document.getElementById('fg').innerHTML = `${data.field_goal_percentage}%`
  document.getElementById('3p').innerHTML = `${data.three_point_percentage}%`
}

// Key popup function

function showKey() {
  var x = document.getElementById('graphKey');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//gets the input data to search for the player

function userPlayerInput(){
  var first = document.getElementById('firstName').value
  var last = document.getElementById('lastName').value
  getSpecificPlayer(first, last)
  findPlayerStats(first, last)
}