import cheesesOnTable from "../images/cheesesOnTable.jpg";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <h2 id="welcome">Welcome</h2>
        </div>
      </header>
      <main>
        <div className="pics">
          <img
            id="cheesesOnTable"
            alt="cheesesOnTable"
            src={cheesesOnTable}
          ></img>
        </div>
      </main>
    </div>
  );
}
