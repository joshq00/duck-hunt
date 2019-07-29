import level, {
  defaultState,
  constants,
  actions,
} from './level'

describe( '(Redux) level', () => {
  const initial = level( undefined, {} )
  it( 'sets up initial state', () => {
    expect( initial ).toEqual( defaultState )
    expect( initial.ducks.length ).toEqual( 2 )
  } )

  it( 'shoots the proper duck', () => {
    const result = level( initial, actions.shoot( initial.ducks[ 0 ].id ) )
    // expect( result.ducks[ 0 ].state ).toEqual( SHOT )
  } )

  describe( 'when time runs out', () => {
    it( 'transitions to LOSS if there are live ducks' )
    it( 'does nothing if the ducks are shot' )
  } )
} )
