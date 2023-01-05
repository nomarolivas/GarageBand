// 3rd party library imports
import classNames from 'classnames';
import { List } from 'immutable';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  RadioButton20,
  RadioButtonChecked20,
  Music20,
  User16,
  Book16
} from '@carbon/icons-react';

// project imports
import { DispatchAction } from './Reducer';
import { AppState } from './State';
import { Instrument } from './Instruments';
import { Visualizer } from './Visualizers';


/** ------------------------------------------------------------------------ **
 * SideNav component
 ** ------------------------------------------------------------------------ */

type SideNavProps = {
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
};

export function SideNav({ state, dispatch }: SideNavProps): JSX.Element {
  /**
   * 
   * SideNav
   * |-----------------|
   * | Nameless App    |
   * | |-----------|   |
   * | |           |   |
   * | |-----------|   |
   * |                 |
   * | InstrumentsNav  |
   * | |-----------|   |
   * | |           |   |
   * | |-----------|   | 
   * |                 |
   * | VisualizersNav  |
   * | |-----------|   |
   * | |           |   |
   * | |-----------|   |
   * |                 |
   * | SongsNav        |
   * | |-----------|   |
   * | |           |   |
   * | |-----------|   |
   * |                 |
   * |-----------------|
  */

  return (
    <div className="absolute top-0 left-0 bottom-0 w5 z-1 shadow-1 bg-white flex flex-column">
      <div className="h3 fw7 f5 flex items-center pl3 bb b--light-gray">
        Code 4$W@G APP
      </div>
      <div className="flex-auto">
        <InstrumentsNav state={state} dispatch={dispatch} />
        <VisualizersNav state={state} dispatch={dispatch} />
        <SongsNav state={state} dispatch={dispatch} />
        <AlbumNav state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}


/** ------------------------------------------------------------------------ **
 * SideNav Sub-Components
 ** ------------------------------------------------------------------------ */

function InstrumentsNav({ state }: SideNavProps): JSX.Element {
  /** 
   *  InstrumentsNav
   *  |-----------------|
   *  | Section         |
   *  | |-------------| |
   *  | | RadioButton | |
   *  | |-------------| | 
   *  | | RadioButton | |
   *  | |-------------| |
   *  |      ...        |
   *  |-----------------|
  */

  const instruments: List<Instrument> = state.get('instruments');
  const activeInstrument = state.get('instrument')?.name;
  const location = useLocation();

  return (
    <Section title="Instruments">
      <div className="topnav">
        <input type="text" placeholder="Search for instrument..." name="search">

        </input>
        <script src="./server/sql/schemas.sql"></script>

      </div>
      {instruments.map(i => (
        <RadioButton
          key={i.name}
          to={`/${i.name}${location.search}`}
          text={i.name}
          active={i.name === activeInstrument}
          onClick={() => console.log(i.name)}
        />
      ))}
    </Section>
  );
}

function VisualizersNav({ state }: SideNavProps): JSX.Element {
  /** 
   *  VisualizersNav
   *  |-----------------|
   *  | Section         |
   *  | |-------------| |
   *  | | RadioButton | |
   *  | |-------------| | 
   *  | | RadioButton | |
   *  | |-------------| |
   *  |      ...        |
   *  |-----------------|
  */

  const visualizers: List<Visualizer> = state.get('visualizers');
  const activeVisualizer = state.get('visualizer')?.name;
  const location = useLocation();

  return (
    <Section title="Visualizers">
      <div className="topnav">
        <input type="text" placeholder="Search for visualizer..." name="search">
        </input>
      </div>
      {visualizers.map(v => (
        <RadioButton
          key={v.name}
          to={{
            pathname: location.pathname,
            search: `?visualizer=${v.name}`,
          }}
          text={v.name}
          active={v.name === activeVisualizer}
          onClick={() => console.log(v.name)}
        />
      ))}
    </Section>
  );
}

function SongsNav({ state, dispatch }: SideNavProps): JSX.Element {
  /** 
   * 
   *  SongsNav
   *  |-----------------|
   *  | Section         |
   *  | |-------------| |
   *  | | Music20     | |
   *  | |-------------| | 
   *  | | Music20     | |
   *  | |-------------| |
   *  |      ...        |
   *  |-----------------|
  */

  const songs: List<any> = state.get('songs', List());
  return (
    <Section title="Playlist">
      <div className="topnav">
        <input type="text" placeholder="Search for playlist..." name="search">
        </input>
      </div>
      {songs.map(song => (
        <div
          key={song.get('id')}
          className="f6 pointer flex justify-around items-center no-underline i dim pa3 outline"
          onClick={() =>
            dispatch(new DispatchAction('PLAY_SONG', { id: song.get('id') }))
          }
        >
          <div className='flex-column justify-around outline'>

            <div className='ba pa2'>
              <Music20 className="mr1" />
              {song.get('songTitle')}
            </div>

            <div className='ba pa2'>
              <User16 />
              {song.get('artist')}
            </div>

            <div className='ba pa2'>
              <Book16 />
              {song.get('album')}
            </div>

          </div>
        </div>
      ))}
    </Section>
  );
}
function AlbumNav({ state, dispatch }: SideNavProps): JSX.Element {

  const songs: List<any> = state.get('songs', List());
  return (
    <Section title="Album">
      <div className="topnav">
        <input type="text" id="input" name="i" placeholder="Search for album...">
        </input>
        <script src="/server/src/sql/schema.sql"></script>
      </div>
      {songs.map(song => (
        <div
          key={song.get('id')}
          className="f6 pointer flex justify-around items-center no-underline i dim pa3 outline"
          onClick={() =>
            dispatch(new DispatchAction('PLAY_SONG', { id: song.get('id') }))
          }
        >
          <div className='flex-column justify-around outline'>


            <div className='ba pa2'>
              <Book16 />
              {song.get('album')}
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}


/** ------------------------------------------------------------------------ **
 * Auxilliary components
 ** ------------------------------------------------------------------------ */

/** ------------------------------------- **
 * Radio Button
 ** ------------------------------------- */

type RadioButtonProps = {
  to: any,
  text: string,
  active: boolean,
  onClick: () => void
};

function RadioButton({ to, text, active, onClick }: RadioButtonProps): JSX.Element {
  return (
    <Link to={to} className="no-underline">
      <div
        className={classNames('f6 flex items-center black', { fw7: active })}
        onClick={onClick}
      >
        {active ? (
          <RadioButtonChecked20 className="mr1" />
        ) : (
          <RadioButton20 className="mr1" />
        )}
        <div className="dim">{text}</div>
      </div>
    </Link>
  );
}


/** ------------------------------------- **
 * Section
 ** ------------------------------------- */

const Section: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className="flex flex-column h-25 bb b--light-gray pa3">
      <div className="fw7 mb2">{title} </div>
      <div className="flex-auto overflow-scroll">{children}</div>
    </div>
  );
};
