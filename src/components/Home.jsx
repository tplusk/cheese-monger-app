import cheesesOnTable from "../images/cheesesOnTable.jpg";

export default function Home() {
  return (
    <div>
      <div>
        <h2>Welcome!</h2>
      </div>
      <div className="pics">
        <img
          id="cheesesOnTable"
          alt="cheesesOnTable"
          src={cheesesOnTable}
        ></img>
      </div>
    </div>
  );
}
