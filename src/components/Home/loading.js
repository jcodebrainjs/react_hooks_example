import React from "react";
import { Icon } from "semantic-ui-react";

const Loading = ({ loading }) => (
  <div className="loading">
    <div className={loading ? "loading__card" : "loading__card loaded"}>
      <Icon name="cog" loading={true} size="large" color="black" />
    </div>
  </div>
);

export default Loading;
