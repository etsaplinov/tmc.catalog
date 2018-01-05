import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from '../modules/categories/actions/categories';
import CategoriesTree from './categories/CategoriesTree';

class CategoriesList extends Component {
    componentDidMount() {

        if(this.props.fetch_status!=='fetch_completed'){
            this.props.fetchCategoriesRequest();
            fetch('http://localhost:3003/api/categories').then(response=>{
                return response.json();
            }).then(categories=>{
                this.props.fetchCategoriesSuccess(categories);
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.fetch_status === "fetching" ? <div className="loading"><div></div></div> :
                <div> 
                    <h3>Categories</h3>
                    <CategoriesTree categories={this.props.categories}/>
                </div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fetch_status: state.default.categories.fetch_status,
        categories: state.default.categories.recursiveItems
    }
}

export default connect(mapStateToProps, actionCreators)(CategoriesList)