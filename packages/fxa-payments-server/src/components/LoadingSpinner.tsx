import React from 'react';

// eslint-disable-next-line max-len
const spinnerImage =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI3M3B4IiBoZWlnaHQ9IjczcHgiIHZpZXdCb3g9IjAgMCA3MyA3MyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDxkZWZzPiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI5My4wOTI4MDk2JSIgeTE9IjUyLjc3MzQzNzUlIiB4Mj0iNjguNTEzMzM5OCUiIHkyPSIxMTkuMzI2MDA3JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwQTg0RkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSI+PC9zdG9wPiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwQTg0RkYiIG9mZnNldD0iNjkuMzY5ODE4MiUiPjwvc3RvcD4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE4NEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjQ4NEM2IiBzdG9wLW9wYWNpdHk9IjAuMDA0Nzc3NjY5NTEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyNDg0QzYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzI0ODRDNiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+ICAgICAgICA8cmVjdCBpZD0icGF0aC0yIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNjAiPjwvcmVjdD4gICAgPC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJTaGFwZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuMDAwMDAwLCAtMS4wMDAwMDApIj4gICAgICAgICAgICA8cGF0aCBkPSJNNDEuOCw3My44IEMyMS45LDczLjggNS44LDU3LjcgNS44LDM3LjggQzUuOCwxOC4xIDIxLjYsMi4yIDQxLjEsMS44IEM0MS4zLDEuOCA0MS40LDEuOCA0MS40LDEuOCBDNDEuNSwxLjggNDEuNywxLjggNDEuOCwxLjggQzQ0LjYsMi4yIDQ2LjgsNC41IDQ2LjgsNy4zIEM0Ni44LDEwLjEgNDQuNiwxMi41IDQxLjgsMTIuNyBDMjgsMTIuOCAxNi44LDI0IDE2LjgsMzcuOCBDMTYuOCw1MS42IDI4LDYyLjggNDEuOCw2Mi44IEM1NS42LDYyLjggNjYuOCw1MS42IDY2LjgsMzcuOCBMNzcuOCwzNy44IEM3Ny44LDU3LjcgNjEuNyw3My44IDQxLjgsNzMuOCBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+ICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPiAgICAgICAgICAgIDwvbWFzaz4gICAgICAgICAgICA8ZyBpZD0iTWFzayI+PC9nPiAgICAgICAgICAgIDxwYXRoIGQ9Ik00MS44LDczLjggQzIxLjksNzMuOCA1LjgsNTcuNyA1LjgsMzcuOCBDNS44LDE4LjEgMjEuNiwyLjIgNDEuMSwxLjggQzQxLjMsMS44IDQxLjQsMS44IDQxLjQsMS44IEM0MS41LDEuOCA0MS43LDEuOCA0MS44LDEuOCBDNDQuNiwyLjIgNDYuOCw0LjUgNDYuOCw3LjMgQzQ2LjgsMTAuMSA0NC42LDEyLjUgNDEuOCwxMi43IEMyOCwxMi44IDE2LjgsMjQgMTYuOCwzNy44IEMxNi44LDUxLjYgMjgsNjIuOCA0MS44LDYyLjggQzU1LjYsNjIuOCA2Ni44LDUxLjYgNjYuOCwzNy44IEw3Ny44LDM3LjggQzc3LjgsNTcuNyA2MS43LDczLjggNDEuOCw3My44IFoiIGZpbGw9IiMwQTg0RkYiIG1hc2s9InVybCgjbWFzay0zKSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+';

export const LoadingSpinner = () => (
  <div id="loading-spinner" data-testid="loading-spinner">
    <img alt="Loading" src={spinnerImage} />
  </div>
);

export default LoadingSpinner;
