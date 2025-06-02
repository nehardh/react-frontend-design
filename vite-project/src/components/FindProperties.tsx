const cityData = [
  {
    name: "New York",
    properties: 8,
    image: "/findProperties/1.svg",
  },
  {
    name: "Chicago",
    properties: 2,
    image: "/findProperties/2.svg",
  },
  {
    name: "Los Angeles",
    properties: 1,
    image: "/findProperties/3.svg",
  },
  {
    name: "San Diego",
    properties: 0,
    image: "/findProperties/4.svg",
  },
  {
    name: "Florida",
    properties: 3,
    image: "/findProperties/5.svg",
  },
  {
    name: "Miami",
    properties: 2,
    image: "/findProperties/6.svg",
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
            style={{ backgroundImage: `url(${city.image})` }}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindProperties;
