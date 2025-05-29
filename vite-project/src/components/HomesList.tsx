import { CiLocationOn } from "react-icons/ci";
import { LuBed } from "react-icons/lu";
import { MdOutlineCopyAll } from "react-icons/md";
import { PiBathtub, PiLineVerticalThin } from "react-icons/pi";

const HomesList = () => {
  const homeCardList = [
    {
      tag: "For Sale",
      name: "Skyper Pool Apartment",
      price: 280000,
      location: "1020 Bloomingdale Ave",
      beds: 4,
      baths: 2,
      sqft: 450,
    },
    {
      tag: "For Rent",
      name: "North Dillard Street",
      price: 250,
      location: "4330 Bell Shoals Rd",
      beds: 4,
      baths: 2,
      sqft: 400,
    },
    {
      tag: "For Sale",
      name: "Eaton Garth Penthouse",
      price: 180000,
      location: "7722 18th Ave, Brooklyn",
      beds: 4,
      baths: 2,
      sqft: 450,
    },
  ];

  return (
    <div className="homes-container">
      {/* <h2 className="title">Homes For You</h2>
      <p className="subtitle">Based On Your View History</p> */}
      {homeCardList.map((home, index) => (
        <div className="home-card" key={index}>
          <div className="badge-row">
            <span className="badge sale">{home.tag.toUpperCase()}</span>
            {home.name.includes("Penthouse") && (
              <span className="badge featured">FEATURED</span>
            )}
          </div>

          <div className="image-placeholder"></div>

          <div className="card-body">
            <div className="card-header">
              <h4>{home.name}</h4>
              <span className="price">
                {home.tag === "For Rent" ? `$${home.price}/month` : `$${home.price.toLocaleString()}`}
              </span>
            </div>
            <p className="address">
              <i className="fa fa-map-marker" /><CiLocationOn /> {home.location}
            </p>
            <div className="details">
              <span><i className="fa fa-bed" /><LuBed /> {home.beds} Beds <PiLineVerticalThin /></span>
              <span><i className="fa fa-bath" /><PiBathtub /> {home.baths} Baths <PiLineVerticalThin /></span>
              <span><i className="fa fa-ruler-combined" /><MdOutlineCopyAll /> {home.sqft} sqft</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomesList;
