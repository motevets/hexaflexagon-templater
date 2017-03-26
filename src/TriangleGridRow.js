import React, { Component } from 'react';
import HexaflexagonGeometry from './util/HexaflexagonGeometry';

const clipPathId = 'cp0';

class TriangleGridRow extends Component {
  render() {
    const geo = new HexaflexagonGeometry(this.props.triangleBase);
    const translate = `translate(0 ${this.props.index * geo.triangleHeight})`;
    const transform = `${translate}`;
    return(
      <g transform={transform}>
        <defs>
          <clipPath id={clipPathId}>
            <polygon
              points={[
                [geo.triangleBase/2,0],
                [3*geo.triangleBase/2,0],
                [geo.triangleBase, geo.triangleHeight]]}/>
          </clipPath>
        </defs>
        {this.props.children.map((triangle, i) =>
          React.cloneElement(triangle, {
            key: i,
            index: i,
            row: this.props.index,
            clipPathId: clipPathId,
            triangleBase: this.props.triangleBase
          })
        )}
      </g>
    );
  }
}

export default TriangleGridRow;
