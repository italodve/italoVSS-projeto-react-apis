import Card from "../../components/Card/Card";
import { Container } from "./styled";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import { getColors } from "../../utils/ReturnCardColor";
import { H, P } from "../HomePage/styled";
import styled, { createGlobalStyle } from "styled-components";

function PokedexPage() {

  const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(440px, 1fr));
    justify-items: center;
    background: grey;
  `;


  const context = useContext(GlobalContext);

  const { pokedex, removeFromPokedex } = context;

  return (
    <Container>
      
      <H>  
        <P>
          <p>
           Meus Pokémons
        </p>
        </P>
        </H>
       <CardsContainer>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
           
          />
        ))}
     </CardsContainer>
    </Container>
  );
}

export default PokedexPage;
