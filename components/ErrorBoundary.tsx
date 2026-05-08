"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; error: Error | null; }

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error("Error:", error, errorInfo); }
  reset = () => this.setState({ hasError: false, error: null });

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-soft-blush flex items-center justify-center px-4">
          <div className="glass-card p-8 max-w-md text-center">
            <h2 className="clamp-text-2xl font-bold text-rich-cocoa mb-4">Something went wrong</h2>
            <p className="text-soft-mauve-gray mb-6">{this.state.error?.message}</p>
            <button onClick={this.reset} className="magnetic-button">Try again</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
