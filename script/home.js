const URL = "https://striveschool-api.herokuapp.com/api/product";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWI1MDI1NGU4ODAwMTgzZjE4NzYiLCJpYXQiOjE2OTk2MDUzMjgsImV4cCI6MTcwMDgxNDkyOH0.rgBYaTD3P8KZnyEbfr9HOlOHnFuf_5vog-7QdGwv8zg";
const container = document.getElementsByClassName("container");

const options = {
  method: "POST",
  body: JSON.stringify([]),
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWI1MDI1NGU4ODAwMTgzZjE4NzYiLCJpYXQiOjE2OTk2MDUzMjgsImV4cCI6MTcwMDgxNDkyOH0.rgBYaTD3P8KZnyEbfr9HOlOHnFuf_5vog-7QdGwv8zg",
  },
};

product = [];

window.onload = () => {
  fetch(URL, options)
    .then((resp) => resp.json())
    .then((product) =>
      product.data.forEach((prod) => {
        const col = document.createElement("div");
        col.className = "col";

        const card = document.createElement("div");
        card.className = "card";

        card.innertHTML = `
            <img>${prod.imageUrl}</img>
            <h2>${prod.name}</h2>
            <h4>${prod.brand}</h4>
            <p>${prod.description}</p>
            <p>${prod.price}</p>

            
        `;

        container.appendChild(col);
        col.appendChild(div);
      })
    );
};
