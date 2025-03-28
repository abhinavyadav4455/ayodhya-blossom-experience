import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  type: 'rose' | 'marigold' | 'saffron';
  size: number;
  rotation: number;
}

const FlowerPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  const createPetal = (): Petal => {
    const id = Date.now() + Math.random();
    const x = Math.random() * 100; // random x position (0-100%)
    const delay = Math.random() * 5; // random delay (0-5s)
    const duration = Math.random() * 5 + 5; // random duration (5-10s)
    const typeRandom = Math.random();
    let type: 'rose' | 'marigold' | 'saffron';
    
    if (typeRandom < 0.33) {
      type = 'rose';
    } else if (typeRandom < 0.66) {
      type = 'marigold';
    } else {
      type = 'saffron';
    }
    
    const size = Math.random() * 20 + 15; // random size (15-35px)
    const rotation = Math.random() * 360; // random rotation (0-360deg)

    return { id, x, delay, duration, type, size, rotation };
  };

  useEffect(() => {
    // Create initial petals
    const initialPetals: Petal[] = [];
    for (let i = 0; i < 35; i++) {
      initialPetals.push(createPetal());
    }
    setPetals(initialPetals);

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals(prev => [...prev, createPetal()]);
    }, 200);

    // Clean up old petals to prevent memory issues
    const cleanup = setInterval(() => {
      setPetals(prev => {
        if (prev.length > 100) {
          // Keep only the most recent 75 petals
          return prev.slice(prev.length - 75);
        }
        return prev;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="flower-petals-container">
      {petals.map(petal => (
        <div
          key={petal.id}
          className={`petal ${petal.type === 'rose' ? 'rose-petal' : petal.type === 'marigold' ? 'marigold-petal' : 'saffron-petal'}`}
          style={{
            left: `${petal.x}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            transform: `rotate(${petal.rotation}deg)`,
            animation: `falling-petal ${petal.duration}s linear ${petal.delay}s forwards, sway ${petal.duration / 2}s ease-in-out ${petal.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
};

export default FlowerPetals;
