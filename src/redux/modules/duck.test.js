import duck, {
  defaultState,
  constants,
  actions,
} from './duck';

describe( '(Redux) duck', () => {
  const initial = duck( undefined, {} )

  it( 'starts ALIVE', () => {
    expect( initial.state ).toBe( constants.ALIVE )
  } )

  it( 'transitions to SHOT when hit', () => {
    const result = duck( initial, actions.shoot() )
    expect( result.state )
      .toEqual( constants.SHOT )
  } )
} )
