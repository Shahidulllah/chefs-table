const Cook = ({ cart, index, removeItem}) => {
    return (
        
            <tr>
                <td className="text-justify font-bold pr-3">{index+1}</td>
                <td className="text-wrap">{cart.recipe_name.slice(0,14)}</td>
                <td className="text-justify pl-7">{cart.preparing_time}</td>
                <td className="text-justify pl-8 ">{cart.calories}</td>
                <button onClick={()=>removeItem(cart.recipe_id)} className="bg-green-500 px-5 py-1 rounded-full font-bold m-2">Preparing</button>
            </tr>
        
    );
};

export default Cook;