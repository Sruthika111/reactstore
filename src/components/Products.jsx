import "./Products.css";
export default function Products(){
    const products=[
        {id:1,name:"Chocolates",price:25},
        {id:2,name:"Icecreams",price:40},
        {id:3,name:"Cakes",price:100},
        {id:4,name:"Cooldrinks",price:60},
        {id:5,name:"Biscuits",price:35},
        {id:6,name:"Puffs",price:70},
    ];
    return(
        <div>
            <div className="App-Products-Row">
                {products.map((value,index)=>(
                    <div className="App-Products-Box" key={index}>
                    <h3>{value.name}</h3>
                    <h3>{value.price}</h3>
                    <button >Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}