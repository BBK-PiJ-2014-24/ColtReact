import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
 
  
  render() {
    // const {score, name, doScore} = this.props
    const isDisabled = this.props.score != undefined;
    return (
      <tr className={`RuleRow RuleRow-${isDisabled ? "disabled" : "active"}`} 
          onClick={isDisabled ? null : this.props.doScore  }>
        <td className="RuleRow-name">{this.props.name}</td>
        {/* <td className="RuleRow-score">{isDisabled ? this.props.score : this.props.description}</td> */}
        <td className="RuleRow-score">{isDisabled ? this.props.score : this.props.description}</td>
      </tr>
    )
  }
}

export default RuleRow;