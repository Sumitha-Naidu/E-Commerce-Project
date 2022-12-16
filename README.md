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
13. Complete Add to Cart
    i. Check if item exists
    ii. Check the count in Backend
14. Create Cart Screen
    i. Create 2 columns
    ii. Display item list
    iii. Create action column
15. Complete Cart Screen with functionality
    i. Click handler for in//dec items
    ii. Click handler to remove item
    iii. Click handler for Checkout button
16. Create SignIn Screen
    i. Create SignIn form
    ii. Add Email and password
    iii. Add SignIn button
17. Connect to MongoDB database
    i. create atlas monogodb database
    ii. install local mongodb database
    iii. npm install mongoose
    iv. connect to mongodb database
18. Seed Sample products
    i. Create Product Model
    ii. Create User model
    iii. Create seed route
    iv. Use route in server.js
    v. seed sample product
19. Seed Sample Users
    i. Create User Model
    ii. Seed sample users
    iii. Create User routes
20. Create Signin backend API
    i. create signin api
    ii. npm i jsonwebtoken
    iii. define generateToken
21. Complete SignIn Screen
    i. Handle Submit Action
    ii. Save token in store and localstorage
    iii. Show Username in header
22. Create Shipping Screen
    i. Create form inputs
    ii. Handle save shipping address
    iii. Add checkout wizard bar
23. Create Sign Up Screen
    i. Create input forms
    ii. Handle submit
    iii. create backend api
24. Implement Select Payment Method Screen
    i. Create input form
    ii. handle submit
25. Create Place Order Screen
    i. Show cart items, Payment and Address
    ii. Handle place order action
    iii. Create order api
26. Implement Place Order Action
    i. Handle place order action
    ii. Create Order api
27. Create Order screen
    i. Create backend api for order/:id
    ii. Fetch order api in frontend
    iii. Show order information in 2 columns
28. Pay Order using PayPal
    i.generate paypal client id
    ii. create api to return client id
    iii. install react-paypal-js
    iv. use PayPalScript Provider in index.js
    v. use usePayPalScriptReducer in Order Screen
    vi. implement load PaypalScript function
    vii.render paypal button
    viii.implement onApprove payment function
    ix. create pay order api in backend
29. Display Order History
    i. Create Order screen
    ii. Create Order history API
    iii. Use API in the frontend
30. Create Profile Screen
    i. get user info from context
    ii. show user information
    iii. create user update api
    iv. update user info
31. Publish To Heroku
    i. create and config node project
    ii. serve build folder in frontend folder
    iii. Create heroku account
    iv. connect it to github
    v. Create mongodb atlas database
    vi. Set database connection in heroku env variables
    vii. Commit and push
32. Add Sidebar and Search Box
    i. Add sidebar
    ii. Add search box
33. Create Search Screen
    i. Show filters
    ii. Create api for searching products
    iii. Display results
34. Create Admin Menu
    i. define protected route component
    ii. define admin route component
    iii. add menu for admin in header
35. Create Dashboard Screen
    i. create dashboard ui
    ii. implement backend api
    iii. connect ui to backend
36. Manage products
    i. Create products list UI
    ii. Implement Backend API
    iii. fetch data
37. Create Product
    i. create products button
    ii. implement backend api
    iii. handle on click
38. Create Edit Product
    i. create edit button
    ii. create edit product ui
    iii. display product info in the input boxes
39. Implement Update Product
    i. create edit product backend api
    ii. handle update click
40. Upload Product Image
    i. create cloudinary account
    ii. use the api key in env file
    iii. handle upload file
    iv. implement backend api to upload
41. Delete Product
    i. show delete button
    ii. implement backend api
    iii. handle on click
42. List Orders
    i. create order list screen
    ii. implement backend api
    iii. fetch and display orders
43. Deliver Order
    i. add deliver button
    ii. handle click action
    iii. implement backend api for deliver
44. Delete Order
    i. add delete button
    ii. handle click action
    iii. implement backend api for delete
45. List Users
    i. create user list screen
    ii. implement backend api
    iii. fetch and display users
46. Edit User
    i. create edit button
    ii. create edit product ui
    iii. display product info in the input boxes
    iv. implement backend api
    v. handle edit click
47. Delete User
    i. add delete button
    ii. handle click action
    iii. implement backend api for delete
48. Choose Address On Google Map
    i. create google map credentials
    ii. update .env file with Google Api Key
    iii. create api to send google api to frontend
    iv. create map screen
    v. fetch google api
    vi. getUserLocation
    vii. install @react-google-maps/api
    viii. use it in shipping screen
    ix. apply map to the checkout screen
49. Email order receipt by mailgun
    1. create mailgun account
    2. add and verify your domain to mailgun
    3. install mailgun-js
    4. set api key in env file
    5. change pay order in orderRouter
    6. send email order receipt
