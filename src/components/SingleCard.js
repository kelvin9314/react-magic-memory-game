import './SingleCard.css'

const SingleCard = ({data}) => {
  return (
    <div className='card' >
      <div>
        <img className='front' src={data.src} alt="card front" />
        <img src="/img/cover.png" alt="card cover" />
      </div>
    </div>
  )
}

export default SingleCard


