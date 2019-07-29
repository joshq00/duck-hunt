import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme'
import App from './App';

const mApp = props => mount( <App { ...props } /> )

it( 'renders without crashing', () => {
  shallow( <App /> );
} )

it( 'draws the scene', () => {
  const el$ = mApp( {
    ducks: [ { id: 1 }, { id: 2 } ],
  } )
  expect( el$.find( '.grass' ).length ).toBe( 1 )
  expect( el$.find( '.duck' ).length ).toBe( 2 )
  expect( el$.find( '.tree' ).length ).toBe( 1 )
} )

