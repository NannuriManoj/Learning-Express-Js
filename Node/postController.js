const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'}
];

// export const getPost = () => posts; // one way of exporting using ES modules

const getPost = () => posts;

export { getPost };   // another way of exporting using ES modules

let getPostLength = () => posts.length;

export default getPostLength;  // We can set something to Default export.
