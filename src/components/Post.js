// import parse from 'html-react-parser'

const Post = ({post,visible, onClick}) => {

    const getLink = () => {
        const usersPage = post.description.split("\"")[1]
        return usersPage
    }

    return (
    < div className="container">
            <img onClick={onClick} src={post.media.m} alt={post.title} style={{padding: '10px', maxWidth: '200px'}} />
            <p><a href={post.link}>{post.title}</a> by <a href={getLink()}>{post.author}</a></p>
            {/* <p>{parse(post.description)}</p> */}
            {post.tags && <p><b>Tags: </b>{post.tags}</p>}
    </div>
    )
}

export default Post
