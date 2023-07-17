import {useState} from 'react';

function App() {
  const [option, setOption] = useState("");

  const setComponent = (selectedOption) => {
    setOption(selectedOption)
    console.log(selectedOption)
  }
  const displayComponent = () => {
    if(option === "option 1"){
      return <h1>Option 1</h1>
    }
    else if(option === "option 2"){
      return <h1>Option 2</h1>
    }
    else if(option === "option 3"){
      return <h1>Option 3</h1>
    }
  }

  return (
    <div className="container">
      <p>Project created by Harsh Mishra</p>
      <div className="row">
        <div className="col-4">
          <ul className="list-group">
            <button className="list-group-item" onClick={()=>{setComponent("option 1")}}>Menu Item 1</button>
            <button className="list-group-item" onClick={()=>{setComponent("option 2")}}>Menu Item 2</button>
            <button className="list-group-item" onClick={()=>{setComponent("option 3")}}>Menu Item 3</button>
          </ul>
        </div>
        <div className="col-8">
          {displayComponent()}
          <h1>Welcome to My Website!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
