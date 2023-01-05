// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const Radial_Visualizer_carmelodz = new Visualizer(
    'Carmelo_Radial_Visualizer',
    (p5: P5, analyzer: Tone.Analyser) => {
      const width = window.innerWidth - 200;
      const height = window.innerHeight / 2;
      const screen_Space = Math.min(width, height);

      p5.background(117, 198, 194, 255);

      p5.strokeWeight(screen_Space * 0.050);

      p5.angleMode('degrees');

      const values = analyzer.getValue();    

      //Outer Radial Circles 
      let angle = 90;
      let num_Circles = 18;
      let index = 1;
      for(let i = angle; i < Math.PI * 2 + angle; i += 2 * Math.PI / num_Circles){
        let x = 270 * Math.cos(i) + width / 2;
        let y = 270 * Math.sin(i) + height / 2;
        p5.point(x,y);
        p5.stroke('red');
  
        let burst_Size = Number(values[index]) * 30 * 12;
        p5.circle(x,y,burst_Size);
      }

      //Big Center Circle 
      p5.translate(width / 2, height / 2); //Center to screen
      for (let i = -1; i <= 1; i += 2) {
        p5.beginShape();
      
        for (let k = 0; k <= 140; k++) {
          const amplitude = values[index] as number; //React with music tone

          const z = p5.map(amplitude * 1, -1, 1, 100, 250);
          const x = z * p5.sin(k) * i;
          const y = z * p5.cos(k);

          p5.stroke('green'); //Outer radius color
          p5.fill('orange');  //Inner radius color

          p5.vertex(x, y); //Set vertex to center of Outer Radial circles 
        }

        p5.endShape();
      }
  
    },
);