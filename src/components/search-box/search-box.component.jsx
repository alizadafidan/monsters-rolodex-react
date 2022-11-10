import { Component, Fragment } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    return (
      <Fragment>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </Fragment>
    );
  }
}

export default SearchBox;
