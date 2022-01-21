import React, {useState} from 'react';
import TinderCardSwipe from 'react-tinder-card';
import './TinderCards.css'
function TinderCard() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://i.insider.com/601ea3dd67d1e300113c4a62?width=1000&format=jpeg&auto=webp   "
        },
        {
            name: 'Jeff Bezos',
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
        }
    ]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: ", nameToDelete)
}

const outOfFrame = (name) => {
    console.log(name, "Left the screen",name);
}
  return <div className='tinderCards'>
      <div className='tinderCards_cardContainer'>

      {people.map(person => (
          <TinderCardSwipe
            className="swipe"
            key = {person.name}
            preventSwipe={['up', 'down']}
            onSwipe ={(dir) => swiped(dir, person.name)}
            onCardLeftScreen = {() => outOfFrame(person.name)}
          >

              <div
                style={{backgroundImage: `url(${person.url})`}}
                className='card'
              >
                <h3>{person.name}</h3>

              </div>

        </TinderCardSwipe>
      ))}
      </div>


  </div>;
}

export default TinderCard;
