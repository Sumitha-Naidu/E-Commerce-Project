# MERN Digital-kadai

# Steps

1. Create React App
2. Create Git Repository
3. Display the Products
4. Add Page Routing
   i. npm i react-router-dom
   ii. create route for home screen
   iii. create route for product screen
5. Create Node js server
   i. run npm init in root folder
   ii. Update package.json set type module
   iii. Add .js to imports
   iv. npm install express
   v. create server.js
   vi. add start command as node backend/server.js
   vii. require express
   viii. create route for / return backend is ready.
   ix. move products.js from frontend to backend
   x. create route for /api/products
   xi. return products
   xii. run npm start
6. Fetch Products from Backend
   i. set proxy in package.json
   ii. npm install axios
   iii. setup useState hook
   iv. setup useEffect hook
   v. setup useReducer hook
7. Managing State by Reducer hook
   i. define reducer
   ii. update fetch data
   iii. get state from useReducer
8. Add Bootstrap UI framework
   i. npm install react-bootstrap bootstrap
   ii. update App.js
9. Create Product and Rating Component
   i. Create Rating component
   ii. Create Product component
   iii. Use Rating component in Product Component
10. Create Product Details Screen
    i. Fetch product from backend
    ii. Create 3 columns for image, info and action
11. Create Loading and Message Component
    i. Create Loading Component
    ii. Make use of Spinner component
    iii. Create Message Component
    iv. Create utils.js to define getError function
12. Implement Add to Cart functionality
    i. Create React Context
    ii. Define Reducer
    iii. Create Store Provider
    iv. Implement Add to Cart Button Click Handler
