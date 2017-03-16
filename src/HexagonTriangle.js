import React, { Component } from 'react';
import HexaflexagonGeometry from './util/HexaflexagonGeometry';

class HexagonTriangle extends Component {
  render() {
    const hexagonId = 'hexagon' + this.props.index + this.props.row;

    const geo = new HexaflexagonGeometry(this.props.triangeBase);
    const xCenterOfMass = 1000;
    const yCenterOfMass = geo.triangleBase/(2*Math.sqrt(3));

    const positionRotateAngle = this.props.index % 2 === 1 ? 60 : 0;
    const rotation = positionRotateAngle + (120 * this.props.turns);
    const rotate = `rotate(${rotation} ${xCenterOfMass} ${yCenterOfMass })`;

    const xTranslation = (this.props.index - 1) * this.props.triangeBase/2;
    const yTranslation = this.props.index % 2 === 0 ? 0 : yCenterOfMass;
    const translate = `translate(${xTranslation} ${yTranslation})`;
    const transform = `${translate} ${rotate}`;


    return(
      <g>
        <defs>
          <use
            id={hexagonId}
            xlinkHref={'#'+this.props.hexagonId}
            transform={`rotate(${-60*this.props.triangle} ${geo.hexagonWidth/2} ${geo.hexagonHeight/2})`}
          />
        </defs>
        <use
          xlinkHref={'#'+hexagonId}
          clipPath={`url(#${this.props.clipPathId})`}
          transform={transform}
        />
      </g>
    );
  }
}

export default HexagonTriangle;
