
const HomeCard = ({ tag, name, price, location, beds, baths, sqft }) => {
  return (
    <div className="home-card">
      <div className="home-tag">{tag}</div>
      <h2 className="home-title">{name}</h2>
      <p className="home-location">{location}</p>
      <p className="home-price">${price.toLocaleString()}</p>
      <div className="home-info">
        <span>{beds} Beds</span>
        <span>{baths} Baths</span>
        <span>{sqft} sqft</span>
      </div>
    </div>
  )
}

export default HomeCard
