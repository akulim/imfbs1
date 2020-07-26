const cacheKey = "NUMBER";
 
           const pict = document.querySelector(".produ");
           pict.addEventListener('click', function(event) {
               let number = localStorage.getItem(cacheKey);
               number++;
               localStorage.setItem(cacheKey, number);
           })
       
const cache = "NUMBER1";
 
           const button = document.querySelector(".btn");
           button.addEventListener('click', function(event) {
               let number = sessionStorage.getItem(cacheKey);
               number++;
               sessionStorage.setItem(cache, number);
           })
       
// import React from 'react';

// class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  // Nyatakan method handleClick 
  handleClick(name) {
    this.setState({name: name})
  };
  
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        {/* Gantikan event onClick supaya dapat memanggil method handleClick */}
        <button onClick={() => {this.handleClick('Guru Domba')}}>Guru Domba</button>
        
        {/* Gantikan event onClick supaya dapat memanggil method handleClick */}
        <button onClick={() => {this.handleClick('Ninja Ken')}}>Ninja Ken</button>
        
      </div>
    );
  }
}

// export default App;

// import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  // Buat method handleClick
  handleClick() {
    this.setState({count: this.state.count + 1});
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* tambahkan event onClick di tag <button> */}
        <button onClick={() => {this.handleClick()}}>+</button>
        
      </div>
    );
  }
}

export default App;
