import logo from './logo.svg';
import './App.css';
import Quiz1 from './components/Quiz1/Quiz1';
import Quiz2 from './components/Quiz2/Quiz2';
import Continue from './components/Continue/Continue';

function App() {
  return (
    <div style={{ backgroundColor: '#F8F8F8' }} className="row">
      <div style={{height : '100vh', backgroundColor : 'black'}} className="col-md-3">
        <h3 style={{color : 'white'}} className="text-center mt-5">Logic</h3>
      </div>
      <div className="col-md-9">
        <div >
          <Quiz1></Quiz1>
          <Quiz2></Quiz2>
      <Continue></Continue>
      <Quiz1></Quiz1>
      <Quiz1></Quiz1>
      <Quiz2></Quiz2>
        </div>
      </div>
    </div>

  );
}

export default App;
