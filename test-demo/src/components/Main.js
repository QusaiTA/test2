import React from 'react';

import HornedBeasts from './HornedBeasts';
// import Beasts from './assest/HornedBeasts.json';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {




  render() {
    return (
      <main>

        <Row xs={1} md={3} className="g-4">

          {


            this.props.data.map((elements) =>{
              return <HornedBeasts title= {elements.title}
                imgUrl={elements.image_url}
                description={elements.description}
                showModal={this.props.stateUpdate}
                modalData={this.props.modalData}/>;
            })
          }
        </Row>



      </main>
    );
  }
}

export default Main;
