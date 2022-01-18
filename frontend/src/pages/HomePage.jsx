import React from 'react';
import Carousel from '../components/Carousel/carousel';
import Featurette from '../components/Featurette/Featurette';
import Options from '../components/Options/options';

const Homepage = () => {
    return (
        <React.Fragment>
            <Carousel />
            <div className="container marketing">
                <Options />
                <hr className="featurette-divider" />
                <Featurette />
                <hr className="featurette-divider" />
                <Featurette />
                <hr className="featurette-divider" />
            </div>
        </React.Fragment>
     );
}
 
export default Homepage;