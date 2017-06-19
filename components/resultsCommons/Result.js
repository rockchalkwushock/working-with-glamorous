import glamorous from 'glamorous'

const StyledResult = glamorous.li({
  color: 'green'
})

const StyledLink = glamorous.a({
  color: 'orange',
  ':visited': {
    color: 'orange'
  },
  ':hover': {
    color: 'green'
  }
})

StyledLink.displayName = 'StyledLink'
StyledResult.displayName = 'StyledResult'

const Result = ({ link, title }) =>
  <StyledResult>
    <StyledLink href={link}>
      {title}
    </StyledLink>
  </StyledResult>

export default Result
