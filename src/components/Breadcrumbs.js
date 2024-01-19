import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumbs">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      {pathnames.map((name, index) => (
        <React.Fragment key={name}>
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
          <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>{name}</Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;