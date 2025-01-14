import './App.css'
import Openbook from './assets/open-book.png'

function App() {
  

  return (
    <div className="login-container">
      <header className="login-header">
        <img src={Openbook} alt="open-book" className="open-book" />
        <h1>Bookchat</h1>
      </header>
      <main className="login-main">
        <form action="" className="">
          <div className="form-control">
            <label htmlFor="" className="username">
              <input type="text" />
            </label>
          </div>
        </form>
        <div className="form-control">
          <label htmlFor="" className="room">
            <input type="text" />
          </label>
        </div>


      </main>
    </div>
    
    
  )
}

export default App
