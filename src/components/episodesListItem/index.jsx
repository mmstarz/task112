import React from 'react';
import { Link } from 'react-router-dom';

const EpisodesListItem = ({ id, title = '', airDate = '' }) => {
  const redirectPath = `/episode/${id}`;
  return (
    <div>
      <div>
        <Link to={redirectPath}>{title}</Link>
        Date: {airDate}
      </div>
    </div>
  );
};
export default EpisodesListItem;
