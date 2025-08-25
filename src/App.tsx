import "./App.css";

const HOME = 'https://palmisa.github.io/api-solutions-clear-like-web-app';
const SHOPPING_APP_LINK = import.meta.env.VITE_APP_DEEP_LINK;
const PROTECT_APP_LINK = import.meta.env.VITE_PROTECT_APP_ANDROID;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const queryParameters = new URLSearchParams();

queryParameters.append('client_id', CLIENT_ID);
queryParameters.append('redirect_uri', HOME);

const ANDROID_DEEP_LINK = `${PROTECT_APP_LINK}?${queryParameters.toString()}`

function App() {
  return (
    <>
      <h1>Clear Like App</h1>

      <div className="card">
        <a href={SHOPPING_APP_LINK}>Back to Shopping App.</a>

        <a href={ANDROID_DEEP_LINK}>Open Protect App.</a>
      </div>
    </>
  );
}

export default App;
