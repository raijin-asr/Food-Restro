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
              <div className="info">
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
            <Button>Rs.{price.toFixed(2)}</Button>
            </div>
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
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;
`;

const FoodCard= styled.div`
width: 340px;
height:167px;

border: 0.65px solid;
border-image-source: radial-gradient(
      80.68% 208.75% at 108.20% 112.50%,
      #eabfff 0%,
      rgba(135, 38,183,0) 100%  
    ),
    radial-gradient(
      80.35% 220.75% at -13.20% 12.50%,
      #98f9ff 0%,
      rgba(255, 255,255,0) 100%  
    );

  background: url(.png),
      radial-gradient(
      90.68% 142.75% at 15.20% 21.50%,
      rgba(165,239,255,0.2) 0%,
      rgba(110,191,244,0.04) 77.08%,
      rgba(70, 144,213,0) 100%  
    );
  background-blend-mode: overlay, normal;
  // backdrop-filter: blur(13.1842px)
  border-radius: 20px;
  
  display: flex;
  padding: 9px;

  .food_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  h3{
  margin-top:8px;
  front-size: 15px;
  font-weight: 500;
  }
  p{
    margin-top: 4px;
    font-size:12px;
  }
    button{
    font-size: 12px;
    }
  }
`;

