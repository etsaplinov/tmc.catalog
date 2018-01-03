import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from '../modules/categories/actions/categories';

class CategoriesList extends Component {
    componentDidMount() {

        if(this.props.fetch_status!='fetch_completed'){
            this.props.fetchCategories();
            fetch('http://localhost:3003/api/categories').then(response=>{
                return response.json();
            }).then(categories=>{
            // console.log(categories);
                this.props.fetchCategoriesComplete(categories);
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.fetch_status === "fetching" ? <div className="loading"><div></div></div> :
                <div> 
                    <h3>Categories</h3>
                    <ul>
                        {this.props.categories.map( (category, index)=>{
                            return <li key={index}>{category.Name}</li>
                        })}
                    </ul>
                </div>}
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