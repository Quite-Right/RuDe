import Tag from "../Tag/Tag";

interface props {

}

const color: any = {
    received: "blue",
    awaiting: "yellow",
    undergoing: "orange",
    analyzed: "green",
    rejected: "red",
    default: "default"
}

const Status = ({data}: any) => {
    if (typeof data === "string") {
        return <Tag type={color[data] ? color[data] : color.default}>{data}</Tag>
        
    }
    if (Array.isArray(data)) {
        return <>{data.map((item: string) => 
            (<Tag type={color[item] ? color[item] : color.default}>{item}</Tag>))}</>
        
    }
    return null
}

export default Status
