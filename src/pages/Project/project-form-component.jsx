import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import ProjectFormField from './project-form-field-component';

const FIELDS = [
    { label: 'Project Name', name: 'name', noValueError: 'Provide a name for the project'},
    { label: 'Description', name: 'description', noValueError: 'Provide a description'}
];

//maximum number of characters
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength30 = maxLength(30);

class ProjectForm extends Component {
    renderFields() {
        return FIELDS.map(({ label, name }) => {
            return <Field
                key={name}
                component={ProjectFormField}
                validate={maxLength30}
                type="text"
                label={label}
                name={name} />
        });
    }

    render(){
        return (
            <div className="mw7 center ph3 ph5-ns tc br2 pv5 mb5">
                <form onSubmit={this.props.handleSubmit((formValues) => this.props.submitProject(formValues, this.props.history))}>
                {this.renderFields()}
                <Link to="/myapps/projects" className="btn f4 no-underline pv3 ph4 br-pill ba b--white-20">
                    Cancel
                </Link>
                <button className="f4 no-underline pv3 ph4 br-pill ba b--white-20" type="submit">Add</button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    FIELDS.forEach(({name, noValueError}) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

function mapStateToProps(state) {
    return { auth: state.auth || undefined};
}

ProjectForm = reduxForm({
    validate: validate,
    form: 'projectForm',
    destroyOnUnmount: true
})(ProjectForm);

export default connect(mapStateToProps, actions)(withRouter(ProjectForm));

