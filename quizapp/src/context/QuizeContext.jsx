import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import { createContext } from "react";
  import axiosInstance from "../axios";
  
  export const QuizeContext = createContext();
  
  export function QuizeProvider(props) {
    const [quizeList, setQuizeList] = useState([]);
    const [ansList, setAnsList] = useState([]);
    const [currentQuizeIndex, setCurrentQuizeIndex] = useState(0);

  
    const loadQuize = useCallback(async () => {
      const res = await axiosInstance.get("questions/");
      setQuizeList(res.data);
    }, []);
  
    const nextQuize = useCallback(() => {
      setCurrentQuizeIndex((val) => val + 1);
    }, []);
  
    const addAns = useCallback((data) => {
      setAnsList((val) => [...val, data]);
    }, []);
  
    const getResult = useCallback(
      async (setResult) => {
        const res = await axiosInstance.post("questions/checkAns",ansList)
        setResult(res.data)
      },
      [ansList] 
    )

    useEffect(() => {
      loadQuize();
    }, []);
  
    const value = useMemo(
      () => ({
        loadQuize,
        nextQuize,
        addAns,
        getResult,
        quize: quizeList[currentQuizeIndex],
        ansList,
        isLast:quizeList.length<= currentQuizeIndex+1
      }),
      [quizeList, currentQuizeIndex, ansList]
    );
  
    return (
      <QuizeContext.Provider value={value}>
        {props.children}
      </QuizeContext.Provider>
    );
  }
  
  export const useQuize = () => useContext(QuizeContext);