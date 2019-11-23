import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles(theme => ({
  root: {
    color: 'rgb(249, 91, 91)',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    border: '1px solid rgb(249, 91, 91)',
    '&:hover': {
      backgroundColor: 'rgba(227, 161, 161, 0.1)',
    },
  },
}))(Button);


class CustomButton extends Component {

  render() {

    return (
      <div>
        <ColorButton variant="contained" color="primary" >
          {this.props.input}
        </ColorButton>

      </div>
    );
  }
}

export default CustomButton

CustomButton.propTypes = {
  input: PropTypes.string
};
