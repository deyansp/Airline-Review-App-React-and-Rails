# Overview
A full-stack project featuring a Ruby on Rails and PostgreSQL backend and a React frontend with stylized components, React Router, `useState` and `useEffect` Hooks. 
The app allows users to view all airlines, see a specific airline page, read and leave reviews.
The Rails API handles CRUD operations, calculates the average review score per airline, and returns JSON data based on the URL request. It uses the `FastJsonapi` gem and data serializers to create the JSON. It also validates data from review form submissions.
[Axios](https://github.com/axios/axios) (a promise-based HTTP client) is used in the `Airline` and `Airlines` React components to make GET and POST requests to the API. 
When submitting a review through the `ReviewForm` component, the API response data is used to dynamically update the page with the new review instead of making an additional request to fetch all reviews again. 
# UI Screenshots
Home Page:
![index](https://raw.githubusercontent.com/deyansp/airline-review-app-react-and-rails/main/main.png?token=AKMQMV3SU76HKZMCDM3E7HDA3SMGM)

Airline Page w/ Reviews:
![airline](https://raw.githubusercontent.com/deyansp/airline-review-app-react-and-rails/main/airline-view.png?token=AKMQMV7SLNIHXCOO5DKLKPTA3SMGG)
