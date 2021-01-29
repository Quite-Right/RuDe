import { useLocation } from "react-router-dom";
const data = [
    {
        type: "type 1",
        thread: "thread 1",
        source: "source 1"
    },
    {
        type: "type 2",
        thread: "thread 2",
        source: "source 2"
    },
    {
        type: "type 3",
        thread: "thread 3",
        source: "source 3"
    },
    {
        type: "type 4",
        thread: "thread 4",
        source: "source 4"
    }
]
const Report = () => {
    const location = useLocation();
    let Path = location.pathname.split('report/')[1];
    if (Path === "") {
        Path = undefined
    }

    return (
        <div className="report">
            <table className="report__table">
                <tr className="report__table__header">
                    <td className="report__table__header__first">Type</td>
                    <td className="report__table__header__second">Thread</td>
                    <td className="report__table__header__third">Source</td>
                </tr>
                {data.map(({ type, thread, source }) => {
                    return (
                        <tr className="report__table__body">
                            <td className="report__table__body__first">{type}</td>
                            <td className="report__table__body__second">{thread}</td>
                            <td className="report__table__body__third">{source}</td>
                        </tr>
                    )
                })}

            </table>

            <div className="report__result">
                <div className="report__result__button unselectable" id="good">No threat detected</div>
                <div className="report__result__button unselectable" id="bad">Threat detected</div>
                <div onClick={() => console.log(Path)}>Path</div>
            </div>
        </div>
    )
}

export default Report
