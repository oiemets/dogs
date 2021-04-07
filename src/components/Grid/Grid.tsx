import React from 'react';
import styles from './Grid.module.css';
import { Breed } from '../../state/actions';

interface GridProps {
  breeds: Breed[];
}

const gridArea = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ];


const Grid: React.FC<GridProps> = ({ breeds }) => {

  const temp = [...breeds];

  const tenArr = new Array(Math.ceil(breeds.length / 10))
    .fill(0)
    .map(_ => temp.splice(0, 10))

    console.log(tenArr);
    
  
  return (
    <div className={styles.container}> 
      <div className={styles.grid_container}>
        {/* <div className={`${styles.grid_item} ${styles.one}`}>item1</div>
        <div className={`${styles.grid_item} ${styles.two}`}>item2</div>
        <div className={`${styles.grid_item} ${styles.three}`}>item3</div>
        <div className={`${styles.grid_item} ${styles.four}`}>item4</div>
        <div className={`${styles.grid_item} ${styles.five}`}>item5</div>
        <div className={`${styles.grid_item} ${styles.six}`}>item5</div> */}

        {/* <img src={breeds.length > 0 ? breeds[0].image.url : ''} alt="test"
          className={`${styles.grid_item} ${styles.one}`}
        /> */}

        {
          tenArr.map(ten => {
            return ten.map((img, i: number) => {
              return <img 
                key={img.id}
                src={img.image.url} 
                alt={img.id}
                className={styles.grid_item}
                style={{gridArea: `${gridArea[i]}`}}
                />
            } )
          })
        }
      
      </div>
    </div>
  );
};


export default Grid;

