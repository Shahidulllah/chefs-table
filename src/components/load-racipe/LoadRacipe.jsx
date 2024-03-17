
const LoadRacipe = ({cardItem, handleCart}) => {
    
    return (
        <div className="single-card space-y-5 p-6 border-2 rounded-2xl">
        <img className="rounded-lg" src={cardItem.recipe_image} alt="" />
        <h3 className="text-2xl font-bold">{cardItem.recipe_name}</h3>
        <p>{cardItem.short_description}</p>
        <hr />
        <h4 className="text-xl font-bold">Ingredients <span>{cardItem.ingredients.length}</span></h4>
        <li>{cardItem.ingredients[0]}</li>
        <li>{cardItem.ingredients[1]}</li>
        <li>{cardItem.ingredients[2]}</li>
        <li>{cardItem.ingredients[3]}</li>
        <li>{cardItem.ingredients[4]}</li>     
        <hr />
        <div className="flex gap-20">
            <h6>{cardItem.preparing_time}</h6>
            <h6>{cardItem.calories}</h6>
        </div>

        <button onClick={()=>handleCart(cardItem)} className="bg-green-500 rounded-full px-6 py-4 font-bold">Want to Cook</button>
    </div>
    );
};

export default LoadRacipe;