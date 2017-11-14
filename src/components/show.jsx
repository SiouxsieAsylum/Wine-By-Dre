import React, {Component} from 'react';

class Show extends Component {
  render(){
    return(
      <div className="wine-display">
        <h6 className="return" onClick={() => this.props.indexSetTrue()}>Return to Wine List</h6>

        <div className="wine-price show">
          <h1><span className="year">{this.props.selected.year}</span> {this.props.regularCase(this.props.selected.name)}
          </h1>
        </div>

        <div className="main-container">
          <img className="main-image" src={this.props.selected.picture} alt={this.props.selected.name} />
          <div>
          <p className="description">{this.props.selected.description}</p>
          <h1 className="price">${this.props.selected.price}</h1>
          </div>

        </div>

        <div className="info-container">
          <p className="country">{this.props.selected.country}</p>
          <p className="region">{this.props.selected.region}</p>
          <p className="grapes">{this.props.selected.grapes}</p>
        </div>
          <button onClick={() => this.props.setEdit()}>Edit</button>
      </div>

        )
    }
}
export default Show;
