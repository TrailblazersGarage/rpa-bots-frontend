import React from 'react';
import PropertyBar from "../components/PropertyBar/property-bar.component";

import { DeleteItem} from "../actions";
import { SelectEditItem} from "../actions";

import {connect} from 'react-redux';

const PropertyBarContainer = props => <PropertyBar{...props} />;

const mapDispatchToProps = {
  handleDeleteItem: DeleteItem,
  handleSelectEditItem: SelectEditItem,
};

export default connect(
   null,
   mapDispatchToProps,
)(PropertyBarContainer);