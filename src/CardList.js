import React from 'react';
import Card from './Card';
import {resources} from './resources';

const CardList = () => {
    return(
        <div className="row">
          {
            resources.map(resource => {
              return (
                <Card 
                  title={resource.name}
                  desc={resource.desc}
                  image={resource.image}
                />
              )
            }) 
          }
          </div>
    )
}

export default CardList;