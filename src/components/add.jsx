import React, {Component} from 'react';

class Add extends Component {
  render(){
    return(
      <form onSubmit={(e) => this.props.submitForm(e)}>
        <input onChange={(e) => this.props.wineFormChange(e)}
          name="name"
          placeholder="Name"
          value={this.props.selected !== {} ? this.props.selected.name : ''}
        />

        <input onChange={(e) => this.props.wineFormChange(e)}
          name="year"
          placeholder="Year"
          value={this.props.selected !== {} ? this.props.selected.year : ''}
          />

        <input onChange={(e) => this.props.wineFormChange(e)}
          name="country"
          placeholder="Country"
          value={this.props.selected !== {} ? this.props.selected.country : ''}
        />

        <input onChange={(e) => this.props.wineFormChange(e)}
          name="region"
          placeholder="Region"
          value={this.props.selected !== {} ? this.props.selected.region : ''}
        />

        <input onChange={(e) => this.props.wineFormChange(e)}
          name="grapes"
          placeholder="Grapes"
          value={this.props.selected !== {} ? this.props.selected.grapes : ''}
        />

        <input onChange={(e) => this.props.wineFormChange(e)}
          name="description"
          placeholder="Description"
          value={this.props.selected !== {} ? this.props.selected.description : ''}
        />

        <input onChange={(e) => this.props.wineFormChange(e)}
          name="picture"
          placeholder="Picture URL"
          value={this.props.selected !== {} ? this.props.selected.picture : ''}
        />

        <input onChange={(e) => this.props.wineFormChange(e)}
          name="price"
          placeholder="price"
          value={this.props.selected !== {} ? this.props.selected.price : ''}
        />
        <br/>
        <button type="submit" value="submit">Submit</button>
      </form>
      )
  }
}

export default Add;
