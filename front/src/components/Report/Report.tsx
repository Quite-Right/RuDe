import { useParams } from "react-router-dom";
import Tag from "../Tag/Tag";
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

interface IParams{
  id: string;
}

const Report = () => {
    const {id} = useParams<IParams>();
    const link:string = "ahref";
    const link2:string = "ahref222222222222222222222222222222222222222222222222222222222222222222";
    return (
        <div className="report">
            <div  className="report__id">Отчет #{id}</div>
            <div  className="report__id">Похожие отчеты</div>


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
                {/* <Tag  type="green">{link}</Tag>
                <Tag>{link2}</Tag>
                <Tag  type="green" link={link}>{link}</Tag> */}
                {/* <div onClick={() => console.log(Path)}>Path</div> */}
            </div>
        </div>
    )
}

export default Report
