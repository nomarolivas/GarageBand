// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, { useState } from 'react';

// Project imports
import { Instrument, InstrumentProps } from '../Instruments';
import saxKey from './../img/sax_key.jpeg';


/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Saxophone.
 ** ------------------------------------------------------------------------ */

interface SaxKeyProps {
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.Synth; 
    minor?: boolean; 
    octave: number;
    index: number; 

}

export function SaxKey({
    note,
    synth,
    minor,
    index,

}: SaxKeyProps): JSX.Element {

    const [sample] = useState(

        new Tone.Sampler({
            urls:{
                B4: "saxophone_sample.wav",
            },
        }).toDestination()
    );

    const sax_sample= (note: string) =>{
        sample.triggerAttackRelease([`${note}`], 1);
    };

    const saxImage ={
        width: "100px",

    };

    return(
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
    onMouseDown={() => sax_sample(`${note}`)} 
    onMouseUp={() => synth?.triggerRelease('+0.25')} 
    className={classNames('bt bb pointer absolute dim', {
    })}
    style={{

      top: 0 ,
      left: `${index * 200}px`,
      width: '10rem',
      marginLeft:'1px',

    }}
    
  >
    <img src={saxKey} style={saxImage} alt="drum_key"/>

  </div>
);        
}

function Saxophone({synth, setSynth}: InstrumentProps): JSX.Element {

    const keys = List([
        { note: 'C', idx: 0 },
        { note: 'Db', idx: 0.5 },
        { note: 'D', idx: 1 },
        { note: 'Eb', idx: 1.5 },
        { note: 'E', idx: 2 },
        { note: 'F', idx: 3 },
        { note: 'Gb', idx: 3.5 },
        { note: 'G', idx: 4 },
        { note: 'Ab', idx: 4.5 },
        { note: 'A', idx: 5 },
        { note: 'Bb', idx: 5.5 },
        { note: 'B', idx: 6 },
      ]);

      return(
        <div className="pv4">
        <div className="relative dib h4 w-100 ml4">
          {Range(0, 6).map(octave =>
            keys.map(key => {
              const isMinor = key.note.indexOf('b') !== -1;
              const note = `${key.note}${octave}`;
              return (
                <SaxKey
                  key={note} 
                  note={note}
                  synth={synth}
                  minor={isMinor}
                  octave={octave}
                  index={key.idx}
                />
              );
            }),
          )}
        </div>
      </div>
      );
}

export const SaxophoneInstrument = new Instrument("Saxophone-nomarolivas", Saxophone)



