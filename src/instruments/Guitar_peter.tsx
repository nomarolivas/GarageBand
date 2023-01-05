// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import { useState } from 'react';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import guitar from './../img/guitar.jpg';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Guitar.
 ** ------------------------------------------------------------------------ */

export function GuitarNotes({
    note,
    synth,
    minor,
    index,
  }: GuitarProps): JSX.Element {

const [sample] = useState(
    new Tone.Sampler({
    urls:{
    B4: "guitar_sample_note.wav",
    },
    }).toDestination()
    );
        
const guitar_sample = (note: string) => {
    sample.triggerAttackRelease([`${note}`], 1);
    };
    
const guitarImage = {
    width: "200%",
    };
  
    return (
      // Observations:
      // 1. The JSX refers to the HTML-looking syntax within TypeScript.
      // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
      // 3. The curly braces `{` and `}` should remind you of string interpolation.
      <div
        onMouseDown={() => guitar_sample(`${note}`)} 
        onMouseUp={() => synth?.triggerRelease('+0.05')} 
        className={classNames('bt bb pointer absolute dim', {
        })}
        style={{
  
          // CSS for guitar
          top: 0 ,
          left: `${index * 100}px`,
          width: '30rem',
          marginLeft:'0px',
          marginRight:'10px'
        }}
        
      >
        <img src={guitar} style={guitarImage} 
        alt="guitar_note"/>
  
      </div>
    );
    }

interface GuitarProps{
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    minor?: boolean; // True if minor key, false if major key
    octave: number;
    index: number; // octave + index together give a location for the guitar note
}

function Guitar({ synth, setSynth }: InstrumentProps): JSX.Element {
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

    return (
        <div className="pv4">
          <div className="relative dib h4 w-100 ml4">
            {Range(0, 6).map(octave =>
              keys.map(key => {
                const isMinor = key.note.indexOf('b') !== -1;
                const note = `${key.note}${octave}`;
                return (
                  <GuitarNotes
                    key={note} //react key
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
    export const GuitarInstrument = new Instrument("Guitar_peter", Guitar);