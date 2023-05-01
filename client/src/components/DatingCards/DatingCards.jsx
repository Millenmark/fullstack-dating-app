import { useState, useEffect } from 'react'
import axios from '../../api/axios'
import DatingCard from 'react-tinder-card'
import style from './DatingCards.module.css'

const DatingCards = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/dating/cards")
      setPeople(req.data)
    }
    fetchData()
  })

  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  }

  return (
    <div className={style.datingCards}>
      <div className={style.datingCards__container}>
        {
          people.map(person => (
            <DatingCard
              key={person.name}
              className={style.swipe}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            > 
              <div 
                style={{backgroundImage: `url('${person.imgUrl}')`}} 
                className={style.card}
              >
                <h3>{person.name}</h3>
              </div>
            </DatingCard>
          ))
        }
      </div>
    </div>
  )
}

export default DatingCards