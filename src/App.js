import './App.css';
import Comments from './components/Comments';
import NavBar from './components/NavBar';
import Suggestions from './components/Suggestions';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Video/>
        <Suggestions />
        <Comments />
      </main>
    </div>
  );
}

export default App;
