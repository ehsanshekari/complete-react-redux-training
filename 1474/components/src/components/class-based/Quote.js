import { Component } from 'react';


class Quote extends Component {
  render() {
    return (
      <div className="card mt-3">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{this.props.text}</p>
            <footer className="blockquote-footer">
              {this.props.person} in{' '}
              <cite title="Source Title">{this.props.movie}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Quote;
