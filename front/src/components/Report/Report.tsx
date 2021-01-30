import { useState } from "react"
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { Copy } from "@styled-icons/boxicons-regular";
import CopyToClipboard from 'react-copy-to-clipboard';


import Tag from "../Tag/Tag";
import TableRow from "../TableRow/TableRow";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Status, { StatusData } from "../Status/Status";
import RadioInput from "../RadioInput/RadioInput";


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
  const alert = useAlert();
  const formik = useFormik({
    initialValues: {
      comment: "",
      checkStatus: "Need Check"
    },
    onSubmit: (values: any) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const [similarReports, setSimilarReports] = useState<Array<string>>(["95ccc286-62f5-11eb-ae93-0242ac130002", "c616dfe4-62f5-11eb-ae93-0242ac130002"]);

  return (
    <div className="report">
      <div className="report__id">Отчет #{id}   <CopyToClipboard text={window.location.href}
        onCopy={() => alert.show("Ссылка на отчет успешно скопирована")}>
        <Copy className="report__id-copy-btn" size="35" />
      </CopyToClipboard></div>
      <div className="reports__similar-label">Похожие отчеты</div>
      <div className="reports__similar">
        <Status data={similarReports.map(similarReport => {return {
          label: similarReport,
        }})} />
      </div>
      <table className="table">
        <tbody>
          <TableRow rowKey={"Name"} tooltip={"https://nvd.nist.gov/vuln"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"CVE"} tooltip={"https://nvd.nist.gov/vuln"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"CWE"} tooltip={"https://cwe.mitre.org"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"SOFTWARE"} tooltip={"https://nvd.nist.gov/products/cpe"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"MALWARE"} tooltip={"https://malpedia.caad.fkie.fraunhofer.de/families"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"THREAT_ACTOR"} tooltip={"https://malpedia.caad.fkie.fraunhofer.de/actors"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"INDUSTRY"} tooltip={"https://docs.oasis-open.org/cti/stix/v2.1/cs01/stix-v2.1-cs01.html#_oogrswk3onck"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"MITRE_ATTACK"} tooltip={"https://attack.mitre.org"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"COUNTRY"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"CITY"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"TIMESTAMP"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"IOC"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"DOCUMENT"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"RATING"}>
            <div>123</div>
          </TableRow>
        </tbody>

      </table>
      <TextField className="comment-field" label="Оставить комментарий" value={formik.values.comment} onChange={formik.handleChange("comment")} />
      <label className="report__result-label">Результат анализа отчета</label>
      <div className="report__result">
        <RadioInput inputId="no-threat"
          name="threatStatus"
          value="resolved"
          label="Угроз не обнаружено"
          checked={"resolved" === formik.values.checkStatus}
          onChange={formik.handleChange("checkStatus")} />
        <RadioInput inputId="threat"
          name="threatStatus"
          value="rejected"
          label="Обнаружена угроза"
          checked={"rejected" === formik.values.checkStatus}
          onChange={formik.handleChange("checkStatus")} />
        <RadioInput inputId="need-check"
          name="threatStatus"
          value="pending"
          label="Нужна проверка"
          checked={"pending" === formik.values.checkStatus}
          onChange={formik.handleChange("checkStatus")} />
      </div>
      <Button className="report-submit-btn" type="submit" onClick={() => formik.handleSubmit()}>Отправить отчет</Button>
    </div>
  )
}

export default Report
