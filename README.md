# Getting Started with App

This project consists of a a personalized dashboard with a profile picture, details, weather component and to do list.

## Authors

- [Sai Vaishnavi Jupudi]- _(Developer)_

### Prerequisites

To have a local copy of this tutorial up and running on your local machine, you will first need to install the following software / libraries / plug-ins
​
```
Node Package Manager (NPM)
A browser (ex:chrome)
A code editor(ex: vscode)
Git Bash
```

### Installing

Follow the below steps to install and run the application in the local environment

```
git clone https://github.com/vaishnavijupudi/personal-dashboard.git
cd personal-dashboard
npm install
npm start
```

```
Check the URL: http://localhost:3000 for the demo
```

## Built With

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Node Package manager
- [ReactJs](https://reactjs.org/docs/create-a-new-react-app.html) - The frontend framework
- [MaterialUI](https://mui.com/material-ui/) - The styling framework used.
- [OpenWeatherApi](https://openweathermap.org/api) - The weather api for data
- [Nominatim](https://nominatim.org/) - The api used to get latitude and longitude when city name is given

## Home Page
- The Page consists of several features
- The Page has a to do list which allows to create a list with tasks
- The to do list allows user to make edit, delete and done
- There are two weather components one component displays the current weather data and other one allows user to choose a city 
- For the implementation of user selected weather another api is called to fetch the latitude and longitude which is then passed to weaher api