import React from 'react';
import Input from 'react-input-mask';

module.exports = {
  getSingleElement: function(value, index) {
    index = index || 0;
    var mask = this.props.component.inputMask || '';
    return (
      <Input
        type={this.props.component.inputType}
        key={index}
        className='form-control'
        id={this.props.component.key}
        data-index={index}
        name={this.props.name}
        value={value}
        disabled={this.props.readOnly}
        placeholder={this.props.component.placeholder}
        mask={mask}
        onChange={this.onChange}
        ref={ input => this.element = input }
        >
      </Input>
    );
  }
};
