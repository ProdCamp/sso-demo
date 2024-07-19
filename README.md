# ProdCamp SSO demo

This demo illustrates how to provide a seamless user experience when transitioning from your app to your public roadmap hosted by ProdCamp.

## Prerequisites
Node.js installed on your machine

# Setup Instructions


## Clone the Repository
`git clone https://github.com/your-repo/prodcamp-sso-demo.git`
`cd prodcamp-sso-demo`

## Install Dependencies

`npm install cors jsonwebtoken crypto`


## Run the Backend Server

`node app.js`

This will start an API server on port 3000 that returns a token generated for a randomly generated email. For demonstration purposes, the email is generated randomly. In a real-world scenario, you would use the email of your currently logged-in user.

## Open the Frontend

Navigate to the public folder.
Open index.html in your browser.


## How It Works
Backend (app.js): The backend server generates a JWT token for a randomly generated email and serves it through an API endpoint.

Frontend (index.html): The frontend fetches the token from the backend API and redirects the user to the public roadmap using the fetched token.


## Customizing for Your Workspace
To use your own roadmap, retrieve your Workspace ID and Workspace Secret from the ProdCamp settings (only the workspace owner can see the Secret key).

Replace the placeholders in the code with your actual Workspace ID and Secret Key.
