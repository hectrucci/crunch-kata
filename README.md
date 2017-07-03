# Crunch-Kata


## Usage

Requires `node v6.10.0 (npm v3.10.10)`

You can use `nvm` to change Node versions.


Installation steps:

- Clone the repo
  ```
  git clone https://github.com/hectrucci/crunch-kata
  ```

- Go to project folder
  ```
  cd crunch-kata
  ```

- Insall dependencies:
  ```
  npm install
  ```

- Start project (development)
  ```
  npm start
  ```

- Go to `http://localhost:8080` (The port may vary if 8080 is not available, the console will tell you the url).

- For Testing
  ```
  npm test
  ```


#### Build the project for production

- Run
  ```
  npm run build
  ```

- This will create the /dist directory. You will need to have `http-server` installed gobally `(npm install -g http-server)` and then run `http-server dist`
## Crunch-kata Instructions


```
Problem description

You're working on an application that enables its users to explore survey data.
These surveys contain many questions, or variables, which may be grouped and organized in a
tree-like structure to make them easier to find. Your job is to develop a web component that
displays these variables following the specified order structure. (A different team is
implementing the interface for arranging the variables into that order--that's not your responsibility.)

The backend team has provided two test fixtures that you can use to start developing the feature.
The first one, variables.json, is the catalog of variables found in a dataset. The second, order.json,
represents the order in which these variables should be displayed. Each entry in order.json
maps to an item in variables.json.

Instructions

The deliverable should contain the following:

1. An AngularJS directive that displays the variable catalog following its hierarchical order.
It should be easy to tell the group to which a variable belongs.

2. A service that accepts a variable's name and returns the variable's position in the order.

3. A service that accepts a position in the order and returns a variable.

4. An HTTP layer that requests the two fixtures.

5. Automated tests that confirm that your code works.
```