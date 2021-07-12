import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Anwar','Jafor','Alomgir','Salman'];

  const products = [

    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'Pdf Reader', price:'$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
       <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name="Rubel" food = "Fuchka" nayika ="Mousumi"> </Person>
        <Person name={nayoks[0]} food = "Fuchka" nayika ="Mousumi"> </Person>
        
    
        <ul>
          {
           
            nayoks.map(nayok =><li>{nayok}</li>)
          }

          <li>{nayoks[0]} </li>
          <li>{nayoks[1]} </li>

          {
           
           products.map(pd =><Product product={pd}></Product>)
         }
        </ul>
        <Counter></Counter>
        <Users></Users>

      </header>
    </div>
  );
}


function Product(props){

  const productStyle={
    border : '1px solid gray',
    borderRadius:'5x',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }

  const {name, price} = props.product;
  console.log(props.product)

  return (

    <div style = {productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>

  )
}

function Person(props){

  const personStyle={
    border:'2px solid red',
    margin: '10px'
  }

  return (
    <div style={personStyle}>

      <h1>Name : {props.name}, FOOD:{props.food}</h1>
      <h2>Nayika:{props.nayika}</h2>
      
   </div>
  )
}


function Counter(){
const [count, setCount]= useState(10);
const handleIncrease = () => {
    const newcount = count + 1;
  setCount(newcount);
}

  return(

    <div>
      <h1>Count:{count} </h1>
      <button onMouseMove = {()=> setCount(count - 1)}>Decrease</button>
      <button onClick = {handleIncrease}>Increase</button>
    </div>
  )
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
