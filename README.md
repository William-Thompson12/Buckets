# Buckets
## Front-End Project - Digital Crafts

## Status: Currently Running
### Rosters/Standings Updated 2019

https://buckets-dc.netlify.app/

**Hello! Welcome to my front-end project "Buckets"**

Buckets is a one stop shop for everything basketball.
This ranges from checking players stats or what college they joined, to finding great basketball minds.

**Who am I?:**

    - Hi, my name is William Thompson!
    - In the process of writing this I'm currently enrolled in a 26 Week flex coding bootcamp from Digital-Crafts.
    - This project is to help demonstrate what i've learned so far in the course along as a tool for practice and growth.

**Making the Project:**

    - Why I chose to work by myself? (We were allowed up to 4 people a team)

        - I felt it would be best to really challange myself and see how much I have learned so far.
        - Making this project would require me to have a true understanding of front-end and back-end programming.
        - Working with a team would have also worked, but for a project like this I felt it was best that I could code exactly how I wanted my website to look and feel. *With a quality I can control*

    - What have I learned?

        - Although throughout this entire process I kept hitting road blocks and what seemed like never ending issues.
        - I was able to get better understanding and really build my base knowledge up on API's and some issues that can come with them.
            ^ I had every error from 400-406 and even a 429. Lucky I was able to solve the 429 by making rosters load on click avoiding spamming the server for request of every player.
        - Learning through trial and error ways to format my code to be more efficent and easily adaptable.
            ^ Specifically setting up function to render data where errors can be easily identified in each step of the function.
            ^ Debugging my code and learning general areas to look out for when dealing with specific problems. (Console.log was very useful, Chrome Dev Tools as well)
    
    - What would I do differently
        - I had very many issues specifically with making a responsive design across all devices and sizes, this is something I still personally find my self struggling with.
            - Bootstrap gives a very easy way to make a responsive website, I will continue to prctice with Bootstrap in order to make my future work responsive and clean.
        - I found myself wasting time by getting a feature or design perfect then ending up changing it later. 
            ^ I would try to avoid speanding time on design and looks until I have the core features functionally working.
        - Asking for help sooner.
            ^ I am a guy who enjoyes solving problems through googling or trial and error as mentioned earlier.
            ^ This caused me to spend hours on an issue that could have been solved if only I had contacted my peers and teachers after a certain amount of time.

**Repository Contents**

- A total of 4 HTML(one for eachpage), 4 CSS(one for eachpage), 
    4 Javascript files(One deals with functions primarly fetching API data on the "Data.js" file, 
    the other renders data to the screen "script.js", last two contains the login functions "login.js/signup.js")

- Favicon_io folder for the tab icon

- An Img folder containing all the background pictures and other resources that may have been used.

- API's: 
    - www.balldontlie.io(Team Data)
    - https://nba-players.herokuapp.com/ (Head Shots for Most NBA Players)
    - https://api-nba-v1.p.rapidapi.com/ (Player Statistics, Team Statistics, Player Bio)

**Features & How they work:**

    - Main/Home.html:

        - Side Nav:
            - The side nav is composed of easy to read to links which redirect you to content on the page or to other websites.
            - At the bottom two links which link to my personal GitHub and Linkedin.

        - Content:
        
            - Profile:
                - Popup Profile options with a smaller version sticking to the top right
                - Customizable username and icon
                - A signup and Login in system supported using Firebase
                - Users are able to login using a personal email and password
                - Also able to login with google accounts

            - Standings
                - Data is fetched from API -> "https://www.balldontlie.io/api/v1/teams" and is sorted by the seed using .sort -> "nbaTeamRankedSorted" in data.js.
                - Two functions -> renderTeamStandingsEast(nbaTeamDataArr), renderTeamStandingsWest (nbaTeamDataArr) 
                    takes the sorted array and is mapped based on each teams division.
                - Each team name is selectable and takes you to the teams logo and roster.

            - Player Stats
                - Data is fetched from API -> `https://nba-players.herokuapp.com/players-stats/${last}/${first}` and is sorted by the user input from searchForm in PlayerStats.
                - A second function -> "printPlayerStats(result)" takes the result and uses the data to render stats to the graph on the screen.
                - Data fetched from function getSpecificPlayer() using the API -> "https://api-nba-v1.p.rapidapi.com/players/league/standard", 
                    takes the same user input and renders the bio of player using -> printPlayerBio(playerData, playerGivenFirst, playerGivenLast)
                - A button linked to another popup display -> a key for stats.

            - Team Logos
                - Data is fetched from API -> `https://api-nba-v1.p.rapidapi.com/players/teamId/${teamId}`
                - Then function -> findPlayerRoster(playerTeam) takes each player and maps them.
                - Link to wiki at the bottom of the page for more information on each team.

            - NBA Experts
                - Bootstrap Carousel of different basketball figures.
                - Each with a basic summary and links to socials.

            - History of NBA
                - Bootstrap "Listgroup" containg summary of the nba by the decade in a easy to read format.

            - NBA Rules
                - Iframe connected to the onclick of button "rule-expand" to display on click.
                - Downloadable PDF.

            - Other Website Links:
                - Shop NBA
                    - <a> tag linking to a new tab of the NBA store.

                - Play Fantasy
                    - <a> tag linking to a new tab of ESPN Fantasy play.

                - Tickets
                    - <a> tag linking to a new tab of SeatGeek ticket selection with all NBA Teams.

            -BlackMamba Button:
                - Just a little tribute to the late great Kobe Bryant. |R.I.P|
                - <a> tag linking to a new tab of Kobe Tribute.

        - Footer
            - Every page also comes with a footer containing two links which link to my personal GitHub and Linkedin.

    - Index.html:

        - Top-Nav:
            - Simple Bootstrap Nav with links to login and signup and websites title.

        - Content:
            - Bootstrap Jumbotron
            - Custom CSS webkit animation of a basketball bouncing 
        
        - Footer
            - Every page also comes with a footer containing two links which link to my personal GitHub and Linkedin.

    - signup/login.html:

        - Content:
            - User forum that conects to Firebase and allows users to register or login.
            - Link to homepage and login or signup. 
        
        - Footer
            - Every page also comes with a footer containing two links which link to my personal GitHub and Linkedin.

**Stylesheets & Whats Linked:**

    - Bootstrap
    - FontAwesome
    - GoogleFonts

    - Index.html
        - Styles.css
        - Script.js
        - Data.js
        - Login.js

    - Login.html
        - Signin.css *Poor Naming Choice I Know*
        - Login.js

    - Signup.html
        - SignupStyles.css *Poor Naming Choice I Know*
        - Signup.js

    - Homepage.html
        - homepageStyles.css *Poor Naming Choice I Know*
