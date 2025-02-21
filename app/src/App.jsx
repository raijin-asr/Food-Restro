import { useEffect, useState } from "react";
import styled from "styled-components"
import Search from "./components/Search/Search";

export const BASE_URL= "http://localhost:9000" //database url

const App = () => {
  const [data,setData]= useState(null);
  const [loading,setLoading]= useState(false);
  const [error,setError]= useState(null);
  
  useEffect(() =>{

    const fetchData= async () => {
      try{
        const response= await fetch(BASE_URL)
  
        const json= await response.json()
        setData(json);
        setLoading(false);
  
      }
      catch(error){
        setError("Cannot fetch data!")
      }
    };

    fetchData(); //calling function inside useEffect

  }, []);

  if(error){
    return <div>{error}</div>
  }
  if (loading) return <div>{loading}</div>

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

    <Search data={data} />
  </Container>
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
padding-bottom: 40px;
`;

export const Button=styled.button`
  background: red;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;

`;

