import React from 'react';
import HornedBeasts from './HornedBeast';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import FilterJS from './FilterJS';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component{

  constructor(props){
    super (props);
    this.state = {
      filterValue : -5,
    };
  }

  filterData = (filterValue) => {
    this.setState({
      filterValue:filterValue,
    });

  }


  render(){
    return(

      <>
        <FilterJS filterData = {this.filterData}/>
        <Container>
          <div id = 'div'>
            <Row xs={1} md={3} className='justify-content-center'>
              {
                this.props.beastList.filter(element =>
                  this.state.filterValue === -5
                    ? true
                    : element.horns === this.state.filterValue).map(element => {
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
