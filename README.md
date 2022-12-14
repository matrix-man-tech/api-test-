# REST_API Practical Test

## Instructions to run the application

* To install dependencies run 'npm install' on the terminal after getting into backend folder

* To start the application  run 'npm start' on the terminal 

## Api requests for each requirements

* http://localhost:5000/api/users/signup  -- User Signup

    For signup you need to give the firstname,lastname,email and password in the request body

* http://localhost:5000/api/users/login   -- User Login

    For logging in you need to give the email and password in the request body

* http://localhost:5000/api/users/me      -- View User Profile

    To view the user profile section you need to attch the jwt token in thr headers

* http://localhost:5000/api/users/random-joke  -- For Getting random jokes for authenticated user

    To view the random joke you need to attch the jwt token in thr headers

* http://localhost:5000/api/users/logout   -- User Logout



## Services used:
* Node.js
* Express.js
* MongoDB
* JWT
* Mongoose
* bcryptjs

