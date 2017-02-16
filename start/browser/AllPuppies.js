import React from 'react';
import { Link } from 'react-router'

export default class AllPuppies extends React.Component {

  render () {

    return (
      <div>
        <ul className="list-unstyled">
          {this.props.allPuppies && this.props.allPuppies.map(puppy => (
            <li key={puppy.id}><Link key={puppy.id} to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>
          ))}
        </ul>
      </div>
    )
  }
}
