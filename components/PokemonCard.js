import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { Card } from "react-bootstrap";

const getId =(url)=>{
return url.split("/").at(-2);
}

const PokemonCard = ({pokimon}) => {
    const id = getId(pokimon.url)

  return (
    <div className="CardInfo">
    <Link to = {"/pokeInfo/"+id} >
    <Card style={{ width: '18rem' }} gap={5}>
        <Card.Body>
        <Image thumbnail src={`https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology.png`} variant="top" height="50px" />
        <h2>{pokimon.name}</h2>
        </Card.Body>       
        </Card>
    
</Link>
</div>
  )
}

export default PokemonCard;