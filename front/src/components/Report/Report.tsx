import { useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../Tag/Tag";
import TableRow from "../TableRow/TableRow";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Status from "../Status/Status";
import { useFormik } from 'formik';

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
  const formik = useFormik({
    initialValues: {
      comment: ""
    },
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // const [comment, setComment] = useState<string>("")
  return (
    <div className="report">
      <div className="report__id">Отчет #{id}</div>
      <div className="report__id">Похожие отчеты</div>
      <table className="table">
        <tbody>
          <TableRow rowKey={"CVE"} tooltip={"https://nvd.nist.gov/vuln"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"CVE"} tooltip={"https://nvd.nist.gov/vuln"}>
            <div>123</div>
          </TableRow>
        </tbody>

      </table>
      <TextField className="comment-field" label="Оставить комментарий" value={formik.values.comment} onChange={formik.handleChange("comment")} />
      <div className="report__result">
        <Button>No threat detected</Button>
        <Button>More Work</Button>
        <Button>Threat detected</Button>
      </div>
      <Button className="report-submit-btn" type="submit" onClick={() => formik.handleSubmit()}>Отправить отчет</Button>
    </div>
  )
}

export default Report
