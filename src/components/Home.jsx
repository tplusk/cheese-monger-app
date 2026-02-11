import cheesesOnTable from "../images/cheesesOnTable.jpg";

export default function Home() {
  return (
    <div>
      <header>Wisconsin Cheese Mongers</header>
      <h2>Welcome!</h2>
      <div className="pics" style={{ width: 900, height: 500 }}>
        <img
          id="cheesesOnTable"
          alt="cheesesOnTable"
          src={cheesesOnTable}
        ></img>
      </div>
    </div>
  );
}
