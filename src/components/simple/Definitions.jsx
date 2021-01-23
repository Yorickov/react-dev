import React from 'react';
import { uniqueId } from 'lodash';

const Definitions = ({ data }) => {
  const renderDef = (array) => (
    <dl>
      {array.map(({ dt, dd }) => (
        <React.Fragment key={uniqueId()}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </React.Fragment>
      ))}
    </dl>
  );

  return data.length > 0 && renderDef(data);
};

export default Definitions;
