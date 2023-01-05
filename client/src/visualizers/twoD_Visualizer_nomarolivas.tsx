import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const twoD_Visualizer_nomarolivas = new Visualizer(
    'nomarolivas_twoD_Visualizer',
    (p5: P5, analyzer: Tone.Analyser) => {

        const width= window.innerWidth-200;
        const height = window.innerHeight/ 2;
        const space = Math.min(width,height);

        p5.background('rgb(20, 33, 61)');
        p5.strokeWeight(space*0.01);
        p5.angleMode('degrees');
        p5.translate(width/2, height/2);

        p5.fill('rgb(207, 117, 8)');

        const values = analyzer.getValue();

        p5.beginShape();
  
        for(let i =0; i< 360; i++){ 
        
            const amplitude = values[i] as number;
            p5.stroke('rgb(200, 204, 203)');
            let r=p5.map(amplitude,0,1,25,250);
            let x = r* Math.cos(i);
            let y = r*Math.sin(i);
            p5.vertex(x,y);            
            p5.square(x - 180, y - 90, amplitude, 50);
            p5.square(x - 180, y + 90, amplitude, 50); 
            p5.square(x, y, amplitude, 50);
            p5.square(x + 180, y - 90, amplitude, 50);
            p5.square(x + 180, y + 90, amplitude, 50);
        }
        p5.endShape();

    },

);
