const cityData = [
  {
    name: "New York",
    properties: 8,
    image: "/images/new-york.jpg",
  },
  {
    name: "Chicago",
    properties: 2,
    image: "/images/chicago.jpg",
  },
  {
    name: "Los Angeles",
    properties: 1,
    image: "/images/los-angeles.jpg",
  },
  {
    name: "San Diego",
    properties: 0,
    image: "/images/san-diego.jpg",
  },
  {
    name: "Florida",
    properties: 3,
    image: "/images/florida.jpg",
  },
  {
    name: "Miami",
    properties: 2,
    image: "/images/miami.jpg",
  },
];

const FindProperties = () => {
  return (
    <div className="find-properties">
      <h2 className="title">Find Properties in These Cities</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="grid-container">
        {cityData.map((city, index) => (
          <div
            key={index}
            className={`city-card ${index === 0 || index === 5 ? "highlighted" : ""}`}
          >
            <div className="overlay-properties">
              <span className="properties">{city.properties} {city.properties === 1 ? "Property" : "Properties"}</span>
              <h3 className="city-name">{city.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindProperties;
