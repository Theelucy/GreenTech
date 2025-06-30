const items = [
  // CROPS
  {
    id: 1,
    name: "Organic Maize",
    category: "crops",
    price: "R150 per bag",
    image: "https://images.unsplash.com/photo-1563201515-4dd297d6c5db?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Tomatoes (Fresh)",
    category: "crops",
    price: "R80 per crate",
    image: "https://images.unsplash.com/photo-1627308595216-0dcd1e34ee94?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Spinach Bunch",
    category: "crops",
    price: "R30 per bunch",
    image: "https://images.unsplash.com/photo-1584306670836-3c3f40b4c0c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Sweet Potatoes",
    category: "crops",
    price: "R120 per 10kg",
    image: "https://images.unsplash.com/photo-1590502593747-43e4f98fbaf8?auto=format&fit=crop&w=800&q=80",
  },

  // FERTILIZER
  {
    id: 5,
    name: "NPK Fertilizer",
    category: "fertilizer",
    price: "R90 per kg",
    image: "https://images.unsplash.com/photo-1611822627425-69051d39616f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Compost Organic Mix",
    category: "fertilizer",
    price: "R70 per bag",
    image: "https://images.unsplash.com/photo-1607269830735-d14f95f2f878?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Manure Fertilizer",
    category: "fertilizer",
    price: "R60 per sack",
    image: "https://images.unsplash.com/photo-1584306670846-3c3f40b4c0d9?auto=format&fit=crop&w=800&q=80",
  },

  // TOOLS
  {
    id: 8,
    name: "Irrigation Pipe Set",
    category: "tools",
    price: "R550",
    image: "https://images.unsplash.com/photo-1625123556462-32a3c7f253d1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Hand Hoe",
    category: "tools",
    price: "R150",
    image: "https://images.unsplash.com/photo-1622978523557-2df3a3a74a38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Sprayer (16L)",
    category: "tools",
    price: "R350",
    image: "https://images.unsplash.com/photo-1597091475206-3d04c0c14ad2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Wheelbarrow",
    category: "tools",
    price: "R800",
    image: "https://images.unsplash.com/photo-1583703180142-0db5d355d1e5?auto=format&fit=crop&w=800&q=80",
  }
];

function renderItems(category = "all") {
  const container = document.getElementById("market-items");
  container.innerHTML = "";

  const filteredItems = category === "all" ? items : items.filter(item => item.category === category);

  filteredItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "market-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="details">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button class="buy-btn">Buy Now</button>
      </div>
    `;
    container.appendChild(div);
  });
}

document.getElementById("category").addEventListener("change", (e) => {
  renderItems(e.target.value);
});

window.onload = () => renderItems();