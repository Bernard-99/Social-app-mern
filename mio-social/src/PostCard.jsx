function PostCard({ utente, testo, like }) {
    return (
        <div className="post-card">
            
            <div className="post-header">
                <span className="post-utente">{utente}</span>
            </div>
            
            <div className="post-body">
                <p>{testo}</p>
            </div>
            
            
            <div className="post-footer">
            
            <button>{like}</button>
            <button>Commenta</button>
            <button>Condividi</button>
            
            </div>

        
        </div>
    )
}

export default PostCard