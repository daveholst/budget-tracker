# Budget Tracker

This is a Budget Tracking app in form of a PWA (Progressive Web Application). It it allows user to use the app in offline mode, leveraging a local database whilst the app is in offline mode. Once the app is connected back online, it will sync the locally stored data with the mongoDB server.

## Table of Contents:

- [Live Deploy](#Live-Deploy)
- [Screenshots](#Screenshots)
- [Technology Stack](#Technology-Stack)
- [Usage](#Usage)
- [Tests](#Tests)
- [Questions](#Questions)

## Live Deploy

A live deploy of this app can be found on Heroku at: https://holst-budget-tracker.herokuapp.com/

## Screenshots

#### Animated Gif Screenshot:

![gif of budget tracker](./assets/budget-tracker.gif)

## Technology Stack

- idb: https://github.com/jakearchibald/idb
- heroku: https://www.heroku.com/
- mongo atlas: https://www.mongodb.com/cloud/atlas
- mongoose: https://www.npmjs.com/package/mongoose
- express: https://www.npmjs.com/package/express
- WesBos Linting Config: https://github.com/wesbos/eslint-config-wesbos

## Usage

This software needs access to a mongoDB database for storage of persistent information. For local deployment/testing all database credentials should be stored in `.env`. An example has been provided.

To use the program simply run the program from your preferred terminal and follow the prompts.

```bash
npm start
```
## Tests

No tests have been written for this software.

## Questions

If you have any further questions you can get in contact with the creator through the following methods:

- https://github.com/daveholst/
- contact@daveholst.dev
