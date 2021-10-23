import React from 'react';
import { connect } from 'react-redux';

import FormItem from "../components/FormItem/form-item.component";
import { ItemCompletion} from "../actions";

const FormItemContainer = props => <FormItem {...props} />

const mapDispatchToProps = {
    handleItemCompletion: ItemCompletion,
};

export default connect(
    null,
    mapDispatchToProps,
)(FormItemContainer);