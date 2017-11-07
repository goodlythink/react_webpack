export function loadPosts() {
    return {
        type: 'LOAD_POSTS',
        payload: fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(d => d.json())
    }
}