import './App.css';
import Keeps from './googlekeeps/GoogleKeeps';
import Nav from './googlekeeps/Nav';
import Sidebar from './googlekeeps/Sidebar';

function App() {
  return (
    <>
      <Nav />
      <div className="main">
        <div className="sidebar"><Sidebar /></div>
        <Keeps />
      </div>
    </>
  );
}

export default App;
