// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
import { FluteInstrument } from './instruments/Flute_carmelodz';
import { Radial_Visualizer_carmelodz} from "./visualizers/Radial_Visualizer_carmelodz";
import { GuitarInstrument } from './instruments/Guitar_peter';
import { twoD_Visualizer_nomarolivas } from "./visualizers/twoD_Visualizer_nomarolivas";
import { SaxophoneInstrument } from './instruments/saxophone_nomarolivas'
import { XylophoneInstrument } from './instruments/Xylophone_Saiber70';
import { Visualizer_Saiber70 } from './visualizers/2D_Visualizer_Saiber70';
import { peter_visualizer } from './visualizers/peter_visualizer';


/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument, FluteInstrument, GuitarInstrument, SaxophoneInstrument, XylophoneInstrument]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, Radial_Visualizer_carmelodz, twoD_Visualizer_nomarolivas, Visualizer_Saiber70, peter_visualizer]);    // similar to Visualizer[]


/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});