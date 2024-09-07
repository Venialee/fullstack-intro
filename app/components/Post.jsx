import ButtonDelete from "./ButtonDelete"

export default function Post({ id, title, content, authorName }) {
    return (
        <div style={{ border: "0.05rem solid white", padding: "1rem" }}>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <ButtonDelete postId={id} />
        </div>
    )
}