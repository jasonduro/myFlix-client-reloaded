# myFlix App
- Frontend: Written with JavaScript/React; hosted on Netlify.
- Backend (Server Logic): Written with Node/Express; hosted on Heroku.
- Backend (Database): MongoDB for users and movies; stored in MongoDB Cloud.
<br>

## Objective
Using React, building on top of the API I created from the server-side, created the front-end or client-side of the application. 

Live Netlify Link: 
https://myflix-app-reloaded.netlify.app/

![myFlix React](https://github.com/jasonduro/myFlix-client-reloaded/assets/38364361/1f9631d5-d4c9-4e3b-a1c3-a27eb5257dd0)

## User Stories
* As a user, I want to be able to access information about movies so that I can learn more about movies I’ve watched or am interested in.
* As a user, I want to be able to create a profile so I can save data about my favorite movies.

## Technical Requirements
* The application must be a single-page application (SPA)
* The application must use state routing to navigate between views and share URLs
* The application must give users the option to filter movies using a “search” feature
* The application must use Parcel as its build tool
* The application must be written using the React library and in ES2015+
* The application must use Bootstrap as a UI library for styling and responsiveness
* The application must contain function components
* The application must be hosted online
* The application may use React Redux for state management of at least one feature (i.e.,
filtering movies)

Live Netlify Link: 
https://myflix-app-reloaded.netlify.app/

 <h2>API Documentation</h2>
        <table>
          <thead>
            <tr>
              <th>Business Logic</th>
              <th>URL</th>
              <th>HTTP Method</th>
              <th>Request Body Data Format</th>
              <th>Response Body Data Format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Return a list of ALL movies to the user</td>
              <td>/movies</td>
              <td>GET</td>
              <td>None</td>
              <td>A JSON object holding data about all the movies</td>
            </tr>
            <tr>
              <td>Return data (image URL, title, description, director, genre) about a movie to the user</td>
              <td>/movies/:Title</td>
              <td>GET</td>
              <td>None</td>
              <td>A JSON object holding data about a specific movie containing a description, genre, director, image url, and featured or not</td>
            </tr>
            <tr>
              <td>Return data about a genre (description) by name/title (e.g. Thriller)</td>
              <td>/movies/genre/:GenreName</td>
              <td>GET</td>
              <td>None</td>
              <td>A JSON object holding data about genre</td>
            </tr>
            <tr>
              <td>Return data about a director (bio, birth year, death year) by name</td>
              <td>/movies/director/:DirectorName</td>
              <td>GET</td>
              <td>None</td>
              <td>A JSON object holding data about the director</td>
            </tr>
            <tr>
              <td>Allow new users to register</td>
              <td>/users</td>
              <td>POST</td>
              <td>                
                  {
                  "Username" : "Mikey",
                  "Password" : "password",
                  "Email" : "email@email.com",
                  "Birthday" : "YYYY-MM-DD"
                  }
                </td>
              <td>A JSON object holding data about the user to add</td>
            </tr>
            <tr>
              <td>Allow users to update their user info (username, password, email, date of birth)</td>
              <td>/users/:Username</td>
              <td>PUT</td>
              <td>
              {
                  "Username" : "Mikey",
                  "Password" : "password",
                  "Email" : "email@email.com",
                  "Birthday" : "YYYY-MM-DD"
              }
              </td>
              <td>A JSON object holding data about the user</td>
            </tr>
            <tr>
              <td>Allow users to add a movie to their list of favorites</td>
              <td>/users/:Username/movies/:_id</td>
              <td>POST</td>
              <td>None</td>
              <td>An alert message saying movie title has been added to FavoriteMovies</td>
            </tr>
            <tr>
              <td>Allow users to remove a movie from their list of favorites</td>
              <td>/users/:Username/movies/:_id</td>
              <td>DELETE</td>
              <td>None</td>
              <td>An alert message saying movie has been removed</td>
            </tr>
            <tr>
              <td>Allow existing users to deregister</td>
              <td>/users/:Username</td>
              <td>DELETE</td>
              <td>None</td>
              <td>An alert message saying user has been deleted</td>
            </tr>
          </tbody>
        </table>
