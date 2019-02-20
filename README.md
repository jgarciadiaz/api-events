Rest API
====

API exposing /events endpoint

Setup
----

Install

`npm`

Lint Code

`npm run lint`

Run api

`npm start`


How to query endpoint
----

Events

`http://0.0.0.0:49160/events?query={event{uuid,title,description,url,image,score}}`

Weather Report

`http://0.0.0.0:49160/weather?query={report{celsius,fahrenheit,pressure,relativeHumidity,lightLevel,created}}`

Weather

Docker commands
----

Build docker image

`npm run docker:build`

Run docker instances based on an image

`npm run docker:run`

Push docker image to repo

`npm run docker:push`

Pull docker image from repo

`npm run dockder:push`

Resources
----

- [Medium Grapql Tutorial](https://medium.com/@gethylgeorge/setting-up-a-simple-graphql-server-with-node-express-and-mongoose-ff8a1071af53)
- [Redis Tutorial](https://community.risingstack.com/redis-node-js-introduction-to-caching/)
