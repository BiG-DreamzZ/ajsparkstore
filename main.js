// AJ SPARK basic animations and interactivity

// Welcome animation
document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = document.createElement("div");
  welcomeText.innerText = "Hey Queen, welcome to AJ SPARK!";
  welcomeText.style.position = "fixed";
  welcomeText.style.bottom = "20px";
  welcomeText.style.right = "20px";
  welcomeText.style.padding = "15px 20px";
  welcomeText.style.background = "#ff85b3";
  welcomeText.style.color = "white";
  welcomeText.style.borderRadius = "30px";
  welcomeText.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  welcomeText.style.zIndex = 1000;
  welcomeText.style.fontWeight = "bold";
  welcomeText.style.fontFamily = "Segoe UI, sans-serif";

  document.body.appendChild(welcomeText);

  setTimeout(() => {
    welcomeText.remove();
  }, 4000);
});

// Add to cart mock
function addToCart(productName) {
  alert(${productName} added to your cart!);
}
