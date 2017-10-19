import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const wrapperStyle = { width: 200, margin: 50 };

const newDate = new Date();
const currentYear = newDate.getFullYear();

export const Sliderbar = props => (
  <div className="sliderbar-container">
    <div style={wrapperStyle}>
      <Range min={1895} max={2017} allowCross={false} onAfterChange= {props.currentValue} defaultValue={[1895, currentYear]} tipFormatter={value => `${value}`} />
    </div>
  </div>
)
