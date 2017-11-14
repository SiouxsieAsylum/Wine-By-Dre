import React, {Component} from 'react';
import SingleContainer from './single.jsx';
import List from './list.jsx';

class ContentContainer extends Component {
  render(){
      if (this.props.index) {
          return(<div className="content-container">
            <List
              list={this.props.list}
              setId={this.props.setId}
              addWine={this.props.addWine}
            />
                 </div>)
      } else {
          return(<div className="content-container">
              <SingleContainer
                id={this.props.id}
                edit={this.props.edit}
                setEdit={this.props.setEdit}
                selected={this.props.selected}
                indexSetTrue={this.props.indexSetTrue}
                submitForm={this.props.submitForm}
                wineFormChange={this.props.wineFormChange}
                regularCase={this.props.regularCase}
              />
                    </div>)


        }
      }
  }


export default ContentContainer;
