import React from 'react';
import Carousel from '../components/Carousel/carousel';
import Options from '../components/Options/options';
const Homepage = () => {
    return (
        <main>
            <Carousel />
            <div class="container marketing">
                <Options />
            </div>
        </main>
     );
}
 
export default Homepage;