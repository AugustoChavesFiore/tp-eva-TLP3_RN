import { AddTask, AllTask } from "./components";

function App() {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Task Manager
          </a>
        </div>
      </nav>
    </header>
    <div className="container">
      <div className="row">
        <aside className="col-5">
        <AddTask />
        </aside>
        < main className="col-7" >
          <AllTask />
        </main>
      </div>
    </div>
    </>
  );
}

export default App;
