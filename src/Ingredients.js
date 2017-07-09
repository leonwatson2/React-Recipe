import React, { Component } from 'react';

export class Ingredients extends Component {
	render() {
		const {ingredients, remove} = this.props;
		return (
			<div className="collection with-header">
			<div className="collection-header">The Ingredients</div>
	          {ingredients.length ? ingredients.map((i)=>{
	            return <div key={`${i}-key`} className="collection-item">
	            	{i}
	            	<a onClick={()=>{remove(i)}} 
	            		href="#!" 
	            		className="no-print secondary-content">
	            		<i  key={`${i}-i`}className="material-icons">remove</i>
            		</a>
	            </div>
	          }) : <div className="collection-item"> No Ingredients</div>}
	        </div>
		);
	}
}
