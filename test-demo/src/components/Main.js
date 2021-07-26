import React from 'react';

import HornedBeasts from './HornedBeasts';
import Beasts from './assest/HornedBeasts.json';

class Main extends React.Component {




  render() {
    return (
      <main>


        {
          Beasts.map((elements) =>{
            return <HornedBeasts title= {elements.title} imgUrl={elements.image_url} description={elements.description} />;
          })
        }


      </main>
    );
  }
}

export default Main;
