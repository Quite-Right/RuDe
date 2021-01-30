import Tag from "../Tag/Tag";

interface props {

}

const color: any = {
    received: "blue",
    awaiting: "yellow",
    undergoing: "orange",
    analyzed: "green",
    modified: "white",
    deferred: "gray",
    rejected: "red",
    default: "lightblue"
}

// color.key = className

// {cve: received, 123:asdasd}
// const data:Array<string> =["asdasdasda", "asdadasdds"]
// const newData:string = "asdasdasd"
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
