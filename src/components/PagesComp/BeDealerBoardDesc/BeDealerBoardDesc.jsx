import React from 'react'

import BeDealerBoardListItem from '../../BeDealerBoardListItem/BeDealerBoardListItem'

const BeDealerBoardDesc = ({ scrBeDealerBoardDescProps, titleBeDealerBoardDescProps, itemsBeDealerBoardDescProps }) => {
  console.log(itemsBeDealerBoardDescProps);
  const sortItemsBeDealerBoardDescProps = itemsBeDealerBoardDescProps.map((item, index) =>
    <BeDealerBoardListItem key={index} textBeDealerBoardListItemProps={item[0]} />
  )

  return (
    <div className="be-dealer__board__desc">
      <div className="be-dealer__board__img__wrap">
        <img
          src={scrBeDealerBoardDescProps}
          alt="icon be dealer"
          className="be-dealer__board__image"
        />
        <h4 className="be-dealer__board__title">{titleBeDealerBoardDescProps}</h4>
      </div>
      <span className="be-dealer__board__bar"></span>
      <ul className="be-dealer__board__list">
        {sortItemsBeDealerBoardDescProps}
      </ul>
    </div>
  )
}

export default BeDealerBoardDesc