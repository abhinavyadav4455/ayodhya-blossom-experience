import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  type: 'rose' | 'marigold';
  size: number;
}

const FlowerPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  const createPetal = () => {
    const id = Date.now();
    const x = Math.random() * 100; // random x position (0-100%)
    const delay = Math.random() * 5; // random delay (0-5s)
    const duration = Math.random() * 5 + 5; // random duration (5-10s)
    const type = Math.random() > 0.5 ? 'rose' : 'marigold';
    const size = Math.random() * 10 + 10; // random size (10-20px)

    return { id, x, delay, duration, type, size };
  };

  useEffect(() => {
    // Create initial petals
    const initialPetals: Petal[] = [];
    for (let i = 0; i < 25; i++) {
      initialPetals.push(createPetal());
    }
    setPetals(initialPetals);

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals(prev => [...prev, createPetal()]);
    }, 300);

    // Clean up old petals to prevent memory issues
    const cleanup = setInterval(() => {
      setPetals(prev => {
        if (prev.length > 75) {
          // Keep only the most recent 50 petals
          return prev.slice(prev.length - 50);
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
    <>
      {petals.map(petal => (
        <div
          key={petal.id}
          className={`petal ${petal.type === 'rose' ? 'rose-petal' : 'marigold-petal'}`}
          style={{
            left: `${petal.x}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animation: `falling-petal ${petal.duration}s linear ${petal.delay}s forwards, sway ${petal.duration / 2}s ease-in-out ${petal.delay}s infinite`
          }}
        />
      ))}
    </>
  );
};

export default FlowerPetals;
