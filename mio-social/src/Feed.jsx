import Navbar from "./Navbar"
import PostCard from "./PostCard"

function Feed() {
    const utente = JSON.parse(localStorage.getItem('utente'))
    const posts = [
        { id: 1, utente: "Fabio", testo: "sei un coglione studia !", like: 1900 },
        { id: 2, utente: "Ivan", testo: "Dafne è la mia vita", like: 874 },
        { id: 3, utente: "Bernard", testo: "VIVA COPIARE", like: 0 },
    ]

    return (
        <div className="feed-container">
            <Navbar utente={utente} />
            
            <div className="feed-posts">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        utente={post.utente}
                        testo={post.testo}
                        like={post.like}
                    />
                ))}

            </div>
            <h1>Feed</h1>
        </div>
    )
}

export default Feed 