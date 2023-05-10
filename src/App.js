// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const Apps = () => {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/logout", element: <TopNavbar /> },
    // ...
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <Apps />
    </Router>
  );
};

export default App;
