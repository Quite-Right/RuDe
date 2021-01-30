import { useState, useEffect } from "react"
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { Copy } from "@styled-icons/boxicons-regular";
import CopyToClipboard from 'react-copy-to-clipboard';

import { Threat } from "../../api"


import TableRow from "../TableRow/TableRow";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Status from "../Status/Status";
import RadioInput from "../RadioInput/RadioInput";
import ThreatField from "../ThreatField/ThreatField";
import Ioc from "../Ioc/Ioc";
import Malware from "../Malware/Malware";

interface IParams {
  id: string;
}

interface IRequest {
  error: null | any;
  status: null | number;
  data: null | Threat;
  isLoading: boolean | undefined;
}

const data: Threat = {
  name: "name", //Прост строка парсится из названия или первой строки файла
  cve: [{ parametr: "threat", info: "Dsdsdsdsdssss  dsd sd asd sad sad ad ad aadsd ddd  dsd sd asd sad sad ad ad aadsd ddd" }], // Всей найденные све (чаще всего будет только 1)
  cwe: [{ parametr: "threat", info: "Dsdsdsdsdssss  dsd sd asd sad sad ad ad aadsd ddd  dsd sd asd sad sad ad ad aadsd ddd" }], // Все найденые све 
  software: [{
    parametr: "THREAT", // Имя (чаще всего будет как и название файла)
    path: "path", // Путь к файлу
    fileName: "filename", // Имя фалйа
    fileExtenssion: "ext",// Расширение файла
    associatedHash: "hash", // Хэш файла если будет найден в том же предложении что и файл
    info: "info",
  }], //Это стринг в котором будет параграф из дока в котором нашлось это название, // Все зараженные софты (не факт что сможем отличать вредоносов от софтвейр)
  malware: [{
    parametr: "THREAT", // Имя (чаще всего будет как и название файла)
    path: "path", // Путь к файлу
    fileName: "filename", // Имя фалйа
    fileExtenssion: "ext",// Расширение файла
    associatedHash: "hash", // Хэш файла если будет найден в том же предложении что и файл
    info: "info",
  }], // Все вредоносы и инфа по ним
  threatActor: [{ parametr: "threat", info: "Dsdsdsdsdssss  dsd sd asd sad sad ad ad aadsd ddd  dsd sd asd sad sad ad ad aadsd ddd" }], // Киберпреступные групировки и ссылки на параграфы где их имена встречались
  industry: [{ parametr: "threat", info: "Dsdsdsdsdssss  dsd sd asd sad sad ad ad aadsd ddd  dsd sd asd sad sad ad ad aadsd ddd" }], // Индустрии и параграфы где они указаны
  mitreAattack: [{ parametr: "threat", info: "Dsdsdsdsdssss  dsd sd asd sad sad ad ad aadsd ddd  dsd sd asd sad sad ad ad aadsd ddd" }], // Атаки и параграфы где они указаны
  county: [{ parametr: "threat", info: "Dsdsdsdsdssss  dsd sd asd sad sad ad ad aadsd ddd  dsd sd asd sad sad ad ad aadsd ddd" }], // Страны и параграфы где они указаны
  city: [{ parametr: "threat", info: "Dsdsdsdsdssss  dsd sd asd sad sad ad ad aadsd ddd  dsd sd asd sad sad ad ad aadsd ddd" }], // Города (опционально)
  timeStamp: [{ parametr: "threat", info: "Dsdsdsdsdssss  dsd sd asd sad sad ad ad aadsd ddd  dsd sd asd sad sad ad ad aadsd ddd" }], // Тут сложнее, но как минимум будет список дат и параграфы где они указаны
  ioc: {
    ipv4: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }],
    ipv6: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], //масив всех найденых айпи
    domain: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], //все найденые домены
    url: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], // все найденые урлы
    registryKey: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], // все найденые ключи регистра
    md5: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], // все найденные хеш суммы
    sha1: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], // все найденные хеш суммы
    sha256: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], // все найденные хеш суммы
    sha512: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], // все найденные хеш суммы
    ssdeep: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], // все найденные хеш суммы
    email: [{
      parametr: "sha", //Это всегда строка, будь то айпи, урл или что-то еще
      info: "dsdsd", //Это стринг в котором будет параграф из дока в котором нашлось это название
      dangerous: true
    }], // все найденные емейлы //Вредоносный ли урл, емейл или домен. Для файлов и хэшей всегда правда
  }, // Иоки которые найденны в документе
  document: "DOCUMENT",// вернет отформатированный тхт документ, не уверен надо ли это
  rating: "0" // от 0 до 10
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
  const [requestState, setRequestState] = useState<IRequest>({
    error: null,
    status: null,
    data: null,
    isLoading: undefined,
  })

  const [similarReports, setSimilarReports] = useState<Array<string>>(["95ccc286-62f5-11eb-ae93-0242ac130002", "c616dfe4-62f5-11eb-ae93-0242ac130002"]);

  useEffect(() => {
    let mounted = true;
    setRequestState({
      ...requestState,
      data: data
    })
    return () => {
      mounted = false;
    }
  }, [])

  return (
    <div className="report">
      <div className="report__id">Отчет {requestState.data && requestState.data.name} #{id}   <CopyToClipboard text={window.location.href}
        onCopy={() => alert.show("Ссылка на отчет успешно скопирована")}>
        <Copy className="report__id-copy-btn" size="35" />
      </CopyToClipboard></div>
      <div className="reports__similar-label">Похожие отчеты</div>
      <div className="reports__similar">
        <Status data={similarReports.map(similarReport => {
          return {
            label: similarReport,
          }
        })} />
      </div>
      {requestState.data && <table className="table">
        <tbody>
          <TableRow rowKey={"Name"} tooltip={"https://nvd.nist.gov/vuln"}>
            {requestState.data.name}
          </TableRow>
          <TableRow rowKey={"CVE"} tooltip={"https://nvd.nist.gov/vuln"}>
            {requestState.data.cve.map((el, index) => {
              return <ThreatField key={index} {...el} />
            })}
          </TableRow>
          <TableRow rowKey={"CWE"} tooltip={"https://cwe.mitre.org"}>
            {requestState.data.cwe.map((el, index) => {
              return <ThreatField key={index} {...el} />
            })}
          </TableRow>
          <TableRow rowKey={"SOFTWARE"} tooltip={"https://nvd.nist.gov/products/cpe"}>
            {requestState.data.software.map((el, index) => {
              return <Malware {...el} key={index} />
            })}
          </TableRow>
          <TableRow rowKey={"MALWARE"} tooltip={"https://malpedia.caad.fkie.fraunhofer.de/families"}>
          {requestState.data.malware.map((el, index) => {
              return <Malware {...el} key={index} />
            })}
          </TableRow>
          <TableRow rowKey={"THREAT_ACTOR"} tooltip={"https://malpedia.caad.fkie.fraunhofer.de/actors"}>
            {requestState.data.threatActor.map((el, index) => {
              return <ThreatField key={index} {...el} />
            })}
          </TableRow>
          <TableRow rowKey={"INDUSTRY"} tooltip={"https://docs.oasis-open.org/cti/stix/v2.1/cs01/stix-v2.1-cs01.html#_oogrswk3onck"}>
            {requestState.data.industry.map((el, index) => {
              return <ThreatField key={index} {...el} />
            })}
          </TableRow>
          <TableRow rowKey={"MITRE_ATTACK"} tooltip={"https://attack.mitre.org"}>
            {requestState.data.mitreAattack.map((el, index) => {
              return <ThreatField key={index} {...el} />
            })}
          </TableRow>
          <TableRow rowKey={"COUNTRY"}>
            {requestState.data.county.map((el, index) => {
              return <ThreatField key={index} {...el} />
            })}
          </TableRow>
          <TableRow rowKey={"CITY"}>
            {requestState.data.city.map((el, index) => {
              return <ThreatField key={index} {...el} />
            })}
          </TableRow>
          <TableRow rowKey={"TIMESTAMP"}>
            {requestState.data.timeStamp.map((el, index) => {
              return <ThreatField key={index} {...el} />
            })}
          </TableRow>
          <TableRow rowKey={"IOC"}>
            <Ioc {...requestState.data.ioc} />
          </TableRow>
          {/* <TableRow rowKey={"DOCUMENT"}>
            <div>{String(data.DOCUMENT}</div>
          </TableRow>
          <TableRow rowKey={"RATING"}>
            <div>{String(data.RATING}</div>
          </TableRow> */}
        </tbody>
      </table>}
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
