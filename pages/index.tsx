import { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  useClassProp: {
    backgroundColor: theme.palette.primary.main
  },
  useClassNameProp: {
    backgroundColor: theme.palette.primary.dark
  }

}))

type variant = 'h1' | 'h2'

const Home = () => {
  const classes = useStyles()
  const [variant, setVariant] = useState('h1' as variant)
  useEffect(() => {
    setTimeout(() => {
      setVariant('h2')
    }, 1000);
  }, [])
  return (
    <>
      <Typography variant={variant}>Prop updated at runtime</Typography>
      <Typography variant="h3">No prop updated at runtime</Typography>
      <h4 class={classes.useClassProp}>
        Regular HTML tag using <code>class</code> prop (should have green BG)
      </h4>
      <Typography class={classes.useClassProp}>
        MUI component using <code>class</code> prop (should have serif font and green BG)
      </Typography>
      <h4 className={classes.useClassNameProp}>
        Regular HTML tag using <code>className</code> prop (should have green
        BG)
      </h4>
      <Typography className={classes.useClassNameProp}>
        MUI component using <code>className</code> prop (should have serif font and green BG)
      </Typography>
    </>
  );
}

export default Home
