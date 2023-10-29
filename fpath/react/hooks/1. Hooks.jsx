/*
   Hooks
      useState()
      useEffects()
      useContext()
      useRef()
      useMemo()
*/

// Хуки это обичные функции

//==============================================================================
// useState() - позволяет управлять состоянием
// =============================================================================

//==============================================================================
// useEffects() - позволяет управлять сайдэфектами
//==============================================================================

//==============================================================================
// useContext()
//==============================================================================

//==============================================================================
// useRef()
//==============================================================================

//==============================================================================
// useMemeo()

import { useMemo, useState } from "react";

const filteredCars = useMemo(() => cars.filter(car => car.price > 2000, []))
/* here we use useMemo hook, then an arrow function, it returns something and 
   it will be input in filteredCars varible. in the end we will use an array of dependencies.

   filtered cars list with price more than 2000 will be geneterated only onece
   and stored in the cash, because there are no incming parameters and it will not be changed.

   if we will have filter params and it will be changed (it comes from the state), in that case we will put the  filter in the dependencies array */
const [filter, setFilter] = useState('')

const filteredCars = useMemo(() => cars.filter(car => filter, [filter]))
// in this case it will be update the cash every time the filter (state) will be changed
// =============================================================================

// =============================================================================
// useCallback()
// =============================================================================