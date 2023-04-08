import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   const tShirt = useLoaderData();
   console.log(tShirt)
   return (
      <div>
         <h2>this is t-Shirt {tShirt.length}</h2>
      </div>
   );
};

export default Home;