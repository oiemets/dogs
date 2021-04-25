import React from 'react';
import styles from './Grid.module.css';

export type GridProps = {
  data: any[];
  renderItem: (chunk: any, index: number) => any;
}

const GROUP_BY = 10;

export const Grid: React.FC<GridProps> = ({ data, renderItem }) => {
  const grouped = data.reduce<any[][]>((acc: Array<any>, item, index) => {
    const chunkIndex = Math.floor(index / GROUP_BY);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, []);
  return (
    <>
      {
        grouped.map((arr, index) => (
          <div className={styles.container} key={index}>
            <div className={styles.grid_container}>
              {
                arr.map(renderItem)
              }
            </div>
          </div>
        ))
      }
    </>
  );
};