import "./Products.css";
export default function Products(){
    const products=[
        {id:1,name:"Product 1",price:25},
        {id:2,name:"Product 2",price:40},
        {id:3,name:"Product 3",price:55},
        {id:4,name:"Product 4",price:60},
        {id:5,name:"Product 5",price:35},
        {id:6,name:"Product 6",price:70},
    ];
    return(
        <div>
            <div className="App-Products-Row">
                {products.map((value,index)=>(
                    <div className="App-Products-Box" key={index}>
                    <h3>{value.name}</h3>
                    <h3>{value.price}</h3>
                    <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}