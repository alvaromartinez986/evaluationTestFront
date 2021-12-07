import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import SystemPropertiesChecker from './containers/SystemPropertiesChecker/SystemPropertiesChecker';

function App() {
  return (
    <div>
      <Navigation title={'New Candidate Evaluation Test'} />
      <SystemPropertiesChecker />
    </div>
  );
}

export default App;
