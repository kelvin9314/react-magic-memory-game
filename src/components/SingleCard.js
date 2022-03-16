import './SingleCard.css'

const SingleCard = ({ data, handleChoice, flipped = false, disabled = false }) => {

  const  handleClick = () => {
    if(disabled) return

    handleChoice(data)
  }

  return (
    <div className='card' >
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={data.src} alt="card front" />
        <img
          src="/img/cover.png"
          alt="card cover"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default SingleCard


