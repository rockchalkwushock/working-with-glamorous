import glamorous from 'glamorous'

import { colors, fonts } from '../lib/styles/global'

const StyledTitle = glamorous.h1({
  color: `${colors.emphasis}`,
  fontFamily: `${fonts.secondary}`,
  margin: '0',
  padding: '1em 0 1em 0'
})

StyledTitle.displayName = 'StyledTitle'

const Title = () => <StyledTitle>Glamorous SearchBar</StyledTitle>

export default Title
