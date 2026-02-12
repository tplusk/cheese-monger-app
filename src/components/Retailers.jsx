export default function Retailers() {
  const retailersList = [
    {
      name: "The Cheese Board",
      address: "2847 North Avenue",
      city: "Milwaukee",
      state: "WI",
      zip: "53211",
      phone: "(414) 555-0298",
    },
    {
      name: "Lakefront Provisions",
      address: "156 Water Street",
      city: "Green Bay",
      state: "WI",
      zip: "54301",
      phone: "(920) 555-0431",
    },
    {
      name: "Main Street Market",
      address: "4521 Main Street",
      city: "Madison",
      state: "WI",
      zip: "53703",
      phone: "(608) 555-0762",
    },
    {
      name: "Harbor View Grocery",
      address: "893 Lakeshore Drive",
      city: "Sturgeon Bay",
      state: "WI",
      zip: "54235",
      phone: "(920) 555-0145",
    },
    {
      name: "Northwoods Natural Foods",
      address: "2103 Pine Ridge Road",
      city: "Rhinelander",
      state: "WI",
      zip: "54501",
      phone: "(715) 555-0889",
    },
    {
      name: "Capitol Square Deli",
      address: "67 State Street",
      city: "Madison",
      state: "WI",
      zip: "53703",
      phone: "(608) 555-0234",
    },
    {
      name: "Prairie Home Pantry",
      address: "1842 Highway 18",
      city: "Prairie du Chien",
      state: "WI",
      zip: "53821",
      phone: "(608) 555-0567",
    },
    {
      name: "River Bend Specialty Foods",
      address: "3456 Riverside Boulevard",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      phone: "(608) 555-0923",
    },
    {
      name: "Copper Kettle Market",
      address: "729 Washington Avenue",
      city: "Oshkosh",
      state: "WI",
      zip: "54901",
      phone: "(920) 555-0612",
    },
    {
      name: "Badger State Provisions",
      address: "5012 University Avenue",
      city: "Eau Claire",
      state: "WI",
      zip: "54701",
      phone: "(715) 555-0348",
    },
  ];
  return (
    <div>
      <h2 id="subNav">You can find our products at the following stores</h2>
      <ul>
        {retailersList.map((retailers, index) => (
          <div key={index}>
            <h3>{retailers.name}</h3>
            <ul>
              <li>
                {retailers.address},{retailers.city},{retailers.state},{" "}
                {retailers.zip},{retailers.phone}
              </li>
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
