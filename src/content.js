import {memo} from 'react'

const Content = ({count}) => {
    console.log("Re-render");
    return (
    <div>
        <h1>Hello {count}</h1>
    </div>
  )
}

export default memo(Content)