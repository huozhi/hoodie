import {h, render, Component} from '../src'

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>'
})

test('jsx class instance element', () => {
  class View extends Component {
    render() {
      const {text} = this.props
      return (
        <div>
          <button className="btn" onclick={() => alert('hello cls')}>
            {text}
          </button>
        </div>
      )
    }
  }
  const label = 'this is class'
  const element = <View text={label} />
  const root = document.querySelector('#root')
  render(element, root)

  const btn = document.querySelector('button')
  expect(btn.className).toBe('btn')
  expect(btn.textContent).toBe(label)
})

