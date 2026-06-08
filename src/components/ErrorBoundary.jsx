import { Component } from 'react'

// Catches failures in decorative/WebGL children (e.g. Aurora when a browser
// has no WebGL context) so they degrade to `fallback` instead of crashing the
// whole page.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch() {
    // Intentionally silent — this only guards non-essential visual flourish.
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null
    return this.props.children
  }
}
