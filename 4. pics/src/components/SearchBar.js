import React from "react";

// If you need to use state, or lifecycle methods, always go for a class rather than function
class SearchBar extends React.Component {
    state = {
        term: "",
    };

    componentDidUpdate() {}

    onFormSubmit = (event) => {
        /* This prevents the browser from trying to reload upon submitting the form */
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment" style={{ marginTop: "10px" }}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            placeholder={"Search here..."}
                            onChange={(e) =>
                                this.setState({
                                    term: e.target.value,
                                })
                            }
                        />
                        {/* onChange={(e) => console.log(e.target.value)} /> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
