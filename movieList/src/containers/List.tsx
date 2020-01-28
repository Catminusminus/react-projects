import * as React from 'react'
import Card from '../components/Card'
import { Row, Col } from 'react-bootstrap'

const List = () => {
  const ref = React.useRef()
  const [data, setData] = React.useState([] as any)
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    ;(async () => {
      const movies = await fetch('../src/assets/data.json')
      const moviesJSON = await movies.json()
      if (moviesJSON) {
        setData(moviesJSON)
        setLoading(false)
      }
    })()
  }, [ref])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Row>
          {data.map((movie: any) => (
            <Col sm={2}>
              <Card key={movie.id} {...movie} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default List
