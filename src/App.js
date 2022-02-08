import './App.css';
import AboutPage from './components/AboutPage';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="mx-auto mt-8" >
    <Sidebar />
    <AboutPage />
      <h1 className="text-4xl text-center"> Main Content</h1>
    </div>
  );
}

export default App;