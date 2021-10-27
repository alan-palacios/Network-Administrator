import logo from "./logo.svg";

function App() {
  return (
    <div className="mt-20">
      <img className="m-auto" src={logo} width="300" height="200" alt="logo" />
      <div className="text-center">
        <h1 className="text-7xl text-green-900 font-bold">
          Introducing Reactwind
        </h1>
        <p className="mt-5 text-lg">
          React with a Utility-First CSS Framework for Rapid Development
        </p>
      </div>
      <div className="text-center mt-10">
        <a
          href="https://reactjs.org/docs/getting-started.html"
          className="mr-5 bg-green-700 hover:bg-green-900 text-white font-bold py-4 px-8 rounded-lg"
        >
          Learn React
        </a>
        <a
          href="https://tailwindcss.com/docs"
          className="mr-5 bg-green-700 hover:bg-green-900 text-white font-bold py-4 px-8 rounded-lg"
        >
          Learn TailwindCSS
        </a>
      </div>
    </div>
  );
}

export default App;
