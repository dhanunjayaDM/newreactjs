import React from 'react'
import {UserContext,ChannalContext} from '../App';
function ComponentF() {
    return (
        
            <UserContext.Consumer>
                {user => {
                return     (
                <ChannalContext.Consumer>
                  {channal=>{
                      return (
                          <div>
                              User context value {user}, channal context value {channal}
                          </div>
                      )
                  }}
                </ChannalContext.Consumer>)  
                }}
            </UserContext.Consumer>
    )
}
export default ComponentF
