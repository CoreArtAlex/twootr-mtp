Mid Term Project - Twootr
Twootr is a Single Page Application that will allow the user to read and create twoots. No user authentication or registration is required.

Screenshot of Twootr App

Requirements
Tech requirements:

You should use React for this application.
For API requests, you must use Axios.
For styling components, you must use Styled Components.
Feature requirements:

User must be able to change name.
User must be able to read twoots.
User must be able to create twoots.
All the twoots shown in the application, must come from server.
Every new twoot must be sent to server to be saved.
User cannot post a new twoot empty or with more than 140 characteres.
Counter must update after every change on the input.
User must be able to like, save or retwoot each twoot. No need to store this information in the server.
If the user clicks on the write a new text, it should focus on the input.
Time must show how many days ago was posted the twoots (days)
Endpoints
GET:

/twoots - returns all the twoots saved in the server.
POST:

/twoot - save new twoot in the server and returns same data with ID. Expected sent data:
{newTwoot: {
    author:"Henry David Thoreau",
    content:"Many men go fishing all of their lives without knowing that it is not fish they are after.",
    authorSlug:"henry-david-thoreau",
    dateAdded:"2022-07-06"
}}
Avatars should use:

`https://avatars.dicebear.com/api/bottts/${authorSlug}.svg`;
Styles (optional)
Colors:

Navbar / Button : #711a75
Background Header : #413f42
Background Main : #f4f1ec
Active Icons : f73d93
Font / Box shadow : #888888
Fonts (Google):

Logo / Button : Permanent Marker
Main : Kanit
Additional Screenshots
Twoot hovered and icon active

Twoot with over 140 characteres

Editing user name

Task 1: Setup
Create a new React app: npx create-react-app twootr ➡️ you can change the app name if wanted.
Install dependencies: cd twootr npm install axios styled-components
Clean the project, removing all the unnecessary files.
Add proxy to package.json file. "proxy":"http://localhost:8080/"
Run the app to check if no errors: npm start
Create a new folder frontend and move the whole application inside that.
Initialize node in the root of the project npm init -y
Install server dependencies npm install express cors uuid axios nodemon concurrently
Add type in package.json "type":"module"
Add scripts in package.json
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon server.js",
    "client": "cd frontend && npm start",
    "dev": "concurrently  \"npm run server\" \"npm run client\""
  }
Create new file server.js and copy + paste from this link
Run the app to check if no errors npm run dev
If everything works, add your teammates and I as collaborators and make the repository as private.
Task 2: Make a plan
Create the file PLAN.md
Must include topics:
User Stories / Job Stories
Data Structure
HTML Structure
Component Structure
Data Map
Styling Patterns (Fonts and Colors)
You can use as a reference the file created in class for myTrakr exercise.

Task 3: HTML Structure
Based on the mockup file, create all the elements of the page in the render of App Component (App.js).
Task 4: Component Structure
Create a new folder called components inside src folder.
Break your HTML structure into small Components and create a file for each of these Components.
To follow best practices, you should name each file with first letter upper case. Ex: App.js, NewTwoot.js, etc. You can choose to use .js or .jsx files for Components.

Add the respective HTML inside each file.
Task 5: States
Based on your data map, create the states in the Components that will hold the data and pass it down to child components using props.
Task 6: Get data from server
Make an API request using Axios to get all the twoots saved in the server.
Update the state with the new data.
Task 7: Render data
Calculate how many days ago the twoot was posted. If 0 days, show posted today
Using the data stored in the each state, render it on the UI.
Task 8: Update state
Add event listeners for each of the elements that you need to track. For example: Twoot input, character counter, etc.
Update the state with the new values.
Task 9: Submit new Twoot
In case of empty twoot or over 140 characters, twoot button should be disabled and submit should not happen.
Make a post request using Axios, including the data to be saved.
After response received, update twoots list in the state.
Task 10: UI Interactions
When the user clicks on the write a new text, it should focus on the input.
When the user hovers the twoot, it should change the styling based on the mockup.
When the user clicks on the icons (🏳️, 🔄, 💗), it should change the styling.
Task 11: Styled Components
Update or create styles using Styled Components.
Task 12: Prepare your presentation
Show PLAN.md file, explaining your decisions
How was the project divided?
What you learned?
What you struggled the most?
What would you have done differently?