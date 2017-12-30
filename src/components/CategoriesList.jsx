import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from '../modules/categories/actions/categories';

class CategoriesList extends Component {
    componentDidMount() {
        setTimeout(this.props.fetchCategories, 1500);
        setTimeout(this.props.fetchCategoriesComplete, 2000);
    }

    render() {
        return (
            <div>
                {this.props.fetch_status == "fetching" ? <div className="loading"><div></div></div> : <h3>Categories</h3>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fetch_status: state.default.categories.fetch_status,
        categories: state.default.categories.items
    }
}

export default connect(mapStateToProps, actionCreators)(CategoriesList)