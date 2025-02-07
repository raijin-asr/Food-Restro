import styled from "styled-components"

const App = () => {
  return <Container>
    <TopContainer>
      <div className="logo">
        <img src="logo.png"/>
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