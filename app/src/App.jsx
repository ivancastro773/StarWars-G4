import './App.css';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="container-fluid main-container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
