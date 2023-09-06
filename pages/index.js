import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ margin:'0'}}>
      <header style={{ height: '83px', margin: '0', padding: '0' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
          <div>
            {/* logo */}
            <img src="/logo.png" alt="Logo" width="60px" height="60px" />
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        </div>
      </header>
      <header style={{ height: '616px', backgroundColor: '#60D400', margin: '0', padding: '0' }}>
        <div
          style={{
            height: '492px',
            position: 'relative',
            top: '124px',
            left: '181px',
          }}
        >
          {/* slider */}
        </div>
      </header>
      {/* idk */}
    </div>
  );
};

export default LandingPage;
