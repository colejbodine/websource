import Nav from './Nav';
import CardList from './CardList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <div className="container">
          <CardList />
        </div>
    </div>
  );
}

export default App;
