import { Link } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <div>
        test link 
        <div>
          <button>
            <Link to="/users">Go to user page</Link>
          </button>
          <button>
            <Link to="/admins">Go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
