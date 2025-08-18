import "./App.css";

const SHOPPING_APP_LINK = "com.verizon.shopping://";

function App() {
  return (
    <>
      <h1>Clear Like App</h1>

      <div className="card">
        <a href={SHOPPING_APP_LINK}>Back to Shopping App.</a>
      </div>
    </>
  );
}

export default App;
