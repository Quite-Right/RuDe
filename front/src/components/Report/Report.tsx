import { useParams } from "react-router-dom";
import { useFormik } from 'formik';


import TableRow from "../TableRow/TableRow";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Status from "../Status/Status";
import RadioInput from "../RadioInput/RadioInput";


interface IParams {
  id: string;
}

const data = {   
  "Name": "name",
  "CVE": "cve",
  "CWE": "cwe",
  "SOFTWARE": "software",
  "MALWARE": "malware",
  "THREAT_ACTOR": "threat actor",
  "INDUSTRY": "industry",
  "MITRE_ATTACK": "mitre attack",
  "COUNTRY": "country",
  "CITY": "city",
  "TIMESTAMP": "timestamp",
  "IOC": {
      "ipv4": "ipv4",
      "ipv6": "ipv6",
      "domain": "domain",
      "url": "url",
      "registry_key": "registry key",
      "file_path": "file path",
      "md5": "md5",
      "sha1": "sha1",
      "sha256": "sha256",
      "sha512": "sha512",
      "ssdeep": "ssdeep",
      "email": "email"
  },
  "DOCUMENT": "document",
  "RATING": "rating"
}

const Report = () => {
  const { id } = useParams<IParams>();
  const formik = useFormik({
    initialValues: {
      comment: "",
      checkStatus: "Need Check"
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
          <TableRow rowKey={"Name"} tooltip={"https://nvd.nist.gov/vuln"}>
            <div>{data.Name}</div>
          </TableRow>
          <TableRow rowKey={"CVE"} tooltip={"https://nvd.nist.gov/vuln"}>
            <div>{data.CVE}</div>
          </TableRow>
          <TableRow rowKey={"CWE"} tooltip={"https://cwe.mitre.org"}>
            <div>{data.CWE}</div>
          </TableRow>
          <TableRow rowKey={"SOFTWARE"} tooltip={"https://nvd.nist.gov/products/cpe"}>
            <div>{data.SOFTWARE}</div>
          </TableRow>
          <TableRow rowKey={"MALWARE"} tooltip={"https://malpedia.caad.fkie.fraunhofer.de/families"}>
            <div>{data.MALWARE}</div>
          </TableRow>
          <TableRow rowKey={"THREAT_ACTOR"} tooltip={"https://malpedia.caad.fkie.fraunhofer.de/actors"}>
            <div>{data.THREAT_ACTOR}</div>
          </TableRow>
          <TableRow rowKey={"INDUSTRY"} tooltip={"https://docs.oasis-open.org/cti/stix/v2.1/cs01/stix-v2.1-cs01.html#_oogrswk3onck"}>
            <div>{data.INDUSTRY}</div>
          </TableRow>
          <TableRow rowKey={"MITRE_ATTACK"} tooltip={"https://attack.mitre.org"}>
            <div>{data.MITRE_ATTACK}</div>
          </TableRow>
          <TableRow rowKey={"COUNTRY"}>
            <div>{data.COUNTRY}</div>
          </TableRow>
          <TableRow rowKey={"CITY"}>
            <div>{data.CITY}</div>
          </TableRow>
          <TableRow rowKey={"TIMESTAMP"}>
            <div>{data.TIMESTAMP}</div>
          </TableRow>
          <TableRow rowKey={"IOC"}>
            <div>123</div>
          </TableRow>
          <TableRow rowKey={"DOCUMENT"}>
            <div>{data.DOCUMENT}</div>
          </TableRow>
          <TableRow rowKey={"RATING"}>
            <div>{data.RATING}</div>
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
