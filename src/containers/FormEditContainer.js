import React from 'react';
import { connect } from 'react-redux';

import FormEdit from "../components/FormEdit/form-edit.component";

import {CancelEditItem} from "../actions";
import {EditItem} from "../actions";

const FormEditContainer = props => <FormEdit {...props} />;

const mapDispatchToProps = {
    handleCancelEditItem: CancelEditItem,
    handleEditItem: EditItem,
};

export default connect(
    null,
    mapDispatchToProps,
)(FormEditContainer);