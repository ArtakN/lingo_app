// spread objects as props with spread operator

// in cardData.js we have cardData array with 3 objects in it
const cardData = [
   {
      id: 1,
      coverImg: 'katie.png',
      title: 'First Card Title',
      stats: {
         rating: 5,
         reviewCount: 28
      },
      location: 'USE',
      price: 250,
      count: 0
   },
   {},
   {}
]

export default cardData;

// App.js
import cardData from './cardData.js'

// passing props to the Card component
function App() {
   return (
      <div className="App">
         <section className='cardList'>
            {cardData.map(card => <Card
               key={card.id}
               coverImg={card.coverImg}
               rating={card.stats.rating}
               reviewCount={card.stats.reviewCount}
               location={card.location}
               title={card.title}
               price={card.price}
               count={card.count}
            />)}
         </section>
      </div>
   );
}

// Card.jsx
// using props in the component 
function Card(props) {
   return (
      <div className='card'>
         <img src={props.coverImg} />
         <div className='card__details'>
            <span className='card__rating'>{props.rating}</span>
            <span className='card__review'>{props.reviewCount}</span>
            <span className='card__location'>{props.location}</span>
         </div>
         <p className='card__title'>{props.title}</p>
         <p className='card__price'> <span>From ${props.price} /</span> person</p>
         <div className='card__coujnt'>{props.count}</div>
      </div >
   )
}

// -----------------------------------------------------------------------

//  There are a lot of props here, so we need to short it.

// First way to short it - passing the whole object in props
function App() {
   return (
      <div className="App">
         <section className='cardList'>
            {cardData.map(card => <Card
               key={card.id}
               card={card}
            />)}
         </section>
      </div>
   );
}

// in Card.jsx in props we get card object, so we need to get data from props.card
function Card(props) {
   return (
      <div className='card'>
         <img src={props.card.coverImg} />
         <div className='card__details'>
            <span className='card__rating'>{props.card.rating}</span>
            <span className='card__review'>({props.card.reviewCount}) •</span>
            <span className='card__location'>{props.card.location}</span>
         </div>
         <p className='card__title'>{props.card.title}</p>
         <p className='card__price'> <span>From ${props.card.price} /</span> person</p>
         <div className='card__coujnt'>{props.card.count}</div>
      </div >
   )
}

// -----------------------------------------------------------------------

// second way to short it using Spread Operator to pass in props destuctured object 
function App() {
   return (
      <div className="App">
         <section className='cardList'>
            {cardData.map(card => <Card
               key={card.id}
               {...card}      // destucturing object card
            />)}
         </section>
      </div>
   );
}

/* in Card.jsx we will recieve destructured card objet in props 
   like {coverImg, rating, reviwCount, location, title, price, count} */
function Card(props) {
   return (
      <div className='card'>
         <img src={props.coverImg} />
         <div className='card__details'>
            <span className='card__rating'>{props.rating}</span>
            <span className='card__review'>({props.reviewCount})</span>
            <span className='card__location'>{props.location}</span>
         </div>
         <p className='card__title'>{props.title}</p>
         <p className='card__price'>
            <span>From ${props.price} /</span> person
         </p>
         <div className='card__coujnt'>{props.count}</div>
      </div >
   )
}
//==============================================================================