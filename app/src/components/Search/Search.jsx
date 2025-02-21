import styled from "styled-components"
import { BASE_URL, Button } from "../../App";

const Search = ({data}) => {
  return (
    <FoodCardsContainer>
      <FoodCards>
        {data?.map(({image, name, text, price})=> (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={BASE_URL + image}/>
            </div>
            <div className="food_info">
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
            <Button>Rs.{price.toFixed(2)}</Button>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardsContainer>
  )
}

export default Search


const FoodCardsContainer= styled.section`
background-image: url("/bg.jpeg");
background-size: cover;
height: calc(100vh - 210px);

`;

const FoodCards= styled.div`
`;

const FoodCard= styled.div`
`;