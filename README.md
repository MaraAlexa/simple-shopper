# Front End webshop with React and Mobx
## Description
This aims to be a complete solution for selling products online.It has two main parts - one is the webshop itself and the other is a password protected admin section which is used for managing the store. It uses a backend API to persist the data and process the orders. The payment is done via Stripe.
## Technologies used
- React for rendering
- Mobx for state management
## Services used
- Cloudinary - for storing images
- Stripe - payment processing
- Rails Backend API for persisting data
## Authentication for Admin
- The Authentication is done via json web tokens (JWT). The way it works is that for each admin created in the backend (email + password) a token is generated. Access to the admin account is done by providing the appropriate email and token. For easy access (login) the email and web token are stored in localStorage and cleared from localStorage when logging out.
## Hosting
- The app is hosted by the now service: https://zeit.co/now

[see it online](https://build-ukdrdmltvs.now.sh)
