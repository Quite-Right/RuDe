import Status from "../Status/Status"

interface Props {
    
}

const data = ["received", "awaiting", "undergoing", "analyzed", "modified", "deferred", "rejected", "default"]

const Test = (props: Props) => {
    return (
        <div className="test">
            Test
            <Status data={data}/>
        </div>
    )
}

export default Test
