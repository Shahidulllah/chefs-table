const Cook = ({ cart }) => {
    return (
        
            <tr>
                <td className="text-justify">{cart.index}</td>
                <td className="text-wrap">{cart.recipe_name.slice(0,14)}</td>
                <td className="text-justify pl-9">{cart.preparing_time}</td>
                <td className="text-justify pl-12 ">{cart.calories}</td>
                <button className="bg-green-500 px-5 py-1 rounded-full font-bold m-2">Preparing</button>
            </tr>
        
    );
};

export default Cook;