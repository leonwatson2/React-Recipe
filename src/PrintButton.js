import React, { Component } from 'react';

export class PrintButton extends Component {
	
	render() {
		const { hasIngredients } = this.props
		return (
			<div>
				{
		          hasIngredients ? 
		          <div className="btn print-now no-print" type="button" onClick={()=>{window.print()}}>Print Now</div>
		          : null
		        }
			</div>
		);
	}
}
