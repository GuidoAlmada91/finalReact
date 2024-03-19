import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  { name: "Teclado Hp HyperX Alloy MKW100 Red Inglés", img: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2022/05/4P5E1AA.jpg?resize=768%2C768&ssl=1", price: 95000, category: "teclados", description: "Iluminación RGB dinámica por tecla", stock: 10 },
  { name: "Teclado Marvo Mecánico KG962 60%", img: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2023/02/KG962B.jpg?resize=768%2C768&ssl=1", price: 23000, category: "teclados", description: "Una Bota", stock: 10 },
  { name: "Monitor Acer V206HQL 19.5″1600×900", img: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2023/02/V206HQL.jpg?resize=768%2C768&ssl=1", price: 100000, category: "monitores", description: "Tamaño de pantalla: 19.5", stock: 10 },
  { name: "Monitor Samsung 24T350FH 24″ IPS 75hz", img: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2021/05/07.jpg?resize=768%2C768&ssl=1", price: 150000, category: "monitores", description: "Tamaño de pantalla 24″", stock: 20 },
  { name: "Mouse Trust Primo Wireless White", img: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2023/06/24795_pictures_product_top_1.jpg?resize=768%2C768&ssl=1", price: 10000, category: "mouses", description: "Disfrute de una experiencia completamente inalámbrica con un alcance de 6 m", stock: 10 },
  { name: "Mouse Logitech G305 Wireless Mint", img: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2022/08/G305MINT.jpg?resize=768%2C769&ssl=1", price: 55000, category: "mouses", description: "Resolución: 200 – 12.000 dpiUna Camisa", stock: 10 },
  { name: "Auriculares JBL Quantum 800 Wireless", img: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2020/10/quantum8001.jpg?resize=768%2C749&ssl=1", price: 215000, category: "auriculares", description: "Respuesta de frecuencia (pasiva) 20 Hz – 40 kHz", stock: 10 },
];


export const seedProducts = () => { 

  products.forEach( product => {
      // Agregamos el producto a nuestra base de datos
      addDoc( collection( db, "products" ),  product  )
  }  )

 }