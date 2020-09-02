import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
const blogPosts = [
{title: 'Blog Posrt #1'},
{title: 'Blog Posrt #2'},
{title: 'Blog Posrt #3'},
{title: 'Blog Posrt #4'},
{title: 'Blog Posrt #5'},

];

return <BlogContext.Provider value={blogPosts}>
{children}
</BlogContext.Provider>;
};

export default BlogContext;