import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookeEffectRunOcce from './components/HookeEffectRunOcce';
import HookMouseunmount from './components/HookMouseunmount';
import IntervalHookcounter from './components/IntervalHookcounter';
import DataFetching from './components/DataFetching';
import HookCounterEffectne from './components/HookCounterEffectne';
import HookCounteronce from './components/HookCounteronce';
import UseContexthook from './components/useContexthook';
import UserReducerone from './components/UserReducerone';
import UseReduerTwo from './components/UseReduerTwo';
import UseReducerThree from './components/UseReducerThree';
import MultipleUseReducer from './components/MultipleUseReducer';
export const UserContext=React.createContext()
export const ChannalContext=React.createContext()
function App() {
  return (
    <div className="App">
     {/* <HookCounteronce/> */}
     {/* <UserContext.Provider value={'dhana'}>
       <ChannalContext.Provider  value={'mylari'}>
              <UseContexthook/>
       </ChannalContext.Provider>
     </UserContext.Provider> */}
     <MultipleUseReducer/>
    </div>
  );
}
export default App;
