const params = new URLSearchParams(window.location.search);
const productId = params.get("_id");

const URL = "https://striveschool-api.herokuapp.com/api/product";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWI1MDI1NGU4ODAwMTgzZjE4NzYiLCJpYXQiOjE2OTk2MDUzMjgsImV4cCI6MTcwMDgxNDkyOH0.rgBYaTD3P8KZnyEbfr9HOlOHnFuf_5vog-7QdGwv8zg";
const method = productId ? "PUT" : "POST";

window.onload = () => {
  if (productObj) {
    fetch(URL)
      .then((resp) => resp.json())
      .then((productObj) => {
        console.log(productObj);
        const { name, description, brand, imageUrl, price } = productObj;

        document.getElementById("name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("imageUrl").value = imageUrl;
        document.getElementById("price").value = price + "&euro;";
      })
      .catch((err) => {
        console.log(err);
      });

    const addProd = (event) => {
      event.preventDefault();
      const productObj = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value,
      };

      fetch(URL, {
        method,
        body: JSON.stringify(productObj),
        headers: {
          "Content-Type": application / json,
        },
      });
    };
  }
};
