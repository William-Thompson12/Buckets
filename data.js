
// Request Methods for API calling

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

const requestOptions2 = {
    'method': 'GET',
    'redirect': 'follow',
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "ef3650d504mshb0cc17ee10eee5ap18f7bajsn6e531365fca0"
	}
};

// 2 Different API's calling for team data, 1 JSON Object customized for seeds.

const nbaTeamRankedArr = [
    {
        "seed": 14,
        "abbreviation": "ATL",
        "city": "Atlanta",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Atlanta Hawks",
        "name": "Hawks"
    },
    {
        "seed": 3,
        "abbreviation": "BOS",
        "city": "Boston",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Boston Celtics",
        "name": "Celtics"
    },
    {
        "seed": 7,
        "abbreviation": "BKN",
        "city": "Brooklyn",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Brooklyn Nets",
        "name": "Nets"
    },
    {
        "seed": 10,
        "abbreviation": "CHA",
        "city": "Charlotte",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Charlotte Hornets",
        "name": "Hornets"
    },
    {
        "seed": 11,
        "abbreviation": "CHI",
        "city": "Chicago",
        "conference": "East",
        "division": "Central",
        "full_name": "Chicago Bulls",
        "name": "Bulls"
    },
    {
        "seed": 15,
        "abbreviation": "CLE",
        "city": "Cleveland",
        "conference": "East",
        "division": "Central",
        "full_name": "Cleveland Cavaliers",
        "name": "Cavaliers"
    },
    {
        "seed": 7,
        "abbreviation": "DAL",
        "city": "Dallas",
        "conference": "West",
        "division": "Southwest",
        "full_name": "Dallas Mavericks",
        "name": "Mavericks"
    },
    {
        "seed": 3,
        "abbreviation": "DEN",
        "city": "Denver",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Denver Nuggets",
        "name": "Nuggets"
    },
    {
        "seed": 13,
        "abbreviation": "DET",
        "city": "Detroit",
        "conference": "East",
        "division": "Central",
        "full_name": "Detroit Pistons",
        "name": "Pistons"
    },
    {
        "seed": 15,
        "abbreviation": "GSW",
        "city": "Golden State",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Golden State Warriors",
        "name": "Warriors"
    },
    {
        "seed": 4,
        "abbreviation": "HOU",
        "city": "Houston",
        "conference": "West",
        "division": "Southwest",
        "full_name": "Houston Rockets",
        "name": "Rockets"
    },
    {
        "seed": 4,
        "abbreviation": "IND",
        "city": "Indiana",
        "conference": "East",
        "division": "Central",
        "full_name": "Indiana Pacers",
        "name": "Pacers"
    },
    {
        "seed": 2,
        "abbreviation": "LAC",
        "city": "LA",
        "conference": "West",
        "division": "Pacific",
        "full_name": "LA Clippers",
        "name": "Clippers"
    },
    {
        "seed": 1,
        "abbreviation": "LAL",
        "city": "Los Angeles",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Los Angeles Lakers",
        "name": "Lakers"
    },
    {
        "seed": 9,
        "abbreviation": "MEM",
        "city": "Memphis",
        "conference": "West",
        "division": "Southwest",
        "full_name": "Memphis Grizzlies",
        "name": "Grizzlies"
    },
    {
        "seed": 5,
        "abbreviation": "MIA",
        "city": "Miami",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Miami Heat",
        "name": "Heat"
    },
    {
        "seed": 1,
        "abbreviation": "MIL",
        "city": "Milwaukee",
        "conference": "East",
        "division": "Central",
        "full_name": "Milwaukee Bucks",
        "name": "Bucks"
    },
    {
        "seed": 14,
        "abbreviation": "MIN",
        "city": "Minnesota",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Minnesota Timberwolves",
        "name": "Timberwolves"
    },
    {
        "seed": 13,
        "abbreviation": "NOP",
        "city": "New Orleans",
        "conference": "West",
        "division": "Southwest",
        "full_name": "New Orleans Pelicans",
        "name": "Pelicans"
    },
    {
        "seed": 12,
        "abbreviation": "NYK",
        "city": "New York",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "New York Knicks",
        "name": "Knicks"
    },
    {
        "seed": 5,
        "abbreviation": "OKC",
        "city": "Oklahoma City",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Oklahoma City Thunder",
        "name": "Thunder"
    },
    {
        "seed": 8,
        "abbreviation": "ORL",
        "city": "Orlando",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Orlando Magic",
        "name": "Magic"
    },
    {
        "seed": 6,
        "abbreviation": "PHI",
        "city": "Philadelphia",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Philadelphia 76ers",
        "name": "76ers"
    },
    {
        "seed": 10,
        "abbreviation": "PHX",
        "city": "Phoenix",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Phoenix Suns",
        "name": "Suns"
    },
    {
        "seed": 8,
        "abbreviation": "POR",
        "city": "Portland",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Portland Trail Blazers",
        "name": "Trail Blazers"
    },
    {
        "seed": 12,
        "abbreviation": "SAC",
        "city": "Sacramento",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Sacramento Kings",
        "name": "Kings"
    },
    {
        "seed": 11,
        "abbreviation": "SAS",
        "city": "San Antonio",
        "conference": "West",
        "division": "Southwest",
        "full_name": "San Antonio Spurs",
        "name": "Spurs"
    },
    {
        "seed": 2,
        "abbreviation": "TOR",
        "city": "Toronto",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Toronto Raptors",
        "name": "Raptors"
    },
    {
        "seed": 6,
        "abbreviation": "UTA",
        "city": "Utah",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Utah Jazz",
        "name": "Jazz"
    },
    {
        "seed": 9,
        "abbreviation": "WAS",
        "city": "Washington",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Washington Wizards",
        "name": "Wizards"
    }
]
const nbaTeamDataArr = []

var nbaTeamRankedSorted = nbaTeamRankedArr.sort((a, b) => (a.seed > b.seed) ? 1 : -1)

   fetch("https://www.balldontlie.io/api/v1/teams", requestOptions)
    .then(response => {
       return response.json()
    }) 
    .then(result => getTeamData(result.data))
    .catch(error => console.log(error));

function getTeamData(data){
    data.map(function(currentTeam){
        nbaTeamDataArr.push(currentTeam)
    })
}

// Roster Finder
function getRoster(teamId) {
    let newTeamId = rosterContainer(teamId)
    fetch(`https://api-nba-v1.p.rapidapi.com/players/teamId/${newTeamId}`, requestOptions2)
    .then(response => {
       return response.json()
    }) 
    .then(result => findPlayerRoster(result.api.players, newTeamId))
    .catch(error => console.log(error));
}

// Player Finder API

function getSpecificPlayer(first, last){
    fetch("https://api-nba-v1.p.rapidapi.com/players/league/standard", requestOptions2)
    .then(response => {
        return response.json();
    })
    .then(result => {
        printPlayerBio(result.api.players, first, last)
    })
    .catch(err => {
        console.log(err);
    });
}

function findPlayerStats(first, last){
    fetch(`https://nba-players.herokuapp.com/players-stats/${last}/${first}`, requestOptions)
        .then(response => response.json())
        .then(result => printPlayerStats(result))
        .catch(error => console.log('error', error));
}
