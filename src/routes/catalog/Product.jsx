import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../modules/products/actions';

const mapStateToProps = (state) => {
    return {
        fetch_status: state.default.products.fetch_status,
        product: state.default.products.currentProduct
    }
}

class Product extends Component {
    componentDidMount() {

        if(this.props.fetch_status!=='fetch_success'){
            this.props.fetchProductRequest(this.props.match.params.id);
            
            fetch('http://localhost:3003/api/product/'+this.props.match.params.id).then(response=>{
                return response.json();
            }).then(product=>{
                this.props.fetchProductSuccess(product);
            });
        }
    }
    render(){
        return(
            <div>
                { this.props.fetch_status === "fetch_success" ? this.props.product.Name : "fetching" }
            </div>
        );
    }
}

export default connect(mapStateToProps, actionCreators)(Product);