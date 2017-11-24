import React from 'react';
import _ from 'lodash';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    const { posts } = this.props;
    return (
      <div className="photo-grid">
        {_.map(posts, (post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
});

export default PhotoGrid;
