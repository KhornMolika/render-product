import { CardComponent } from "../components/CardComponent.js"
import { products } from "../data/products.js"

let renderArea = document.querySelector("#renderArea")

// Render product

products.slice(0,15).map((product) => (renderArea.innerHTML += CardComponent(product)));