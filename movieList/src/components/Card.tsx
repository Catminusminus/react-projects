import * as React from 'react'
import { Card as BSCard, ListGroup } from 'react-bootstrap'

interface Props {
  ranking: number
  title: string
  year: number
  img: {
    src: string
    alt: string
  }
  distributor: string
  amount: number
  children?: never
}

const Card: React.FC<Props> = ({
  ranking,
  title,
  year,
  img,
  distributor,
  amount,
}) => (
  <BSCard>
    <BSCard.Img variant="top" src={`../src/${img.src}`} alt={img.alt} />
    <BSCard.Body>
      <BSCard.Title>
        <h2>{`#${ranking} - ${title}(${year})`}</h2>
      </BSCard.Title>
    </BSCard.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>{`Distributor: ${distributor}`}</ListGroup.Item>
      <ListGroup.Item>{`Amount: ${amount}`}</ListGroup.Item>
    </ListGroup>
  </BSCard>
)

export default Card
