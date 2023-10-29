import styles from './Header.module.scss'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/slices/searchSlice'

function Search() {

   const allWords = useSelector((state) => state.words.allWords)
   const searchValue = useSelector((state) => state.search.searchValue)
   const dispatch = useDispatch()

   function handleInputChange(event) {
      dispatch(setSearchValue(event.target.value))
   }

   const inputRef = useRef()

   function clearInput() {
      dispatch(setSearchValue(''))
      inputRef.current.focus()
   }

   const matchedWords = searchValue ? allWords.filter((obj) => {
      return obj.word.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase());
   }).map(({ word, article, meaning }) => {
      return <li key={word}>{article + ' ' + word} - {meaning}</li>
   }) : [];

   return (<div className={styles.search}>
      <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 24" fill="none">
         <path d="M9.36408 0C4.21233 0 0.0351562 4.17718 0.0351562 9.32896C0.0351562 14.4807 4.21233 18.6579 9.36412 18.6579C11.3452 18.6579 13.1824 18.04 14.6926 16.9875L14.6937 16.9864L21.6125 23.9052C21.7409 24.0336 21.945 24.0369 22.0767 23.9052L23.9414 22.0405C24.0698 21.9121 24.0633 21.6992 23.9404 21.5763L17.0226 14.6585C18.0751 13.1472 18.693 11.31 18.693 9.32896C18.693 4.17718 14.5159 0 9.36408 0ZM9.36408 16.4629C5.42396 16.4629 2.23017 13.2691 2.23017 9.32896C2.23017 5.38884 5.424 2.19506 9.36408 2.19506C13.3042 2.19506 16.498 5.38884 16.498 9.32896C16.498 13.2691 13.3042 16.4629 9.36408 16.4629Z" fill="black" />
      </svg>
      <input
         type="text"
         placeholder='Поиск слов'
         value={searchValue}
         onChange={handleInputChange}
         ref={inputRef}
      />
      {searchValue && <svg
         className={styles.closeIcon}
         onClick={clearInput}
         xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L8.58579 10L0.292893 18.2929C-0.0976311 18.6834 -0.0976311 19.3166 0.292893 19.7071C0.683417 20.0976 1.31658 20.0976 1.70711 19.7071L10 11.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L11.4142 10L19.7071 1.70711C20.0976 1.31658 20.0976 0.683417 19.7071 0.292893C19.3166 -0.0976311 18.6834 -0.0976311 18.2929 0.292893L10 8.58579L1.70711 0.292893Z" fill="black" />
      </svg>}
      {(searchValue && matchedWords.length !== 0) ?
         <ul className={styles.matchedWords}>{matchedWords}</ul> :
         (searchValue && matchedWords.length === 0) ?
            <ul className={styles.matchedWords}><li>Слово не найдено</li></ul> : null}
   </div >)
}

export default Search