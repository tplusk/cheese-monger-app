export default function Contact() {
  const company = {
    name: "Badger Valley Creamery LLC",
    address: "4821 Maple Hollow Road Sheboygan Falls, WI 53085",
    email: "info@badgervalleycreamery.com",
    phone: "(920) 555-0174",
  };

  const directions = () => {
    return (
      <a href="https://www.google.com/maps/search/4821+Maple+Hollow+Road+Sheboygan+Falls,+WI+53085/@43.7292996,-87.8148774,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D">
        {company.address}
      </a>
    );
  };

  const email = () => {
    return <a href={`mailto:${company.email}`}>{company.email}</a>;
  };

  const phone = () => {
    return <a href={`tel:${company.phone}`}>{company.phone} </a>;
  };

  return (
    <div>
      <div className="comp">
        <h3 id="compAddress">Address: {directions()}</h3>
        <h3 id="compEmail">Email: {email()} </h3>
        <h3 id="compPhone">Phone: {phone()} </h3>
      </div>
    </div>
  );
}
