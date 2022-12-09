import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropDown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store/store';
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SignInScreen.jsx';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer
          position="bottom-center"
          limit={1}
        />
        <header>
          <Navbar
            bg="dark"
            variant="dark"
          >
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Digital Kadai</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link
                  to="/cart"
                  className="nav-link"
                >
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge
                      pill
                      bg="danger"
                    >
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropDown
                    title={userInfo.name}
                    id="basic-nav-dropdown"
                  >
                    <LinkContainer to="/profile">
                      <NavDropDown.Item>User Profile</NavDropDown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropDown.Item>Order History</NavDropDown.Item>
                    </LinkContainer>
                    <NavDropDown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropDown>
                ) : (
                  <Link
                    className="nav-link"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route
                path="/"
                element={<HomeScreen />}
              />
              <Route
                path="/signin"
                element={<SignInScreen />}
              />
              <Route
                path="/cart"
                element={<CartScreen />}
              />
              <Route
                path="/product/:slug"
                element={<ProductScreen />}
              />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center"> All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
