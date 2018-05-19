# AI Bot Workspace
An Electron application which includes testing workspaces for most Riddles.io competitions.

## 3.0.0
This branch contains the work-in-progress version of 3.0.0. These are my plans:
- A better, more consistent codebase that'll be easier to maintain later-on. 3.0.0 will use Vue and strict linting rules to help achieve that.
- A redesign to give it a better look. I'm planning on going with a Material Design theme with [Vuetify](https://vuetifyjs.com/en/). I also want it to be possible to toggle a dark mode.
- Turn-by-turn logs (somewhat like CodinGame does). Requires a match wrapper change so it can be configured to give output as an array instead of a string.
- Round-robin tournaments between >2 bots. This has been suggested by Pruzelius a long time ago, and I said that I would be working on it, but I never got to a full implementation.
- Keyboard shortcuts to perform common tasks like running a match. Maybe they will be configurable, maybe not.
- Making it easier to add new competitions. Currently this process is quite cumbersome, and if the match viewer is updated it all has to be done again. It should be possible to automate this when you know a match id of the competition and a link to the GitHub engine repository. This could even be done by the application the first time a competition is opened (I got a working prototype on how to transform the matchviewer's resources programmatically to make them work offline). With that also comes a periodic check for updates, so there is no longer a need for application updates when a competition match viewer or engine is updated.

## Screenshots
### Game of Life and Death competition window
![Competition](https://i.imgur.com/LZgKIpF.png)

### Game of Life and Death settings window
![Settings](https://i.imgur.com/ozLfy8n.png)

## Installation
Make sure you got Java 8 installed and confirm that the `java` command is available via the command-line.

There are two ways to install the application:
1. Go to the [Releases](https://github.com/jmerle/ai-bot-workspace/releases) page and download the latest version for your operating system.
2. Install [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/), clone this repository, `cd` into it and install the dependencies by running `yarn`. Start the application using `yarn start`.

### Install notes
When installing using the first method, note that the application is unsigned. On Windows this means SmartScreen might pop up, which you can get through by clicking "More Info" after which the "Run Anyways" button becomes available. On macOS, the first time you run the application you'll need to manually go to the /Applications folder, right click on the AI Bot Workspace icon and click "Open". This pops up an alert asking you whether you want to run the application, which you need to confirm.

## Updating
If you installed via the first method, it depends on your operating system. If you are using Linux or Windows, you can automatically update by clicking on the link in the bottom-left of the portal (on Windows it replaces your current installation, on Linux it places the new AppImage in the same directory as the current one).

On macOS, this is not possible due to the fact that the application is not signed. To update on macOS, go to the [Releases](https://github.com/jmerle/ai-bot-workspace/releases) page again and manually install the latest version (clicking on the link in the bottom-left of the portal will take you to that page aswell).

If you installed via the second method, the only thing you need to do when updating is running `git pull` and `yarn`.

## Supported competitions
- [Hack Man](https://booking.riddles.io/competitions/hack-man)
- [Ultimate Tic Tac Toe](https://playground.riddles.io/competitions/ultimate-tic-tac-toe)
- [AI Block Battle](https://playground.riddles.io/competitions/ai-block-battle)
- [Go](https://playground.riddles.io/competitions/go)
- [Four In A Row](https://playground.riddles.io/competitions/four-in-a-row)
- [Ms. Hack-Man](https://booking.riddles.io/competitions/ms.-hack-man)
- [Light Riders](https://playground.riddles.io/competitions/light-riders)
- [Texas Hold 'em](https://playground.riddles.io/competitions/texas-hold-%27em)
- [Game of Life and Death](https://starapple.riddles.io/competitions/game-of-life-and-death)
- [Crypto Trader](https://playground.riddles.io/competitions/crypto-trader)

## Adding new competitions or features
Read the [Contributing](CONTRIBUTING.md) document.

## Credits
This application would not be possible without the game engines, match wrapper and match viewers. All of these were made by the awesome people at [Riddles.io](https://www.riddles.io/). Also, thanks to [Jim van Eeden](https://github.com/jimvaneeden) for helping out on keeping the application up-to-date.
