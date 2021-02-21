import React from 'react';
import styles from './styles/Filter.module.css'

const {
  FilterBlock,
  FilterBlock_title,
  FilterBlock_list,
  FilterBlock_item,
} = styles;

const Filter: React.FC = () => {
  return <>
    <div className={FilterBlock}>
      <h2 className={FilterBlock_title}>Количество пересадок</h2>
      <ul className={FilterBlock_list}>
        <li className={FilterBlock_item}>
          <input type={"checkbox"} id={`1`}/>
          <label htmlFor={`1`}>Все</label>
        </li>
        <li className={FilterBlock_item}>
          <input type={"checkbox"} id={`2`}/>
          <label htmlFor={`2`}>One</label>
        </li>
        <li className={FilterBlock_item}>
          <input type={"checkbox"} id={`3`}/>
          <label htmlFor={`3`}>Two</label>
        </li>
      </ul>
    </div>
  </>;
};

export default Filter;
