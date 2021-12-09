import Nav from './components/nav/Nav';

import './App.css';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="container-fluid main-container">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
