import React from 'react';
import styles from './Grid.module.css';

interface GridProps {
  data: { 
    id: number;
    name: string;
    age: number
  } [];
  renderItems: any;
}

const Grid: React.FC<GridProps> = ({ data, renderItems }) => {
    const groupingByTens = data.reduce((acc: Array<any>, item, index) => {
      const chunkIndex = Math.floor(index / 10);
      if(!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(item);
      return acc;
    }, []);
  return (
    <> 
      {
        groupingByTens.map((arr, index) => (
          <div className={styles.container}>
            <div className={styles.grid_container} key={index}>
              {
                arr.map(renderItems)
              }
            </div>
          </div> 
        ))
      }
    </>
  );
};

export default Grid;