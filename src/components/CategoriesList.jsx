import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from '../modules/categories/actions/categories';

class CategoriesList extends Component {
    componentDidMount() {
        setTimeout(this.props.fetchCategories, 1500);
    }

    render() {
        return (
            <div>
                {this.props.fetch_status === "fetching" ? <h3>Loading</h3> : <h3>Categories</h3>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.default.categories.status,
        categories: state.default.categories.items
    }
}

export default connect(mapStateToProps, actionCreators)(CategoriesList)