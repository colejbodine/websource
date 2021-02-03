import Nav from './Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'

function App() {
  return (
    <div className="App">
        <Nav/>
        <div className="container">
          <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
    </div>
  );
}

export default App;
