import { retailersList } from "../data/retailersList";

export default function Retailers() {
  const sortedRetailersList = [...retailersList].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div>
      <h2 id="subNav">You can find our products at the following stores</h2>
      <ul>
        {sortedRetailersList.map((retailer, index) => (
          <div id="retailersListed" key={index}>
            <h3>{retailer.name}</h3>
            <p>{retailer.address}</p>
            <p>{retailer.phone}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
