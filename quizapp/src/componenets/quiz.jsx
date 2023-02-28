import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "./header"

import { useQuize } from "../Context/QuizeContext";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center w-screen bg-[#E5E5E5]">
      <Box navigate = {navigate}/>
    </div>
  );
}

const Box = ({navigate}) => {
  const { quize, addAns, nextQuize,isLast,getResult } = useQuize();
  // const {setResult} = useState()
  const [ans, setAns] = useState();

  console.log("quize",quize);
  console.log(quize);

  const continueHandler = useCallback(() => {
    addAns({ ...quize, ans });
    nextQuize();
    setAns();
  }, [ans, addAns, nextQuize, quize]);

  function onFinalResult() {
    navigate("/result")
    getResult();
  }

  if (!quize) return null;

  return (
    <div className="boxx w-screen">
      <Header />
      <div className="flex flex-col w-screen justify-center items-center">
        <div className=" w-full my-5">
          <h1 className="text-center text-3xl font-medium">
            {quize.question}
          </h1>
        </div>
        <div className="flex flex-col m-10">
          {quize.options.map((option, index) => {
            return (
              // <div key={option.id} className="flex items-center m-3 justify-around">
              <div
              key={option.id}
              onClick={() => {
                setAns((prev) => (prev = option.id));
              }}
              className={`h-[81px] w-[510px] flex ${
                option.id === ans ? "bg-[#31CD63]" : "bg-[#F4F3F6]"
              }  justify-around items-center mt-[25px] rounded-[6.36px] cursor-pointer focus:outline-none hover:bg-[#31CD63]`}
            >
                {/* <input
                  type="radio"
                  name="options"
                  checked={option.id === ans}
                  onChange={() => {
                    setAns(option.id);
                  }}
                /> */}
                <p>{option.text}</p>
              </div>
            );
          })}
        </div>
        <div className="h-[88px] w-[1440px] mt-[60px] flex justify-center items-center bg-gray">
          <button
            type="button"
            onClick={isLast?onFinalResult:continueHandler}
            className="h-[60px] w-[260px] rounded-[8px] text-gray bg-[#747475] hover:bg-buttonPress"
          >
            {isLast?"Finish":"Continue"}
            
          </button>
        </div>
      </div>
    </div>
  );
};