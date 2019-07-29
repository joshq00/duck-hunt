import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  App(div)
  // expect( div.innerHTML ).toBe( 'It works!' )
});
