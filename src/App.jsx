import "./App.css";

function App() {
  function handleClick() {
    alert("I love you 💋 💋 💋");
    document.body.style.background =
      "url(https://img.freepik.com/premium-vector/seamless-pattern-small-hearts-background-valentine-s-day_578229-335.jpg)";
  }

  return (
    <div>
      <h1>Hello Mai Thy!</h1>
      <button onClick={handleClick}>
        Click here to receive message from Nghiem
      </button>
    </div>
  );
}

export default App;
