import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <section className='main-content'>
          <div className='video-player'>
            <iframe width="1280px" height="720px" src="https://www.youtube.com/embed/lJIrF4YjHfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='video'></iframe>
          </div>
        </section>
        <aside className='suggestions'>
        </aside>
      </main>
    </div>
  );
}

export default App;
