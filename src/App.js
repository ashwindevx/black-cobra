import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>COMING SOON!</h1>
        <p>
          Our website is currently under construction.{" "}
          <div>
            In the meanwhile, please see our group{" "}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1PZ1l4C5aK9YbLlY0PMMugpIKPteNx4Ha/view"
              rel="noreferrer"
            >
              profile.
            </a>
          </div>
        </p>
        <div className="contact">
          <div className="contactWrapper">
            <a
              href="mailto:info@blackcobra.org"
              target="_blank"
              rel="noreferrer"
              className="email"
            >
              Email
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+91-9681822222"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              Whatsapp
            </a>
          </div>
          <div className="hour">
            <img src="hour.png" alt="waiting" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
