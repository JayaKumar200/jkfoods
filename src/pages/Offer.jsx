import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Offer.css";

const Offer = () => {

const bannerOffers = [
  { id: 1, img: "", title: "Flat 50% OFF on Burgers!" },
  { id: 2, img: "", title: "Buy 1 Get 1 Free on Pizza!" },
  { id: 3, img: "", title: "Free Fries with Every Meal!" },
];

const foodNames = [
  "Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Salad", "Sandwich", "Noodles", "Ramen", "Steak",
  "Chicken Wings", "Fried Rice", "Kebabs", "Burrito", "Hot Dog", "Fish and Chips", "Curry", "Paella", 
  "Lasagna", "Grilled Cheese", "Dim Sum", "Samosa", "Falafel", "Goulash", "Frittata", "Beef Stew", 
  "Shawarma", "Peking Duck", "Moussaka", "Chow Mein", "Peking Duck", "Ceviche", "Carbonara", "Moussaka", 
  "Banh Mi", "Fajitas", "Chili Con Carne", "Pav Bhaji", "Gumbo", "Peking Duck", "Pork Schnitzel", 
  "Poutine", "Steak Frites", "Katsu Curry", "Chicken Tikka Masala", "Tom Yum Soup", "Spring Rolls", 
  "Barbecue Ribs", "Clam Chowder", "Zucchini Noodles", "Fish Tacos", "Crab Cakes", "Lobster Roll", 
  "Mushroom Risotto", "Sushi Roll", "Lamb Kofta", "Moussaka", "Eggplant Parmesan", "Beef Wellington", 
  "Tom Kha Gai", "Ratatouille", "Bruschetta", "Quiche", "Maki Rolls", "Meatballs", "Sauerbraten", 
  "Goulash", "Croissant", "Hotpot", "Crispy Duck", "Pho", "Donburi", "Crispy Pork Belly", 
  "Steak Tartare", "Fried Shrimp", "Tandoori Chicken", "Jambalaya", "Bangers and Mash", "Shepherd’s Pie", 
  "Kimchi", "Chicken Parmesan", "Carbonara", "Tortellini", "Tempura", "Arancini", "Currywurst", 
  "Pulled Pork", "Beef Empanadas", "Egg Salad", "Chicken Kiev", "Cheeseburger", "Cheese Fondue", 
  "Baked Ziti", "Shakshuka", "Okonomiyaki", "Pastrami on Rye", "Pad Thai", "Fried Chicken", "Ravioli", 
  "Chimichanga", "Bangers and Mash", "Risotto", "Chicken Caesar Salad", "Lamb Chops", "Duck Confit", 
  "Chicken Burrito", "Clams Casino", "Empanadas", "Zabaglione", "Tortilla Soup", "Paella", "Fried Zucchini", 
  "Gyros", "Wiener Schnitzel", "Churros", "Tiramisu", "Baked Alaska", "Moussaka", "Crêpes", 
  "Poffertjes", "Beef Skewers", "Tomato Basil Soup", "Spaghetti Bolognese", "Chicken Satay", 
  "Smoked Salmon", "Beef Carpaccio", "Baklava", "Pineapple Fried Rice", "Tteokbokki", "Fish Pie", 
  "Zuppa Toscana", "Chicken Shawarma", "Cranberry Sauce", "Chilaquiles", "Chicken Soup", 
  "Fish Curry", "Sichuan Noodles", "Beef Empanadas", "Pastrami Sandwich", "Pulled Chicken Tacos", 
  "Chili Fries", "Churro Waffles", "Brisket", "Roast Duck", "Sweet and Sour Pork", "Cottage Pie", 
  "Korean BBQ", "Grilled Salmon", "Lobster Mac and Cheese", "Fish Sticks", "Grilled Veggies", 
  "Stuffed Peppers", "Chicken and Waffles", "Sausage Roll", "Pasta Primavera", "Taco Salad", 
  "Vegetarian Pizza", "Pork Belly", "Meatloaf", "Pasta Alfredo", "Pulled Pork Sandwich", 
  "Pumpkin Soup", "Falafel Wrap", "Rice Pudding", "Cabbage Rolls", "Baked Beans", "Eggplant Rollatini", 
  "Stuffed Mushrooms", "Chickpea Salad", "Sausage and Peppers", "Lamb Shank", "Squash Soup", 
  "Cucumber Salad", "Tomato Soup", "Garlic Bread", "Beet Salad", "Butternut Squash Soup", 
  "Vegetarian Burrito", "Chicken Tostadas", "Pasta Puttanesca", "Pad See Ew", "Pork Chops", 
  "Gnocchi", "Banh Bao", "Jerk Chicken", "Tofu Stir-Fry", "Dumplings", "Chicken Fried Rice"
];

const featuredDeals = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  img: "",
  name: foodNames[index % foodNames.length], 
  price: Math.floor(Math.random() * 500) + 100,
  discount: Math.floor(Math.random() * 100) + 50
}));
const specialOffers = [
  { id: 1, img: "", title: "Pasta Extravaganza - 40% OFF" },
  { id: 2, img: "", title: "Sushi Feast - 25% OFF" },
  { id: 3, img: "", title: "Buy 1 Get 1 Free on Coffee!" }
];

const coupons = [
  { code: "FOOD50", description: "Get ₹50 OFF on orders above ₹299" },
  { code: "PIZZA99", description: "Flat ₹99 OFF on Large Pizzas" },
  { code: "BURGER20", description: "Save 20% on Burgers Today" },
  { code: "DESSERT30", description: "Get 30% OFF on Desserts" }
];


  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="offer-page">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {bannerOffers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="offer-banner">
              <h2>{offer.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="section-title">⏳ Limited Time Offers</h2>
      <div className="special-offers">
        {specialOffers.map((offer) => (
          <div className="special-card" key={offer.id}>
            <h3>{offer.title}</h3>
          </div>
        ))}
      </div>

      <h2 className="section-title">🔥 200+ Featured Deals</h2>
      <div className="deal-container">
        {featuredDeals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <h3>{deal.name}</h3> 
            <p>
              <span className="old-price">₹{deal.price}</span> ₹{deal.price - deal.discount}
            </p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 className="section-title">🎉 Discount Coupons</h2>
      <div className="coupon-container">
        {coupons.map((coupon, index) => (
          <div className="coupon-card" key={index}>
            <h3>{coupon.code}</h3>
            <p>{coupon.description}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
