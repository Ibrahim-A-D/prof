import React from "react";
import "./seach.css";
import {prof} from "../card-list/prof";
import Card from "../card-list/Card";

class Searchbar  extends React.Component {

  state = {
    matiere : '',
    lieu : '',
    niveau : '',
    isSearch : true,
  }

   handleClick = () =>{
    this.setState( state=> ({
        isSearch : !state.isSearch,
    }));
      
  }

  render(){
    const {matiere , lieu, niveau} = this.state;
    let compte = 0;
   const filterApp = prof.filter(pr => pr.matirere.toLowerCase().includes(matiere.toLowerCase()) 
    && pr.lieu.toLowerCase().includes(lieu.toLowerCase()) && pr.niveau.toLowerCase().includes(niveau.toLowerCase(), compte++)
    )
    return (
      <div>
        <div className="search-box">
          <div className="search">
            <input type="text" placeholder="Matiere" onChange={e => this.setState({matiere : e.target.value})}></input>
          </div>
          <div className="search">
            <input type="text" placeholder="Lieu" onChange={e => this.setState({lieu : e.target.value})} ></input>
          </div>
          <div className="search">
            <input type="text" placeholder="niveau" onChange={e => this.setState({niveau : e.target.value})} ></input>
          </div>
          <button onClick={this.handleClick}>Rechercher</button>
        </div>
        <div className="barreV"></div>
        {(this.state.isSearch) || ((this.state.matiere === '') && (this.state.lieu === '') && (this.state.niveau === '')) ? null :
        <div>
        <p className="person">{compte} Personnes Trouvées</p>
         <Card profs = {filterApp}/>
        </div>}
      </div>
    );
  }
  
};

export default Searchbar;
