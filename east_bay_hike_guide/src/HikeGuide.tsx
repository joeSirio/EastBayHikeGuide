import React, { useState } from 'react';
import IHike from './Interfaces/IHike';

function HikeGuide() {
    const [hikes, setHikes] = useState<IHike[]>([])

    return (
      <div className="hike-guide section">
        
      </div>
    );
  }
  
  export default HikeGuide;
  