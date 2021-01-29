import Tag from "../Tag/Tag";

interface props {

}

const color: any = {
    received: "#004dff",
    awaiting: "#fece02",
    undergoing: "#f38207",
    analyzed: "#077f32",
    modified: "white",
    deferred: "#c9d1d9",
    rejected: "#dc0000",
    default: "#79c0ff"
}

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
