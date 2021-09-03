// import logo from './logo.svg';
import './App.css';
import logo from '../src/images/book1.jpg'


function App() {
  return (
    <div class="slider">
    <div class="img-box">
      <img src={logo} alt="" id="slider-img" />
    </div>
    <button class="btn prevbtn">Prev</button>
    <button class="btn nextbtn">Next</button>
  </div>
    
  );
}

export default App;
