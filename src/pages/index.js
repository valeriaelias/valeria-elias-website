import * as React from "react"
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <Button 
      startIcon={<SaveIcon />}
      variant="contained" 
      href="#" 
      size="large"
      color="secondary">
        Hello
      </Button>
      <p>
        Edit <code>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      
    </main>
  )
}

export default IndexPage
