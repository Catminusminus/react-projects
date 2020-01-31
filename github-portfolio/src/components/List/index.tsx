import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`

const Label = styled.span`
  font-weight: strong;
`

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightGrey;
`

interface Props {
  items: any[]
  title: string
  children?: never
}

const List: React.FC<Props> = ({ title, items }) => (
  <>
    <Title>{title}</Title>
    <ListWrapper>
      {items.map(item => (
        <ListItem key={item.label}>
          <Label>{item.label}</Label>
          {item.value}
        </ListItem>
      ))}
    </ListWrapper>
  </>
)

export default List
