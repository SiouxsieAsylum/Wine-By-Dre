import React, {Component} from 'react';

class Nav extends Component {
  constructor(props){
    super();
  }
  render(){
    return(
      <div className="nav">
        <ul className="topLevel">
          <li><p  onClick={() => this.props.indexSetTrue()} >All Wines</p>
            <ul className="dropDown">
              {this.props.list.map(wine => {
                return <li
                   onClick={() => this.props.setId(wine.id)}
                   key={wine.id}>
                   <p>{this.props.regularCase(wine.name)}</p>
                       </li>
              })}
            </ul>
          </li>
        <li onClick={() => this.props.addWine()}><p>New Wine</p></li>
        </ul>
      </div>
      )
  }
}

export default Nav;
