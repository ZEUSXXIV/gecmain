import React, { useState } from "react";
import Api from "./Api";
import { useParams } from "react-router-dom";

const Template = () => {
  const { ref } = useParams();
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("{}");

  const body = JSON.stringify(ref)

  console.log(body)

  Api.post("/single-blog", {ref:ref})
    .then((res) => {
      if (res){
          console.log("res=========>>>>>>>>>",res)
          setHtml(res.data.html)
          setCss(`${res.data.css}`)
          document.getElementById("html").innerHTML = res.data.html;
      };
    })
    .catch((err) => {
      if (err) return err.response;
    });

  return (
    <>
      <style>{css}</style>
      <body id="html"></body>
    </>
  );
};

export default Template;
