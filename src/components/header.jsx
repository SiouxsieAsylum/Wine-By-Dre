import React, {Component} from 'react';

const ConditionalHeading = props => {

     if (!props.index){
        if (!props.id){
          return <h1 className="conditional">Add Wine</h1>
        } else {
          return <h1 className="conditional">{props.regularCase(props.selected.name)}</h1>
        }
     } else {
        return <h1 className="conditional">All Wines</h1>
      }
  }

class Header extends Component{
  render(){
    return(
        <div className="headingContainer">
          <div style={{backgroundImage:'url(images/wineicons.png)'}} onClick={() => this.props.indexSetTrue()} className="wine-icon"></div>
          <h1 onClick={() => this.props.indexSetTrue()}>Wines By Dre</h1>
          <ConditionalHeading index={this.props.index}
                              selected={this.props.selected}
                              id={this.props.id}
                              regularCase={this.props.regularCase}
                              />
        </div>
      )
  }
}

export default Header;
