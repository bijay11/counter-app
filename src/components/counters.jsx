import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            // onReset={this.props.onReset}
            onIncrement={this.props.onIncrement}
            // id={counter.id}
            // value={counter.value}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
