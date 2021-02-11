import React from 'react';
import Card from './Card';

const CardList = ({resources}) => {
    return(
        <div className="row">
          {
            resources.map((resource, i) => {
              return (
                <Card 
                  key={i}
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