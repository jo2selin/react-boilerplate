import React from 'react'
import propTypes from 'prop-types'

export default class DefaultErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error)

    return { hasError: true }
  }

  static propTypes = {
    children: propTypes.node.isRequired,
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
