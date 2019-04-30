import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CarouselNavigation = ({ pagination = null }) => {
  if (pagination !== null) {
    const prev = pagination.offset > 0;
    const next = pagination.offset < pagination.total_count - pagination.count;
    const page = Math.floor(pagination.offset / pagination.count) + 1;
    return (
      <div className="navigation">
        {prev && (
          <Link to={"/page/" + (page - 1)}>
            <Button>Previous Page</Button>
          </Link>
        )}
        {next && (
          <Link to={"/page/" + (page + 1)}>
            <Button>Next Page</Button>
          </Link>
        )}
      </div>
    );
  }
  return null;
};

export default CarouselNavigation;
