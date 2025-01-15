
import Book from './assets/book.png';
import './App.css'

function App() {


  return (
    <div className="login-container">
      <header className="login-header">
        <img src={Book} alt="open-book" className='book' />
        <h1>Bookchat</h1>
      </header>
      <main className="login-main">
        <p>A hub for literary lovers</p>
        <form action="" className="login-form">
          <div className="form-control">
            <label htmlFor="" className="username">UserName</label>
            <input name='username' id='username' placeholder='samJohnson514' type="text" className="username-input" required/>
          </div>
          <div className="form-control">
            <label htmlFor="" className="room">Room</label>
            <select name="" id="" className="room">
              <option value="Shakespeare">Shakespeare</option>
              <option value="Kafka">Kafka</option>
              <option value="Dickens">Dickens</option>
            </select>
          </div>
          <button type='submit' className='join-btn'>Join a Room</button>

        </form>
      </main>
      
      
    </div>
        
  )
}

export default App
