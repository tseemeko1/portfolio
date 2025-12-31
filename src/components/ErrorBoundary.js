import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-site bg-no-repeat bg-cover p-4">
          <div className="bg-white/10 backdrop-blur-xl border-2 border-red-500/50 rounded-2xl p-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
            <p className="text-white/80 mb-4">
              An error occurred while loading the application. Please check the browser console for details.
            </p>
            <details className="mb-4">
              <summary className="text-white/60 cursor-pointer mb-2">Error Details</summary>
              <pre className="bg-black/50 p-4 rounded text-xs text-red-300 overflow-auto max-h-60">
                {this.state.error?.toString()}
                {this.state.error?.stack}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-sm"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

