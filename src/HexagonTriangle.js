import React, { Component } from 'react';
import HexaflexagonGeometry from './util/HexaflexagonGeometry';

class HexagonTriangle extends Component {
  render() {
    const triangleId = 'hexagon' + this.props.index + this.props.row;

    const geo = new HexaflexagonGeometry(this.props.triangleBase);

    const positionHalfTurn = (this.props.row + this.props.index) % 2 === 1 ? 1 : 0;
    const halfTurns = this.props.turns * 2 + positionHalfTurn;

    return(
      <g>
        <defs>
          <use
            id={`face_oriented_${triangleId}`}
            xlinkHref={'#'+this.props.hexagonId}
            transform={`rotate(${-60*this.props.triangle} ${geo.hexagonWidth/2} ${geo.hexagonHeight/2})`}
          />
          <use
            id={`triangle_cut_${triangleId}`}
            xlinkHref={`#face_oriented_${triangleId}`}
            clipPath={`url(#${this.props.clipPathId})`}
            transform={`translate(${-geo.triangleBase/2} 0)`}
          />
          <use
            id={`triangle_oriented_${triangleId}`}
            xlinkHref={`#triangle_cut_${triangleId}`}
            transform={[
              `translate(0 ${halfTurns % 2 === 1 ? geo.yCenterOfTriangleMass : 0})`,
              `rotate(${60*halfTurns} ${geo.xCenterOfTriangleMass} ${geo.yCenterOfTriangleMass})`,
            ]}
          />
        </defs>
        <use
          xlinkHref={`#triangle_oriented_${triangleId}`}
          transform={`translate(${geo.triangleBase/2 * this.props.index} 0)`}
        />
      </g>
    );
  }
}

export default HexagonTriangle;
