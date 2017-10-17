import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 200, margin: 50 };
const newDate = new Date();
const currentYear = newDate.getFullYear();

export const Sliderbar = () => (
  <div>
    <div style={wrapperStyle}>
      <Range min={1895} max={2017} defaultValue={[1895, currentYear]} tipFormatter={value => `${value}`} />
    </div>
  </div>
)






