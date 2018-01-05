import React, { Component }  from "react";

class CategoriesTree extends Component {
    render(){
        return (
            <ul>
                {this.props.categories.map( (category, index)=>{
                    return (
                        <li key={index}>
                            {category.Name}
                            { category.Items && category.Items.length > 0 ? <CategoriesTree categories={category.Items}/>  : null  } 
                        </li>)
                })}
            </ul>
        );
    }
}

export default CategoriesTree;