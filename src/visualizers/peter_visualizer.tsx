import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';
export const peter_visualizer = new Visualizer(
  "visualizer_peter",
  (p5: P5, analyzer: Tone.Analyser) => {
    p5.angleMode(p5.DEGREES);
    p5.noFill(); 
    p5.background(200, 150, 100, 99);
    p5.stroke(100);

    
    //center
    p5.translate(p5.width / 2, p5.height / 2);

    const values = analyzer.getValue();
  
   for(let i=0; i < 50; i += 1){
    let r = p5.map(p5.sin(p5.frameCount/10),-2, 2, 200, 400);
    let g = p5.map(i, 20, 50, 100, 200);
    let b = p5.map(p5.cos(p5.frameCount),-2, 2, 400, 200);
    p5.stroke(r, g, b);
    p5.rotate(p5.frameCount/5);
    p5.beginShape();
    
    for (let j = 0; j < 360; j += 50) {
      let index = p5.floor(p5.map(i, 0, 180, 0, values.length - 1));
      let radius = p5.map(Number(values[index]), -1, 1, 90, 180);

      // let radius = j/5 * 4;
      let x = radius * p5.sin(j);
      let y = radius * p5.cos(j);
      p5.vertex(x, y);
    }
    p5.endShape();
   }   
 }
);
