# Project name : Kwilox-app

## Tagline
Kwilox is a relaxation center, It is known for selling expensive drinks and confectionery.

### Team Members
- Susan Bamgbade  Role: Researcher and back-end developer      email:  pricelessbkinks@gmail.com
-       Role: Researcher and back-end developer       email:    

### Technologies
These are the technologies that will be used for this project:
* Mongodb
* Postman
* NodeJS
* expressJS
* Javascript
* fetchApi

### Challenge statement
Users:
1. Can register with the following data Phone Number, Age, Email, First Name,
Last Name and Password
2. Can log in using your Email address and Password
3. Can see all available items (drinks and confectionery) uploaded by Admin.

Admin:
• Can see all registered users
• Can search for users using their email addresses.
• Can post a list of available items (drinks and confectionery) so users logged in
can see

### Risks
There are no major risks encountered yet during the starting of the project.

### Infrastructure
- We would be using same repository and different branches so as to work on the project individually and when done we will merge together to achieve our goals

- We would be using postman to test our database and deploy it to heroku or github

- We would be using just postman tools to test and populate our data.

### Existing Solutions
Passwords are no fun. Kwilox features a passwordless user authentication process managed by Auth0. The process works as follows:
User enters email (for login) or both email + username (for signup). Front-end initially sends email/username to back-end.
If logging in, and an account does not exist with the given email, the back-end returns a redirect code, and the user is directed to sign-up.
Otherwise, the back-end generates and returns a challenge token associated with the email.
Front-end temporarily stores challenge tokens in localStorage, then uses the Auth0 API to send a login email to the user. The login email includes a random code that the user must enter to verify the account.
Upon entering the verification code, the user is redirected to the home page of IdeaDog. The redirect occurs on a URL hashed by Auth0 which the front-end parses to retrieve the user's Auth0 profile.
Front-end pulls up a challenge token from localStorage and returns it to the back-end with the verified email. Back-end generates and returns a bearer token in the form of a cookie.
After being returned to the back-end, the challenge token is cleared from localStorage.
The bearer token has been set and the user can fully access their profile!


kindly vist : https://documenter.getpostman.com/view/27094454/2s93Y6sK8S
