# myFlix-client
myFlix React App
<br>
Added Build Tool Parcel
<br>
Points to src/index.html
<br>
Terminal Command: `parcel src/index.html`

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
              <td>A text message saying user has been deleted</td>
            </tr>
          </tbody>
        </table>
