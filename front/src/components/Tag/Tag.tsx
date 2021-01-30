import { Link } from "react-router-dom";

type tagType = "blue" | "green" | "white" | "orange";
// received: "#004dff",
// awaiting: "#fece02",
// undergoing: "#f38207",
// analyzed: "#077f32",
// modified: "white",
// deferred: "#c9d1d9",
// rejected: "#dc0000",
// default: "#79c0ff"
interface Props {
    type?: tagType,
    link?: string,
    onClick?: any,
    children: React.ReactNode
}

const Tag = ({ type = "orange", link, onClick, children }: Props) => {
    return (
        <Link className={`tag tag_${type}`} onClick={() => onClick} to={link ? link : "#"}>{children}</Link>
    )
}

export default Tag
