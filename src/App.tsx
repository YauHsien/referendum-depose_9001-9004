import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  const [touched9001, setTouched9001] = useState(false);
  const [touched9002, setTouched9002] = useState(false);
  const [touched9003, setTouched9003] = useState(false);
  const [touched9004, setTouched9004] = useState(false);
  const [justTouched, setJustTouched] = useState(null);

  const onClick = (num) => {
    console.log(num);
    switch(num) {
    case 9001:
      setTouched9001(num);
    break;
    case 9002:
      setTouched9002(num);
    break;
    case 9003:
      setTouched9003(num);
    break;
    case 9004:
      setTouched9004(num);
    break;
    default:
      console.err(`bad clicked num: ${num}`);
    return false;
    }
    setJustTouched(num);
    window.open(`https://referendum.cec.gov.tw/depose/${num}`, '_blank');
  };

  const vsep = "mb-3";

  const stars = <span className="star">**</span>
  
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <ul>
        <li className={"mb-0 clickable-element "
	               +(justTouched==9001?"class-A":touched9001?"class-B":"class-C")}
	   onClick={()=>onClick(9001)}>
	   <Card className={touched9001?"test-bg-9001":"need-bg"}>
	   <CardContent className="p-3 flex" style={{margin: "auto"}}>
	     <p className="text-left">
	     113 年憲法訴訟法修法 ( 大法官人數 ) 之法律複決公投<br />
	     電子連署 https://referendum.cec.gov.tw/depose/9001
	     {touched9001?stars:""}
	     <span className={"text-bold "+(touched9001?"star":"")}>
	       &nbsp;{touched9001?"完成":"點我"}
	     </span>
	     {touched9001?stars:""}
	     </p>
	   </CardContent>
	   </Card>
	</li>
	<li className={vsep}>
	   提案資料 <a href="https://web.cec.gov.tw/referendum/article/60882" target="_blank">
	     https://web.cec.gov.tw/referendum/article/60882
	   </a>
	</li>
	<li className={"mb-0 clickable-element "
	               +(justTouched==9002?"class-A":touched9002?"class-B":"class-C")}
	   onClick={()=>onClick(9002)}>
	   <Card className={touched9002?"test-bg-9002":"need-bg"}>
	   <CardContent className="flex p-3">
	     <p className="text-left">
             113 年公職人員選舉罷免法修法 ( 提議人附身分證影本 ) 之法律複決公投<br />
             電子連署 https://referendum.cec.gov.tw/depose/9002
	     {touched9002?stars:""}
	     <span className={"text-bold "+(touched9002?"star":"")}>
	       &nbsp;{touched9002?"完成":"點我"}
	     </span>
	     {touched9002?stars:""}
	     </p>
	   </CardContent>
	   </Card>
	</li>
	<li className={vsep}>
	   提案資料 <a href="https://web.cec.gov.tw/referendum/article/61571" target="_blank">
	     https://web.cec.gov.tw/referendum/article/61571
	   </a>
	</li>
	<li className={"mb-0 clickable-element "
	               +(justTouched==9003?"class-A":touched9003?"class-B":"class-C")}
	   onClick={()=>onClick(9003)}>
	   <Card className={touched9003?"test-bg-9003":"need-bg"}>
	   <CardContent className="flex p-3">
	     <p className="text-left">
             113 年公職人員選舉罷免法修法 ( 連署人附身分證影本 ) 之法律複決公投<br />
             電子連署 https://referendum.cec.gov.tw/depose/9003
	     {touched9003?stars:""}
	     <span className={"text-bold "+(touched9003?"star":"")}>
	       &nbsp;{touched9003?"完成":"點我"}
	     </span>
	     {touched9003?stars:""}
	     </p>
	   </CardContent>
	   </Card>
	</li>
	<li className={vsep}>
	   提案資料 <a href="https://web.cec.gov.tw/referendum/article/61572" target="_blank">
	     https://web.cec.gov.tw/referendum/article/61572
	   </a>
	</li>
	<li className={"clickable-element "
	               +(justTouched==9004?"class-A":touched9004?"class-B":"class-C")}
	   onClick={()=>onClick(9004)}>
	   <Card className={touched9004?"test-bg-9004":"need-bg"}>
	   <CardContent className="flex p-3">
	     <p className="text-left">
             113 年公職人員選舉罷免法修法 ( 偽造、假冒之罰則 ) 之法律複決公投<br />
             電子連署 https://referendum.cec.gov.tw/depose/9004
	     {touched9004?stars:""}
	     <span className={"text-bold "+(touched9004?"star":"")}>
	       &nbsp;{touched9004?"完成":"點我"}
	     </span>
	     {touched9004?stars:""}
	     </p>
	   </CardContent>
	   </Card>
	</li>
	<li className="mb-2">
	   提案資料 <a href="https://web.cec.gov.tw/referendum/article/61573" target="_blank">
	   https://web.cec.gov.tw/referendum/article/61573
	   </a>
	</li>
      </ul>
    </div>
  );
}

export default App;
