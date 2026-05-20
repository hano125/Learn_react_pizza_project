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
    soldOut: true,
  },
];

function Pizza() {
  const pizzas = pizzaData.map((p) => (
    <li key={p.name} className={`pizza ${p.soldOut ? 'sold-out' : ''}`}>
      <img src={p.photoName} alt={p.name} />
      <div>
        <h3>{p.name}</h3>
        <p>{p.ingredients}</p>
        <span>{p.price}$</span>
      </div>
    </li>
  ));

  return (
    <div>
      <center style={{ marginBottom: "2rem" }}>
              <h2 className ="center">Our Pizzas</h2>
              
      </center>
      <ul className="pizzas">{pizzas}</ul>
    </div>
  );
}

export default Pizza;