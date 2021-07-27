import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

// import { Button } from 'react-bootstrap';

class HornedBeasts extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      numOfClick : 0
    };

  }

            increaseNumOfClick = () => {

              this.setState({

                numOfClick:this.state.numOfClick + 1,
              });
              this.props.showModal();
              this.props.modalData(
                this.props.title,
                this.props.image_url,
                this.props.description
              );
            };


            render() {

              return (

                <div id = "div">

                  <Col>
                    <Card style={{ width: '18rem' , height:'35rem'}}>
                      <Card.Img onClick={this.increaseNumOfClick} variant="top" src={this.props.imgUrl} />
                      <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                          {this.props.description}
                        </Card.Text>
                        <Card.Text>
                               Favourate {this.state.numOfClick} ❤️
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                </div>



              );

            }



}


export default HornedBeasts;
