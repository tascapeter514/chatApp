

import './App.css'

function App() {


  return (
    <div className="login-container">
      <header className="login-header">
        <img src="" alt="open-book" />
        <h1>Bookchat</h1>
      </header>
      <main className="login-main">
        <form action="" className="login-form">
          <div className="form-control">
            <label htmlFor="" className="username">UserName</label>
            <input name='username' id='username' placeholder='Enter username...' type="text" className="username-input" required/>
          </div>
          <div className="form-control">
            <label htmlFor="" className="room">Room</label>
            <select name="" id="" className="room">
              <option value="Shakespeare">Shakespeare</option>
              <option value="Kafka">Kafka</option>
              <option value="Dickens">Dickens</option>
            </select>
          </div>
          <button type='submit' className='join-btn'></button>

        </form>
      </main>
      
      
    </div>
        
  )
}

export default App
