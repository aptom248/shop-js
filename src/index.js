import "./styles.css";

const changeColor = () => {
  const colorSelect = document.getElementById("colorSelect");
  const itemPhoto = document.getElementById("itemPhoto");
  if (colorSelect.value === "白") {
    itemPhoto.src = "image/t-shirt-white.png";
  }
  if (colorSelect.value === "グレー") {
    itemPhoto.src = "image/t-shirt-gray.png";
  }
  if (colorSelect.value === "黒") {
    itemPhoto.src = "image/t-shirt-black.png";
  }
};

const changeSize = (e) => {
  const itemPhoto = document.getElementById("itemPhoto");
  if (e.target.value === "S") {
    itemPhoto.height = "80";
  }
  if (e.target.value === "M") {
    itemPhoto.height = "100";
  }
  if (e.target.value === "L") {
    itemPhoto.height = "120";
  }
};

const culcTotal = (e) => {
  const price = document.getElementById("singlePrice").value;
  const totalPrice = price * e.target.value;
  document.getElementById("totalPrice").innerHTML = totalPrice.toLocaleString();
};

document
  .getElementById("colorSelect")
  .addEventListener("change", () => changeColor());

document.getElementsByName("sizeSelect").forEach((e) => {
  e.addEventListener("change", (e) => {
    changeSize(e);
  });
});

document
  .getElementById("orderQuantity")
  .addEventListener("click", (e) => culcTotal(e));
