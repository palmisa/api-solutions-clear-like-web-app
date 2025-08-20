import "./App.css";

const SHOPPING_APP_LINK = import.meta.env.VITE_APP_DEEP_LINK;

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
