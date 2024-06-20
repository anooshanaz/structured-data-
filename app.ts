let user:{
    name: string;
    email: string|number
    id: string;
} = {
    name:"ali",
    email: "ano134",
    id: "abcd"
}
console.log(user)

// How do you create an interface in TypeScript to represent a structured data object?
// Example: Create an interface for a Product with properties id (number), name (string)
//, price (number), and inStock (boolean).
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
  };
let shoes:Product ={
    id:1234,
    name:"shoes",
    price: 1000,
    inStock:true
}
console.log(shoes)
