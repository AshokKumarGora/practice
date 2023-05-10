// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
