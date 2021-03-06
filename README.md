# Github User Browser

Single Page application (SPA) which displays a list of Github users by using Github public API
with an option to display detailed user data on a separate page

## Demo Link
https://emrexhepi.github.io/github-user-browser/
 - Warning: there is a api call limit from github on unauthorized github users keep that in mind.

### Stack Used
 - React ✔
 - Redux ✔
 - React Router ✔
 - HTTP Library (Axios) ✔
 - Bootstrap (MDB/React) ✔
 - Jest, Enzyme ✔

### Objectives
 1. Project starts up correctly and compiles without errors. ✔
 2. A list of github users (avatar, login, details button) is displayed. ✔
   - a. Show the loading spinner before all users have been fetched. ✔
   - b. “Load more users” feature ✔
 3. When details button is clicked a new page with information about the user is shown. ✔
 Fields (id, avatar, login, html_url) with a back button to go back to the initial list of users. ✔
 4. Single user page should display the user data after refreshing the page. ✔
 5. Provide a test for at least 1 react component and 1 reducer. ✔

### Tests locations
 - Component Test:  Test: src\components\Avatar\Avatar.test.js
 - Reducer Test: src\store\reducers\userDetails.test.js

### Github API

#### Api Documentation
 - https://developer.github.com/v3/#link-header

#### User list
 - https://api.github.com/users?since={start}&per_page={end}

#### User Details
 - https://api.github.com/users/{login}
