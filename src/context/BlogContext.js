import React, { Children } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ Children }) => {
return <BlogContext.Provider value={5}>
        {Children}
    </BlogContext.Provider>;
};

export default BlogContext;