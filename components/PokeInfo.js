import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const PokeInfo = () =>{
    const { id } = useParams();
    const [data , setData] = useState(null);
    const [isLoading , setisLoading] = useState(true);
    const [error , setError] = useState(null);

   useEffect(() => {
    getPokeInfo();
   }, []);
   
   async function getPokeInfo() {
    try {
        const data = await fetch(
            "https://pokeapi.co/api/v2/pokemon/"+id
        );
        const json = await data.json();
        setData(json);
        setError(null)
        
    } catch (error) {
        setError(error)
    }finally{
        setisLoading(false)
    }

   }
   if(isLoading){
    return <>Loading...</>

   }
   if(error){
    return <>error</>

   }
    return(
        <div className="container fluid">
           <h1>name: {data.name}</h1>
           <h2>Pokemon id: {id}</h2>
           <p>Base Experience: {data.base_experience}</p>
           <hr/>
           <h5>Height {data.height}</h5>
           <h5>weight {data.weight}</h5>
           <hr/>
           <table className="table">
            <thead>
                <tr>
                    <th> Ability Name</th>
                    <th>Hidden</th>
                </tr>
            </thead>
            <tbody>
                {data.abilities.map(({ability},i)=>(
                    <tr key={i}>
                    <td>{ability.name}</td>
                    <td>{ability.is_hidden ? "Yes" : "No"}</td>
                </tr>
                ))}
                
            </tbody>
           </table>


        </div>
        )
    }

export default PokeInfo;