import React from 'react';
import HornedBeasts from './HornedBeast';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Filter from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component{

  constructor(props){
    super (props);
    this.state = {
      allhorns : -1,
    };
  }

  filterData = (allhorns) => {
    this.setState({
      allhorns:allhorns,
    });

  }


  render(){
    return(

      <>
        <Filter filterData = {this.filterData}/>
        <Container>
          <div id = 'div'>
            <Row xs={1} md={3} className='justify-content-center'>
              {
                this.props.beastList.filter(element =>
                  this.state.allhorns === -1
                    ? true
                    : element.horns === this.state.allhorns).map(element => {
                  return <HornedBeasts
                    imageUrl={element.image_url}
                    title={element.title}
                    description={element.description}
                    modalHandler={this.props.modalHandler}
                  />;
                })
              }
            </Row>
          </div>
        </Container>
      </>

    );
  }
}

export default Main;
