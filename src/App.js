import logo from './logo.svg';
import './App.css';
import data from './salary-data.json';
import Table from './Table';

function App() {
  return <Table data={data}></Table>;
}

export default App;
