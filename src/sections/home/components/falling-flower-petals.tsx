import type { CSSProperties } from 'react';

const PETAL_COUNT = 16;

const PETAL_COLORS = [
  '#f08aaa',
  '#df6388',
  '#f5a0b6',
  '#cf5479',
  '#eb7899',
];

const PETAL_SHAPES = [
  {
    outline:
      'M12 30C9 26 3 20 2.8 14.2 2.6 8.4 6.4 5.5 10.1 9.2 10.1 4.5 14.2 2 17.2 5.1 19.8 7.7 18.7 10.2 18.7 10.2 22.5 7.8 24.7 11.8 21.8 18.2 19.6 23.1 15.1 27.8 12 30Z',
    vein: 'M12 27C11.8 20 11.9 13.5 12.3 7.1',
    highlight: 'M6.2 15.2C6.8 19.1 9 22.2 10.3 23.7',
  },
  {
    outline:
      'M12 1C17.7 5.4 23 12.4 21.2 19.2 19.7 25 15.8 29.1 12 31 8.2 29.1 4.3 25 2.8 19.2 1 12.4 6.3 5.4 12 1Z',
    vein: 'M12 4C11.7 11 11.8 20 12 28',
    highlight: 'M6.2 13.2C6.5 17.6 8.3 21.6 9.8 24',
  },
  {
    outline:
      'M12 2C15.2 7.5 22.5 13.2 22 20.1 21.6 26.2 16.7 29.1 12 30 7.3 29.1 2.4 26.2 2 20.1 1.5 13.2 8.8 7.5 12 2Z',
    vein: 'M12 5C12.2 12 12.1 20 12 27',
    highlight: 'M5.1 18.2C5.7 22 7.8 24.4 9.7 25.5',
  },
  {
    outline:
      'M12 1C15 7.4 20.8 13.8 19.9 20.4 19.1 26.4 15 29.9 12 31 9 29.9 4.9 26.4 4.1 20.4 3.2 13.8 9 7.4 12 1Z',
    vein: 'M12 4C11.8 11 12 19 12 28',
    highlight: 'M7.1 16.2C7.1 20.3 8.7 23.8 10 25.4',
  },
  {
    outline:
      'M12 2C15.4 7.8 21.7 12.5 21.5 19.4 21.3 25.5 17.3 29.2 12 31 6.7 29.2 2.7 25.5 2.5 19.4 2.3 12.5 8.6 7.8 12 2Z',
    vein: 'M12 5C12 12 12 20 12 28',
    highlight: 'M5.5 18C6.1 22 8.3 25 10 26',
  },
  {
    outline:
      'M12 1C14.5 6.8 19.3 12.5 18.8 19.5 18.4 25.3 15.3 29.3 12 31 8.7 29.3 5.6 25.3 5.2 19.5 4.7 12.5 9.5 6.8 12 1Z',
    vein: 'M12 4C12 12 12 20 12 28',
    highlight: 'M7.5 17C7.5 21 9.1 24.3 10.3 25.8',
  },
  {
    outline:
      'M12 2C16.5 6.2 22.8 10.6 22 17.5 21.2 24.6 16.8 29.1 12 31 7.2 29.1 2.8 24.6 2 17.5 1.2 10.6 7.5 6.2 12 2Z',
    vein: 'M12 5C11.7 12 12 20 12 28',
    highlight: 'M5.2 16.5C5.8 21 8.1 24.7 9.8 26',
  },
];

const FLOWER_INDICES = new Set([3, 10, 17]);

const FLOWER_PETAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const HORIZONTAL_POSITIONS = [
  3, 9, 16, 22, 29, 35, 42, 48, 55, 61, 68, 74, 81, 87, 93, 98,
];

const FALLING_OBJECT_COUNT = PETAL_COUNT + FLOWER_INDICES.size;

type PetalStyle = CSSProperties & {
  '--petal-color': string;
  '--petal-delay': string;
  '--petal-drift': string;
  '--petal-height': string;
  '--petal-mid-drift': string;
  '--petal-opacity': number;
  '--petal-size': string;
  '--petal-spin': string;
  '--petal-x': string;
  '--petal-duration': string;
};

export function FallingFlowerPetals() {
  return (
    <div className="falling-petals" aria-hidden="true">
      {Array.from({ length: FALLING_OBJECT_COUNT }, (_, index) => {
        const drift = ((index * 17) % 81) - 40;
        const isFlower = FLOWER_INDICES.has(index);
        const size = isFlower ? 27 + (index % 2) * 3 : 17 + (index % 4) * 3;
        const shape = PETAL_SHAPES[index % PETAL_SHAPES.length];

        const style: PetalStyle = {
          '--petal-color': PETAL_COLORS[index % PETAL_COLORS.length],
          '--petal-delay': `${-((index * 2.3) % 19)}s`,
          '--petal-drift': `${drift}px`,
          '--petal-mid-drift': `${-Math.round(drift * 0.45)}px`,
          '--petal-opacity': isFlower ? 0.78 : 0.72 + (index % 4) * 0.06,
          '--petal-size': `${size}px`,
          '--petal-height': `${isFlower ? size : size * 1.3}px`,
          '--petal-spin': `${220 + ((index * 73) % 240)}deg`,
          '--petal-x': `${HORIZONTAL_POSITIONS[index % HORIZONTAL_POSITIONS.length]}%`,
          '--petal-duration': `${14 + ((index * 7) % 10)}s`,
        };

        return (
          <svg
            key={`petal-${index}`}
            className="falling-petals__petal"
            viewBox={isFlower ? '0 0 40 40' : '0 0 24 32'}
            fill="none"
            style={style}
          >
            {isFlower ? (
              <>
                {FLOWER_PETAL_ANGLES.map((angle, petalIndex) => (
                  <path
                    key={`flower-${index}-petal-${angle}`}
                    d="M20 21C14.7 17.3 14.2 8.6 20 3.8 25.8 8.6 25.3 17.3 20 21Z"
                    transform={`rotate(${angle} 20 20)`}
                    fill="var(--petal-color)"
                    fillOpacity={petalIndex % 2 === 0 ? '0.96' : '0.78'}
                    stroke="white"
                    strokeOpacity="0.65"
                    strokeWidth="0.8"
                  />
                ))}
                <circle
                  cx="20"
                  cy="20"
                  r="3.2"
                  fill="#f8d77a"
                  stroke="white"
                  strokeOpacity="0.8"
                  strokeWidth="0.8"
                />
                <circle cx="20" cy="20" r="1" fill="#fff8dc" />
              </>
            ) : (
              <>
                <path
                  d={shape.outline}
                  fill="var(--petal-color)"
                  fillOpacity="0.95"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeWidth="1"
                />
                <path
                  d={shape.vein}
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
                <path
                  d={shape.highlight}
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="0.65"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        );
      })}
    </div>
  );
}
