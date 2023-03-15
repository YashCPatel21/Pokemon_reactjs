import { useEffect, useState } from "react";

import PokemonCard from "./PokemonCard";

import { Col } from "react-bootstrap";

import InfiniteScroll from "react-infinite-scroll-component";



const Body = () => {

  const [response, setResponse] = useState(null);

  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async (nextUrl) =>{
    const url =  nextUrl ?? 'https://pokeapi.co/api/v2/pokemon/';
    try {
        let  res = await fetch(url);
        res = await res.json();
        const {results,...rest} = res;
        setResponse(rest);
        setResult(oldresult => [...oldresult,...results])

    } catch (error) {
        
    }
  } 
  if(!response){
    return null;
  }
  return (
    <div className="container fluid">
      <InfiniteScroll
        className="row gy-1 gx-1"
        dataLength={result.length} 
        next={()=>fetchData(response.next)}
        hasMore={!!response.next}
        loader={<h4>Loading...</h4>}
      >
        {result?.map((pokimon) => (
          <Col key={pokimon.name} md={3} sm={6} xs={12}>
            <PokemonCard pokimon={pokimon} />
          </Col>
        ))}

      </InfiniteScroll>
      </div>
  );
};

export default Body;
