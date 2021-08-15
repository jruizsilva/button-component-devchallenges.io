import React from 'react';

const Code = ({ code, color = '#333333' }) => {
  return (
    <code>
      <pre
        style={{ color, fontFamily: 'Ubuntu Mono', fontSize: '12px' }}
      >{`${code}`}</pre>
    </code>
  );
};

export default Code;
