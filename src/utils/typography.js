import Typography from 'typography'
import stowLakeTheme from 'typography-theme-stow-lake'

stowLakeTheme.headerWeight = '100'
stowLakeTheme.bodyWeight = '100'
stowLakeTheme.headerFontFamily = ['Roboto Mono', 'monospace'];
stowLakeTheme.bodyFontFamily = ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'];
stowLakeTheme.baseFontSize = '24px';

const typography = new Typography(stowLakeTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

