import { useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../Tag/Tag";
import TableRow from "../TableRow/TableRow";
import TextField from "../TextField/TextField";
import Status from "../Status/Status";

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

interface IParams {
  id: string;
}

const Report = () => {
  const { id } = useParams<IParams>();
  const [comment, setComment] = useState<string>("")
  const link: string = "ahref";
  const link2: string = "ahref222222222222222222222222222222222222222222222222222222222222222222";
  return (
    <div className="report">
      <div className="report__id">Отчет #{id}</div>
      <div className="report__id">Похожие отчеты</div>
      <table className="table">
        <TableRow rowKey={"CVE"} tooltip={"https://nvd.nist.gov/vuln"}>
          <div>123</div>
        </TableRow>
        <TableRow rowKey={"CVE"} tooltip={"https://nvd.nist.gov/vuln"}>
          <div>123</div>
        </TableRow>
      </table>
      <TextField className="comment-field" label="Оставить комментарий" value={comment} onChange={(e) => { setComment(e.target.value) }} />
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
