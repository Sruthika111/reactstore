import React from "react";
import "./Products.css";
import {appContext} from "../App";
import {useContext} from "react";
export default function Products(){
  const NAME=process.env.REACT_APP_NAME
    const { user, products, cart, setCart  } = useContext(appContext);
    const addToCart = (id) => {
        !cart[id] && setCart({ ...cart, [id]: 1 });
      };
      const increment = (id) => {
        setCart({ ...cart, [id]: cart[id] + 1 });
      };
      const decrement = (id) => {
        setCart({ ...cart, [id]: cart[id] - 1 });
        
      };
    return(
        <div>
             <h2>{NAME}</h2>
            <div className="App-Products-Row">
                {products.map((value,index)=>(
                    <div className="App-Products-Box" key={index}>
                        <img src={value.imgUrl}/>
                    <h3>{value.name}</h3>
                    <p>{value.desc}</p>
                    <h3>{value.price}</h3>
                    {cart[value.id] > 0 ? (
              <div>
                <button onClick={() => decrement(value.id)}>-</button>
                {cart[value.id]}
                <button onClick={() => increment(value.id)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(value.id)}>Add to Cart</button>
            )}
          </div>
                ))}
            </div>
        </div>
    );
}