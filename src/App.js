import React, { Component } from 'react';
import './App.css';
import { PrintButton } from './PrintButton'
import { Ingredients } from './Ingredients'

class App extends Component {

  constructor() {
    super();
    this.state = {
      newIngredient: '',
      ingredients:['Apples','Oranges','Grapes'],
      errorMessage:""
    };
    this.clearError()
  }

  handleIngredientChange = (event) => {
    this.setState({ newIngredient: event.target.value });
  }
  addIngredient = (e) => {
    e.preventDefault()
    var { ingredients, newIngredient } = this.state;
    if(!ingredients.includes(newIngredient) && newIngredient.length > 0){
          ingredients.push(newIngredient);
          this.setState({ newIngredient : "", ingredients });
          this.clearError()
    }else if(ingredients.includes(newIngredient)){
        this.setError(newIngredient + " already in the list!")
    }

  }
  remove(ingredient){
    var { ingredients } = this.state
    if(ingredients.includes(ingredient)){
      ingredients.splice(ingredients.indexOf(ingredient), 1)
      this.setState({ ingredients })
    }
  }
  setError = (errorMessage) =>{
    this.setState({errorMessage})
  }
  clearError = ()=> {
    this.setState({errorMessage:""})
  }


  render() {
    const { newIngredient, ingredients , errorMessage} = this.state;
    return (
      <div className="App container">
      <h1 className="no-print">Add an Ingredient, or two</h1>
      {errorMessage.length ? <h5 className="no-print red-text">{errorMessage}</h5> : null}
      <PrintButton hasIngredients={ingredients.length > 0}></PrintButton>
      
      <h2 className="print">The Complete Recipe</h2>

      {newIngredient ? <h3>Add {newIngredient} </h3> : null}
        
        <form className="no-print" onSubmit={this.addIngredient}>
          
        <input
          type="text"
          className="input-field"
          value={this.state.newIngredient}
          onChange={this.handleIngredientChange}
        />

        {
          newIngredient.length ? 
          <button className="btn" type="Submit" onClick={this.addIngredient}>Add It!</button>
          :
          null
        }
        </form>
        <div className="recipe">
          <Ingredients ingredients={ingredients} remove={this.remove.bind(this)}/>
          <div>
            <div className="collection with-header">
              <div className="collection-header">Sample Instructions</div>
              <div className="collection-item">Something</div>
              <div className="collection-item">Something else</div>
              <div className="collection-item">Something really important I think</div>
              <div className="collection-item">Something almost there</div>
              <div className="collection-item">Something and done!</div>
            </div>
        </div>
        
        </div>


      </div>
    );
  }
}

export default App;
