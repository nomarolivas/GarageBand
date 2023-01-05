// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import { useState } from 'react';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';


/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface XylophoneKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth;
  minor?: boolean;
  octave: number;
  index: number;
}

export function XylophoneKey({
  note,
  synth,
  minor,
  index,
}: XylophoneKeyProps): JSX.Element {

  const [sample] = useState(
    new Tone.Sampler({
      urls:{
        B4: "xylophone_sample_note.wav",
      },
    }).toDestination()
  );
  const xylophone_sample = (note: string) => {
    sample.triggerAttackRelease([`${note}`], 3);
  };

  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.

    <div
      onMouseDown={() => xylophone_sample(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('pointer absolute dim', {
        // 'bg-black black h3': minor, // minor keys are black
        'bg-blue white h3': minor, // minor keys are black
        ' bg-red h4': !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 30,
        left: `${index * 4}rem`,
        zIndex: minor ? '2rem' : '2rem',
        width: minor ? '2rem' : '2rem',
        height: minor ? '15rem' : '15rem',
        marginLeft: minor ? '0rem' : 0,
        color: minor ? 'red' : 'yellow',
      }}
    ></div>
  );
}

// eslint-disable-next-line
function XylophoneKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: XylophoneKeyProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames('ba pointer absolute dim', {
        'bg-black black h3': minor,
        'black bg-white h4': !minor,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      },
    },
    [],
  );
}


function Xylophone({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'Db', idx: 0.5 },
    { note: 'D', idx: 1 },
    { note: 'Eb', idx: 1.5 },
    { note: 'E', idx: 2 },
    { note: 'Fb', idx: 2.5 },
    { note: 'F', idx: 3 },
    { note: 'Gb', idx: 3.5 },
    { note: 'G', idx: 4 },
    { note: 'Ab', idx: 4.5 },
    { note: 'A', idx: 5 },
    { note: 'Bb', idx: 5.5 },
    { note: 'B', idx: 6 },
    { note: 'Cb', idx: 6.5 },
  ]);


  return (
    <div className="pv4">
      <div className="relative dib h4 w-100 ml4">
        {Range(2, 5).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave}`;
            return (
              <XylophoneKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave - 7}
                index={(octave - 2) * 7 + key.idx}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}

export const XylophoneInstrument = new Instrument('Xylophone-Scott', Xylophone);
  