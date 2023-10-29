// In this example, we use the Array.isArray() method to check if the imgList prop is an array.

// ======================================================================================================
/* По умалчанию react не знает каком меcте компонента необходимо добавлять вложенный элемент,
   для этого предназначен специальный props - props.children. ??????
   Если хотим кнопку делать disabled, то в теге button добавляем disabled={true}   */

function MyButton(props) {
   return (
      <div className={classes.buttonContainer}>
         <button disabled={true} className={classes.button}>{props.children}Text</button>
      </div>
   )
}
// ======================================================================================================

// 2 варианта написание условия коротким синтексисом (ES6)

function Card(props) {
   return (
      <div className='card'>
         {/*   тут как бы код остановится если найдет false
                  чтобы код пошел дальше надо чтобы первая часть была true
                  если первая часть будет false, то остановится и дальше не пойдет  */}
         {props.count === 0 && < div className='card__spots'>SOLD OUT</div>}
         {/*  чтобы код пошел дальше надо чтобы первая часть была false
                  если первая часть будет false, то код остновится. */}
         {!props.count && < div className='card__spots'>SOLD OUT</div>}
      </div >
   )
}

// тут как бы ищет true, чтобы вторая часть показала надо чтобы первая была false
//  если первая часть будет false, то он пойдет дальше искать true
//  если же первая часть будет true, то код остановится и не пойдет дальше
{ props.count === 0 || < div className='card__spots'>SOLD OUT</div> }


// ======================================================================================================
