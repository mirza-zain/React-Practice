import './App.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <LeftSidebar />
        <Body/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
