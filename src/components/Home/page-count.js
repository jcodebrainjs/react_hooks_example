import React from "react";
import PropTypes from 'prop-types'

const PageCount = ({ pagination, ndx }) => {
  if (pagination !== null) {
    const pages = Math.floor(pagination.total_count / pagination.count) + 1
    const page = Math.floor(pagination.offset/pagination.count) + 1
    const imgnum = pagination.offset + ndx + 1
    return (
      <div className="page-count">
        <p>Img: <b>{imgnum}</b> | Page <b>{page}</b> of {pages}  | Total: <b>{ pagination.total_count }</b></p>
      </div>
    )
  }
  return null
};

PageCount.propTypes = {
  pagination: PropTypes.object,
  ndx: PropTypes.number,
}

PageCount.defaultProps = {
  pagination: null,
  ndx: 0,
}

export default PageCount;
