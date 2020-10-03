import { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'

type variant = 'h1' | 'h2'

const Home = () => {
  const [variant, setVariant] = useState('h1' as variant)
  useEffect(() => {
    setTimeout(() => {
      setVariant('h2')
    }, 1000);
  }, [])
  return (<>
    <Typography variant={variant}>Style applied at runtime</Typography>
    <Typography variant='h3'>No style applied at runtime</Typography>
  </>);
}

export default Home
