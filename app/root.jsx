import * as React from 'react'
import {Scripts} from 'remix'
import {Link } from "remix";
function App() {
  const [count, setCount] = React.useState(0)
  return (
    <html>
      <head>
        <title>My First Remix App</title>
      </head>
      <body>
        <p>This is a remix app. Hooray!</p>
        <button onClick={() => setCount(c => c + 1)}>{count}</button>
<br></br>
<br></br>

        <Scripts></Scripts>
        <Link to="/posts"><b>Posts</b></Link>
{/* hi */}

      </body>
    </html>
  )
}

export default App