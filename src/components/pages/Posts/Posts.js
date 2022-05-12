import React from 'react';
import './Posts.css';


const Posts = (props) => {
	const { posts } = props;
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
  // return posts.map((post) => {
  return (
    <React.Fragment>
      <main>
        <h1>Blog Post List</h1>
        {posts.map((post) => {
          return (
            <div className="post-list post-list_grid"  key={post.id}>
              <div className="post-list__post post">
                <figure className="post__preview-img">
                  <a href="/"><img src="https://images.unsplash.com/photo-1422255198496-21531f12a6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80" alt="img description" /></a>
                </figure>
                <div className="post__header">
                  <time dateTime="2019-11-16" className="post__time">november 16, 2019</time>
                  <h2><a href="/">{post.title.substr(0, 50)}...</a></h2>
                </div>
                <div className="post__meta">
                  <a href="/">CategoryName</a>
                  <a href="/" className="post__comments">7</a>
                </div>
                <p>{post.excerpt.substr(0, 60)}...</p>
              </div>
            </div>
          );
          })}
      </main>
    </React.Fragment>
  );
  // })
}
export default Posts;
