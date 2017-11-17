 import React, { Component } from 'react';
import Nav from './components/nav.jsx';
import Header from './components/header.jsx'
import ContentContainer from './components/content.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      list:[],
      id:null,
      selected:{},
      indexView:true,
      edit:false
    }
    this.indexSetFalse = this.indexSetFalse.bind(this);
    this.indexSetTrue = this.indexSetTrue.bind(this);
    this.setId = this.setId.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.setEditFalse = this.setEditFalse.bind(this);
    this.addWine = this.addWine.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.grabWineList = this.grabWineList.bind(this);
    this.wineFormSubmission = this.wineFormSubmission.bind(this);
    this.wineFormChange = this.wineFormChange.bind(this);
    this.regularCase = this.regularCase.bind(this);
  }

  componentDidMount(){
    this.grabWineList();
  }

  grabWineList(){
    fetch('https://myapi-profstream.herokuapp.com/api/edd743/wines')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        list: responseJson
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  indexSetFalse(){
    this.setState({
      indexView: false
    })
  }

  indexSetTrue(){
    this.setState({
      indexView: true
    })
  }

  setId(wineId){
    this.setState({
      id: wineId
    })
    this.setSelected(wineId);
    this.setEditFalse();
    this.indexSetFalse();
  }

  setEdit(){
    this.setState({
      edit: true,
      indexView: false
    })
  }

  setEditFalse(){
    this.setState({
      edit: false
    })
  }

  setSelected(wineId){
    const wine = this.state.list.find(wine =>{
      return wine.id === wineId
    }) || {}
    this.setState({
      selected: wine
    })
  }

  addWine(){
    this.setState({
      id:null,
      edit:false,
      selected:{}
    })
    this.indexSetFalse();
  }

  regularCase(sentance){
    let array = sentance.split(" ");

    array = array.map(function(a){
       return a[0] + (a.substr(1).toLowerCase())
    })

    return array.join(" ");
  }

  wineFormChange(e){
    const name = e.target.name
    const value = e.target.value
    this.setState((prevState) => {
      return{
        selected: Object.assign({}, prevState.selected, {[name]: value})
      }
    })
  }

  wineFormSubmission(wine){
    const wineId = wine.id ? `/${wine.id}` : ''
    fetch('https://myapi-profstream.herokuapp.com/api/edd743/wines' + wineId, {
      method: wineId ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wine)
    })
    .then(response => response.json())
    .then(responseJson => {
      this.grabWineList()
    })
  }

  submitForm(e){
    e.preventDefault();
    this.wineFormSubmission(this.state.selected);
    this.setId(this.state.selected.id)
  }


  render() {
    return (
      <div className="App">

      <Header id={this.state.id}
           index={this.state.indexView}
           selected={this.state.selected}
           indexSetTrue={this.indexSetTrue}
           regularCase={this.regularCase}
          />

      <div className="navContainer">
          <Nav id={this.state.id}
               index={this.state.indexView}
               selected={this.state.selected}
               list={this.state.list}
               indexSetFalse={this.indexSetFalse}
               indexSetTrue={this.indexSetTrue}
               setId={this.setId}
               addWine={this.addWine}
               regularCase={this.regularCase}
               />
          <ContentContainer id={this.state.id}
               index={this.state.indexView}
               list={this.state.list}
               edit={this.state.edit}
               selected={this.state.selected}
               indexSetFalse={this.indexSetFalse}
               indexSetTrue={this.indexSetTrue}
               setId={this.setId}
               setEdit={this.setEdit}
               addWine={this.addWine}
               submitForm={this.submitForm}
               wineFormChange={this.wineFormChange}
               regularCase={this.regularCase}
               />
        </div>
      </div>
    );
  }
}

export default App;
