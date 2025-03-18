import { useEffect, useState } from "react";
import styled from "styled-components"
import Search from "./components/Search/Search";

export const BASE_URL= "http://localhost:9000" //database url

const App = () => {
  const [data,setData]= useState(null);
  const [loading,setLoading]= useState(false);
  const [error,setError]= useState(null);

  const [filteredData, setFilteredData]= useState(null);
  const [selectedBtn, setSelectedBtn]= useState("all");
  
  useEffect(() =>{

    const fetchData= async () => {
      try{
        const response= await fetch(BASE_URL)
  
        const json= await response.json()
        setData(json);
        setFilteredData(json)
        setLoading(false);
  
      }
      catch(error){
        setError("Cannot fetch data!")
      }
    };

    fetchData(); //calling function inside useEffect

  }, []);

  const searchFood =(e) => {
    const searchValue= e.target.value;

    if(searchValue === ""){
      setFilteredData(null);
    }

    const filter= data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
  );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if(type =="all"){
      setFilteredData(data);
      setSelectedBtn("all")
      return;
    }
    const filter= data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const mapButttons =[
    {
      name:"All",
      type:"all",
    },
    {
      name:"Breakfast",
      type:"breakfast",
    },
    {
      name:"Lunch",
      type:"lunch",
    },
    {
      name:"Dinner",
      type:"dinner",
    }
  ]

  if(error){
    return <div>{error}</div>
  }
  if (loading) return <div>{loading}</div>

  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logoA.png"/>
        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="Search food"/>
        </div>
      </TopContainer>
      <FilterContainer>
        {mapButttons.map((value)=>(
        <Button 
        isSelected={selectedBtn  == value.type}
        key={value.name} onClick={() => filterFood(value.type)}>
          {value.name}
        </Button>
        ))
        }
        
      </FilterContainer>
    </Container>
    <Search data={filteredData} />
    </>
  );
};

export default App;

export const Container= styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer= styled.section`
  height: 150px;
  display:flex;
  justify-content: space-between;
  padding: 15px;
  align-items:center;

  .search{
    input{
      background-color: transparent;
      border:1px solid red;
      color:white;
      border-radius: 5px;
      height:40px;
      font-size:15px;
      padding:0 10px;
      &::placeholder{
      color: white;}
    }
  }

  .logo img{
  height:60px;
  width:100px;
  }

  @media (0 < width < 600px){
  flex-direction: column;
  height: 150px;
  }
`;


const FilterContainer=styled.section`
display: flex;
justify-content: center;
gap:12px;
padding-bottom: 40px;
`;

export const Button=styled.button`
  background: ${({isSelected})=> (isSelected ? "green":"#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color:rgb(174, 23, 23);

  }
`;

