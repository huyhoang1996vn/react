import React from "react";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = e => {
        console.log(e.target.value);
        this.props.setState({
            [this.props.meta.key]: [],
        })
    }

    render() {
        return (
            <div className="SearchInput">
                <input className="form-control" type="text" onChange={this.onChange}/>
            </div>
        )
    }
}

export default SearchInput;