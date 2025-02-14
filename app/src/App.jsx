import { useState } from "react";
import styled from "styled-components"

const BASE_URL= "http://localhost:9000" //database url

const App = () => {
  const [data,setData]= useState(null);
  
  const fetchData= async () => {
    try{
      const response= await fetch(BASE_URL)

      const json= await response.json()
    setData(json);
    }
    catch(error){}
  };

  fetchData();


  return <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logoA.png"/>
      </div>
      <div className="search">
        <input placeholder="Search food"/>
      </div>
    </TopContainer>
    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>

    <FoodCardsContainer>
      <FoodCards>

      </FoodCards>
    </FoodCardsContainer>
  </Container>;
};

export default App;

const Container= styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer= styled.section`
  min height: 150px;
  display:flex;
  justify-content: space-between;
  padding: 15px;
  align-items:center;

  .search{
    input{
      background-color: transparent;
      border:1px oslid red;
      color:white;
      border-radius: 5px;
      height:40px;
      font-size:15px;
      padding:0 10px;
    }
  }

  .logo img{
  height:100px;
  width:150px;
  }
`;


const FilterContainer=styled.section`
display: flex;
justify-content: center;
gap:12px;

`;

const Button=styled.button`
  background: red;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;

`;

const FoodCardsContainer= styled.section`
background-image: url("/bg.jpeg");
background-size: cover;
height: calc(100vh - 200px);

`;

const FoodCards= styled.div`
`;