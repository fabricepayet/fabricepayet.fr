import Typography from 'typography'
import stowLakeTheme from 'typography-theme-stow-lake'

const typography = new Typography(stowLakeTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

