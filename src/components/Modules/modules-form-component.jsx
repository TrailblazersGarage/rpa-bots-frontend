import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {Link} from "react-router-dom";
import ModuleFormField from "./module-form-field-component";
import ModuleFormSelect from "./module-form-select-component";
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import "./modules-form.style.css";

const FIELDS = [
    { label: 'Module Name', name: 'name', noValueError: 'Provide a name for the module'}
];

const SELECT_OPTIONS = [
    { key: 1, text: 'ANALYSIS', value: 'ANALYSIS' },
    { key: 2, text: 'DEVELOPING', value: 'DEVELOPING' },
    { key: 3, text: 'QA', value: 'QA' },
    { key: 4, text: 'DEPLOYING', value: 'DEPLOYING' },
    { key: 5, text: 'COMPLETED', value: 'COMPLETED' }
];

const SELECT_NOT_ADMIN_OPTIONS = [
    { key: 1, text: 'ANALYSIS', value: 'ANALYSIS' }
];

//maximum number of characters
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength30 = maxLength(30);

class ModuleForm extends Component {

    renderFields() {
        return FIELDS.map(({ label, name}) => {
            return <Field
                key={name}
                component={ModuleFormField}
                validate={maxLength30}
                type="text"
                label={label}
                name={name}/>
        });
    }

    render(){
        const isAdmin = this.props.auth !== undefined ? this.props.auth.isAdmin : false;
        const queryProjectIdFromUrl = new URLSearchParams(window.location.search);
        const project = queryProjectIdFromUrl.get("project");

        return (
            <div className="mw7 center ph3 ph5-ns tc br2 pv5 mb5">
                <form onSubmit={this.props.handleSubmit((formValues) => this.props.submitModule(formValues, project, this.props.history))}>
                {this.renderFields()}
                <div>
                    { isAdmin ?
                    <Field key="status" component={ModuleFormSelect} type="select" label="Status" name="status">
                        { SELECT_OPTIONS.map(option => <option key={option.key} value={option.value}>{option.text}</option>)}
                    </Field> :
                    <Field key="status" component={ModuleFormSelect} type="select" label="Status" name="status">
                        { SELECT_NOT_ADMIN_OPTIONS.map(option => <option key={option.key} value={option.value}>{option.text}</option>)}
                    </Field>
                    }
                </div>
                <Link to="/myapps/modules" className="btn f4 no-underline pv3 ph4 br-pill ba b--white-20">
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
    return {
        auth: state.auth || undefined,
    };
}

ModuleForm = reduxForm({
    validate: validate,
    form: 'moduleForm',
    destroyOnUnmount: true
})(ModuleForm);

export default connect(mapStateToProps, actions)(withRouter(ModuleForm));