import React from 'react';
import { connect } from 'react-redux';

import Form from "../components/Form/form.component";

import { AddItem } from "../actions";

const FormContainer = props => <Form {...props} />;

const mapDispatchToProps = {
    handleAddItem: AddItem
}

export default connect(
null,
 mapDispatchToProps,
)(FormContainer);