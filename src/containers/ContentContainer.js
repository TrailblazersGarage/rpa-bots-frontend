import React from "react";
import { connect } from "react-redux";

import Content from "../components/Tasks/content.component";
import {ReorderItem} from "../actions";

const ContentContainer = props => <Content {...props} />;

const mapStateToProps = state => ({
    items: state.tasks.items,
    editingItem: state.tasks.editingItem,
});

const mapDispatchToProps = {
  handleReorderItem: ReorderItem,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContentContainer);