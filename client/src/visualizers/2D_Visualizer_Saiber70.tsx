// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const Visualizer_Saiber70 = new Visualizer(
    'Scott_Visualizer',
    (p5: P5, analyzer: Tone.Analyser) => {
      const width = window.innerWidth - 200;
      const height = window.innerHeight / 2;
      const dim = Math.min(width, height);
     
      p5.background(0, 100, 100, 255);


      p5.strokeWeight(dim * 0.05);


      const values = analyzer.getValue();    

      let angle = 90;
      let rectangle = 2;
      let index = 1;
      for(let i = 1; i <  angle; i += 2  / rectangle, i++){
        let x = width / 2;
        let y = height / 2;

        p5.stroke('blue');
        p5.fill('cyan')

        let burst_Size = Number(values[index]) * 30 * 50;
        p5.circle(x, y - 180, burst_Size);
        p5.circle(x, y + 180, burst_Size);
        p5.circle(x - 360, y, burst_Size);
        p5.circle(x + 360, y, burst_Size);
        p5.rect(x - 720, y, burst_Size, 50);
        p5.rect(x - 540, y - 90, burst_Size, 50);
        p5.rect(x - 540, y + 90, burst_Size, 50);
        p5.rect(x - 180, y - 90, burst_Size, 50);
        p5.rect(x - 180, y + 90, burst_Size, 50); 
        p5.rect(x, y, burst_Size, 50);
        p5.rect(x + 180, y - 90, burst_Size, 50);
        p5.rect(x + 180, y + 90, burst_Size, 50);
        p5.rect(x + 540, y - 90, burst_Size, 50);
        p5.rect(x + 540, y + 90, burst_Size, 50);
        p5.rect(x + 720, y, burst_Size, 50);
      }
    }
)