# tally-backend
backend app server for the tally mobile app

## to run application
1. Start up mongodb (see database set up) either via brew services run or alias'ed command to start mongodb-community
2. Run `npm run start`

## database set up
### For mac users:
1. Install homebrew:
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2. Install mongodb:
```
brew install mongodb-community
```
3. Start mongodb via: `brew services run mongodb-community` or stop via `brew services run mongodb-community`.

### For window users:
1. Install [MongoDB CE v5.0.6](https://www.mongodb.com/try/download/community).

### For WSL users:
1. Follow [these instructions](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb) to install MongoDB.
