import './App.css';
import CurrentTasks from './components/CurrentTasks';
import TaskDetails from './components/TaskDetails';


function App() {

  return (
    <div className="App">
      <div className='App-header'>

        <TaskDetails></TaskDetails>
        <CurrentTasks></CurrentTasks>
        </div>
    </div>
  );
}

export default App;
