import cheesesOnTable from "../assets/images/cheesesOnTable.jpg";

export default function Home() {
  return (
    <div>
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
