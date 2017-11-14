import React, {Component} from 'react';
import Show from './show.jsx'
import Add from './add.jsx'

class SingleContainer extends Component {
  render(){
    if(!this.props.id){
      return(<Add selected={this.props.selected}
                  submitForm={this.props.submitForm}
                  wineFormChange={this.props.wineFormChange}
                  />)
    } else if ((this.props.id && this.props.edit)){
      return(<Add selected={this.props.selected}
                  submitForm={this.props.submitForm}
                  wineFormChange={this.props.wineFormChange}
                  />)
    } else {
    return(
            <Show selected={this.props.selected}
                  setEdit={this.props.setEdit}
                  indexSetTrue={this.props.indexSetTrue}
                  regularCase={this.props.regularCase}
                  />
            )

    }
  }
}

export default SingleContainer;
