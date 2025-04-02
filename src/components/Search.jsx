import React from "react";
import "./Search.css";
import pizza from "../assets/pizza.jpg";
import premium from "../assets/premium.jpg";
import sushi from "../assets/sushi.jpg";
import hamburger from "../assets/hamburger.jpg";
import chicken from "../assets/chicken.jpg";
import baiq from "../assets/baiq-daling-ykThMylLsbY-unsplash.jpg";
import brooke from "../assets/brooke-lark-jUPOXXRNdcA-unsplash.jpg";
import design from "../assets/design4business-xnxS_he76E4-unsplash.jpg";
import devin from "../assets/devin-avery-5iRgh_G0eRY-unsplash.jpg";
import eilliv from "../assets/eiliv-aceron-1pqxHp0dYyA-unsplash.jpg";
import aceron from "../assets/eiliv-aceron-uAm1CZMdPCw-unsplash.jpg";
import food from "../assets/food-photographer-jennifer-pallian-8pUjhBm4cLw-unsplash.jpg";
import george from "../assets/george-zheng-0Kbjfwunink-unsplash.jpg";
import irene from "../assets/irene-kredenets-6unxGRCPg0U-unsplash.jpg";
import kavita from "../assets/kavita-joshi-rai-lE5O9DktAQY-unsplash.jpg";
import khloe from "../assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg";
import lilas from "../assets/lilas-yohane-14jmOnCcZkU-unsplash.jpg";
import vicky from "../assets/vicky-ng-KsmkVW0Hsv0-unsplash.jpg";


const Search = ({ search, setSearch }) => {
  const foodItems = [
    { name: "Pizza", price: "$120", image: pizza },
    { name: "coffee", price: "$80", image: devin },
    { name: "eilliv", price: "$120", image: eilliv },
    { name: "Sushi", price: "$150", image: sushi },
    { name: "chicken", price: "$170", image: chicken },
    { name: "aceron", price: "$90", image: aceron },
    { name: "lilas", price: "$160", image: lilas },
    { name: "khloe", price: "$120", image: khloe },
    { name: "irene", price: "$150", image: irene },
    { name: "brooke", price: "$140", image: brooke},
  ];

  
  const filteredFoods = foodItems.filter((food) =>
    food?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Search for Food</h1>

      <div className="food-list">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
            <div key={index} className="food-item">
              <img src={food.image} alt={food.name} className="food-image" />
              <div className="food-details">
                <h3>{food.name}</h3>
                <p>{food.price}</p>
                <button>Click to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-food">No matching food found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
