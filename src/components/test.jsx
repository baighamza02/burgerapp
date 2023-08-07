import React from 'react';

function TestComponent({ data }) {
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}

export default TestComponent;