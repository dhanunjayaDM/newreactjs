import React from 'react'

function Title() {
    console.log("title com")
    return (
        <div>
            <h1>Title for doc</h1>
        </div>
    )
}

export default React.memo(Title)
