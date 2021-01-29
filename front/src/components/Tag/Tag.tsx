import { Link } from "react-router-dom";

//type tagType = "orange" | "green" | "white";

interface Props {
    type?: string,
    link?: string,
    onClick?: any,
    children: React.ReactNode
}

const Tag = ({ type = "orange", link, onClick, children }: Props) => {
    return (
        <Link className="tag" style={{ background: type }} onClick={() => onClick} to={link ? link : "#"}>{children}</Link>
    )
}

export default Tag
