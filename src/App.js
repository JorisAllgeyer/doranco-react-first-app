import './App.css';
import Header from './Header/Header';

function App() {
  const text = "Hello world";
  const containerClass = "App";

  return (
    <div className={containerClass}>
      <Header />
      <h2>{text}</h2>
    </div>
  );
}

export default App;
