import './App.css';
import freeCodeCampLogo from './images/freecodecamp.png'
import HomeworkList from './components/HomeworkList'

function App() {
  return (
    <div className='homeworks-app'>
      <div className='freecodecamp-logo-container'>
        <img
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt="" />
      </div>
      <div className='homeworks-main-list'>
          <h1>My Homeworks</h1>
          <HomeworkList />
      </div>
    </div>
  );
}

export default App;
