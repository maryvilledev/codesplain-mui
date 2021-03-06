import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

class TokenSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.makeListItems = this.makeListItems.bind(this);
  }

  makeListItems() {
    return this.props.tokenTypes.map((tokenType, index) => {
      return (
        <ListItem
          key={`${tokenType.text}-index`}
          leftCheckbox={<Checkbox />}
          primaryText={tokenType.text}
        />
      );
    });
  }

  render() {
    return (
      <List>
        <Subheader>Token types to highlight</Subheader>
        { this.makeListItems() }
      </List>
    );
  }
}

TokenSelector.propTypes = {
  tokenTypes: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
  })).isRequired,
};

export default TokenSelector;
