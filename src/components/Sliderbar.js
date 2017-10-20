import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'
import React, {Component} from 'react'
import Slider from 'rc-slider'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)
const wrapperStyle = { width: 200, margin: 20 }

const newDate = new Date()
const currentYear = newDate.getFullYear()

export class Sliderbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      values: this.props.date
    }
    this.setValue = this.setValue.bind(this)
  }

  setValue (value) {
    this.setState({
      values: value
    })
  }
  componentWillReceiveProps (nextProps) {
    console.log('next props', nextProps)
    this.setState({
      values: nextProps.date
    })
  }
  render () {
    return (
      <div className='sliderbar-container'>
        <div style={wrapperStyle}>
          <Range min={1895} max={2017} allowCross={false} onAfterChange={this.props.currentValue} onChange={this.setValue} defaultValue={[1895, currentYear]} value={this.state.values} tipFormatter={value => `${value}`} />
        </div>
      </div>
    )
  }
}
