import Post from './Post'

const Posts = ({posts}) => {

        let visible = true
    // const changeVisible = () => {
    //     console.log(visible)
    //     visible = !visible
    // }
    return (
        <>
           {posts.map((post) => (
            <Post key={post.link} post={post} visible={visible} />
    ))} 
        </>
    )
}

export default Posts
