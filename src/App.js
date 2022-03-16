import {useState, useEffect} from 'react'

import SingleCard from './components/SingleCard'
import './App.css';


const cardImages = [
  { "src": "/img/helmet-1.png", matched: false},
  { "src": "/img/potion-1.png", matched: false},
  { "src": "/img/ring-1.png", matched: false},
  { "src": "/img/scroll-1.png", matched: false},
  { "src": "/img/shield-1.png", matched: false},
  { "src": "/img/sword-1.png", matched: false},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prev => prev+1)
    setDisabled(false)
  }

  useEffect(() => {
    if(!choiceOne || !choiceTwo) return
    setDisabled(true)

    if(choiceOne.src === choiceTwo.src && choiceOne.id !== choiceTwo.id ){
      setCards(prevCards => {
        return prevCards.map(card => {
          return card.src === choiceTwo.src
            ? {...card, matched: true}
            : card
        })
      })
      console.log('those card match')
      resetTurn()
    }else {
      console.log('those card do not match')
      setTimeout(() => {
        resetTurn()
      }, 500);

    }
  }, [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h1>Magic Math</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards?.map( card => (
          <SingleCard
            key={card.id}
            data={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
