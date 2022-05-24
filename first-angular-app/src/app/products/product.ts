export interface Product {
  id: number;
  name: string;
  description?: string; //this has to have the value of string or else it will be undefined
  imageUrl: string | undefined; // this or that
  price: number;
}
export interface NewProductRequest {
  name: string;
  description?: string;
  imageUrl: string | undefined;
  price: number;
} //created new product so all info can be inputted by the user appart for the id because The product function that contains the id is being used
//so this is to be able to tell the functionality add() in the product component to take a users input to create a new moto bike

// const toto: Product = {
//   id: 1,
//   name: 'Bob',
//   imageUrl: undefined,
//   price: 10,
// }; this is an example of what the Product object accepts, it works without a description because we put an ? meaning that it can be filled in or not, in any case the code should run
