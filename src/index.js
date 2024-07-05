import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      {" "}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = { color: "red", fontSize: "48 px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu</h2>{" "}
      {numPizzas > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            consectetur debitis similique hic sit iusto nisi eveniet aliquid
            perferendis, modi aspernatur quia asperiores!
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're are still working on menu. Please come back later </p>
      )}
      {/*  <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photo="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato mozarella"
        photo="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // console.log(props);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/*{pizzaObj.soldOut ? (
          <span> SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )}*/}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHours = 11;
  const closeHours = 22;
  const isopen = hour >= openHours && hour <= closeHours;
  console.log(hour);
  console.log(isopen);
  // if (hour >= openHours && hour <= closeHours)
  //   alert("we're are currently open");
  // else alert("sorry we are closed");
  // console.log(hour);
  return (
    <footer className="footer">
      {isopen ? (
        <Order openHours={openHours} closeHours={closeHours} />
      ) : (
        <p>
          We're are happy to welcome you between {openHours}:00 and {closeHours}
          :00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "we're currently open");
}
function Order({ closeHours, openHours }) {
  console.log(openHours);
  return (
    <div className="order">
      <p>
        We're open from {openHours}:00 to {closeHours}:00.Come Visit us{" "}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

<h1>Hello React!</h1>;
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />)
