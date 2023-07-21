import Contador from "./components/contador"
import "./index.css"

function App() {
  

  return (
    <div className="padre">
      <main className="counter-container">
        <h1>WE´RE LAUNCHING SOON</h1>
        <Contador/>
      </main>
      <footer className="footer">
        <div className="footer_iconsContainer">
          <i className="fa-brands fa-square-facebook icons" ></i>
          <i className="fa-brands fa-pinterest icons"></i>
          <i className="fa-brands fa-instagram icons"></i>
        </div>
      </footer>
    </div>
  )
}

export default App
