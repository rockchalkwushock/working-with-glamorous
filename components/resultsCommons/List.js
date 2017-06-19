import glamorous from 'glamorous'

import Result from './Result'

const StyledList = glamorous.ul({
  lineHeight: '1.5',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  paddingBottom: '2em'
})

StyledList.displayName = 'StyledList'

const List = ({ questions }) =>
  <StyledList>
    {questions.map(q =>
      <Result key={Math.random()} link={q.link} title={q.title} />
    )}
  </StyledList>

export default List
