import React from "react";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSearch = string => {
        const { key, all } = this.props.meta;
        let data = all.filter(item => {
            let isValideSearch = Object.values(item).filter(value => value !== undefined && value !== null).some(value => {
                if ((value ? value + "" : "").indexOf(string) > -1) return true;
                return false;
            })
            return isValideSearch;
        })
        this.props.setState({
            [key]: data,
        })
    }

    onKeyUp = e => {
        if (e.keyCode == 13) {
            this.handleSearch(e.target.value);
        }
    }

    render() {
        return (
            <div className="SearchInput">
                <input className="form-control" type="text" onKeyUp={this.onKeyUp} />
            </div>
        )
    }
}

export default SearchInput;