import React, { Component } from 'react';
import cn from 'classnames';

class Collapse extends Component {
  static defaultProps = {
    opened: false,
  };

  constructor(props) {
    super(props);
    const { opened } = props;
    this.state = { opened };
  }

  handleToggle = (e) => {
    e.preventDefault();
    const { opened } = this.state;
    this.setState({ opened: !opened });
  }

  render() {
    const { opened } = this.state;
    const { text } = this.props;
    const classes = cn({
      collapse: true,
      show: opened,
    });

    return (
      <div>
        <p>
          <a className="btn btn-primary" onClick={this.handleToggle} href="#">
            Link with href
          </a>
        </p>
        <div className={classes}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;
