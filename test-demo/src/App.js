
import React from 'react';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Beasts from './Component/assest/Beasts.json';
import SelectedBeast from './Component/SelectedBeast';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

      modalState: false,
    };
  }


  modalHandler = (title, imageUrl, description, modalState) => {
    this.setState({
      title: title,
      imageUrl: imageUrl,
      description: description,
      modalState: modalState,
    });
  };

  handelModalShow = modalState =>{
    this.setState({
      modalState: modalState
    });
  }


  render(){
    return(
      <>
        <SelectedBeast
          title={this.state.title}
          imageUrl={this.state.imageUrl}
          description={this.state.description}
          showModal={this.state.modalState}
          hideModal={this.handelModalShow}

        />
        <Header />
        <Main
          beastList={Beasts}
          modalHandler={this.modalHandler}/>
        <Footer />
      </>
    );
  }
}

export default App;
