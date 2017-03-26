import React, { Component } from 'react';
import TriangleGridRow from './TriangleGridRow';
import HexagonTriangle from './HexagonTriangle';
import HexaflexagonGeometry from './util/HexaflexagonGeometry';

const glueId = 'glue';
const hexagonIds = ['hf0', 'hf1', 'hf2'];

class Hexaflexagon extends Component {
  triangleBase = 1000;
  geometry = new HexaflexagonGeometry(this.triangleBase);
  viewBox = `0 0 ${this.geometry.triangleBase * 5.5} ${this.geometry.hexagonLength}`;

  imageUrl(i){
    if(this.props.images[i] === undefined) {
      return `${i}.svg`;
    } else {
      return this.props.images[i];
    }
  }


  render() {
    return(
      <svg viewBox={this.viewBox}>
        <def>
          { hexagonIds.map((id, i) =>
            <image id={id}
              key={i}
              width={this.geometry.hexagonWidth}
              height={this.geometry.hexagonLength}
              href={this.imageUrl(i)} />
          )}
          <image id={glueId}
            key={glueId}
            width={this.geometry.hexagonWidth}
            height={this.geometry.hexagonLength}
            href='glue.svg' />
        </def>
        <TriangleGridRow index={0} triangleBase={this.triangleBase}>
          <HexagonTriangle hexagonId={glueId} triangle={0} turns={0}/>
          <HexagonTriangle hexagonId={hexagonIds[0]} triangle={4} turns={1}/>
          <HexagonTriangle hexagonId={hexagonIds[2]} triangle={3} turns={2}/>
          <HexagonTriangle hexagonId={hexagonIds[2]} triangle={2} turns={1}/>
          <HexagonTriangle hexagonId={hexagonIds[1]} triangle={4} turns={0}/>
          <HexagonTriangle hexagonId={hexagonIds[1]} triangle={5} turns={0}/>
          <HexagonTriangle hexagonId={hexagonIds[0]} triangle={1} turns={2}/>
          <HexagonTriangle hexagonId={hexagonIds[0]} triangle={0} turns={1}/>
          <HexagonTriangle hexagonId={hexagonIds[2]} triangle={5} turns={2}/>
          <HexagonTriangle hexagonId={glueId} triangle={0} turns={0}/>
        </TriangleGridRow>
        <TriangleGridRow index={1} triangleBase={this.triangleBase}>
          <HexagonTriangle hexagonId={hexagonIds[2]} triangle={4} turns={1}/>
          <HexagonTriangle hexagonId={hexagonIds[1]} triangle={2} turns={0}/>
          <HexagonTriangle hexagonId={hexagonIds[1]} triangle={3} turns={0}/>
          <HexagonTriangle hexagonId={hexagonIds[0]} triangle={3} turns={2}/>
          <HexagonTriangle hexagonId={hexagonIds[0]} triangle={2} turns={1}/>
          <HexagonTriangle hexagonId={hexagonIds[2]} triangle={1} turns={2}/>
          <HexagonTriangle hexagonId={hexagonIds[2]} triangle={0} turns={1}/>
          <HexagonTriangle hexagonId={hexagonIds[1]} triangle={0} turns={0}/>
          <HexagonTriangle hexagonId={hexagonIds[1]} triangle={1} turns={0}/>
          <HexagonTriangle hexagonId={hexagonIds[0]} triangle={5} turns={2}/>
        </TriangleGridRow>
      </svg>
    )
  }
}

export default Hexaflexagon;

        // <TriangleGridRow index={1} triangleBase={this.triangleBase}>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={4} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={2} turns={2.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={3} turns={0.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={3} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={2} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={1} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={0} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={0} turns={2.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={1} turns={0.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={5} turns={1.5}/>
        // </TriangleGridRow>
        // <TriangleGridRow index={1} triangleBase={this.triangleBase}>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={4} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={2} turns={2.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={3} turns={0.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={3} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={2} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={1} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={0} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={0} turns={2.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={1} turns={0.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={5} turns={1.5}/>
        // </TriangleGridRow>
        // <TriangleGridRow index={1} triangleBase={this.triangleBase}>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={4} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={2} turns={2.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={3} turns={0.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={3} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={2} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={1} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={0} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={0} turns={2.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={1} turns={0.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={5} turns={1.5}/>
        // </TriangleGridRow>
        // <TriangleGridRow index={1} triangleBase={this.triangleBase}>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={4} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={2} turns={2.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={3} turns={0.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={3} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={2} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={1} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[2]} triangle={0} turns={1.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={0} turns={2.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[1]} triangle={1} turns={0.5}/>
        //   <HexagonTriangle hexagonId={hexagonIds[0]} triangle={5} turns={1.5}/>
        // </TriangleGridRow>