import React from 'react';
import '../../assets/scss/chronoStyles.css';
import { Chrono } from 'react-chrono';

export default function ChronoComponent({ chromoData }) {
  console.log(chromoData);
  return (
    <div className="App">
      <div style={{ width: '100%', height: '95vh' }}>
        <Chrono
          items={chromoData}
          mode="VERTICAL_ALTERNATING"
          cardHeight={200}
        />
      </div>
    </div>
  );
}
