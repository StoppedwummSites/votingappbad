
# A bad coding app

This is a bad written coding app with express, nodejs and pm2




## Installation

Install my-project with npm

```bash
  git clone https://github.com/StoppedwummSites/votingappbad.git
  cd votingappbad
  npm install
```
    
## Deployment

To deploy this project run

```bash
  npm run test
```
This will start the app on <localhost:8080>

To stop the app simply run

```bash
  pm2 stop all
```
## FAQ

#### Where is the example vote?

<localhost:8080/poll/voteid=1>

#### Where are the results for the example vote?

<localhost:8080/poll/getresults?voteid=1>

If you want to reset on the fly, please use this url: <localhost:8080/poll/getresults?voteid=1&r=1>

