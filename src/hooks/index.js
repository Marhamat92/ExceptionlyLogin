import React, { useState, useEffect, useRef } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export function useToggleHeader() {

    const [aboutUsOpen, setAboutUsOpen] = useState(false)
    const [realtyOpen, setRealtyOpen] = useState(false)
    const [attemptOpen, setAttemptOpen] = useState(false)
    const [movableOpen, setMovableOpen] = useState(false)
    const [pensionOpen, setPensionOpen] = useState(false)
    const [privatePortfolio, setPrivatePortfolio] = useState(false)

    function toggle(value, mobile) {
        closeToggles()
        if (value === "1") {
            setAboutUsOpen(mobile ? !aboutUsOpen : true)
        }
        if (value === "2")
            setRealtyOpen(mobile ? !realtyOpen : true)
        if (value === "3")
            setAttemptOpen(mobile ? !attemptOpen : true)
        if (value === "4")
            setMovableOpen(mobile ? !movableOpen : true)
        if (value === "5")
            setPensionOpen(mobile ? !pensionOpen : true)
        if (value === "6")
            setPrivatePortfolio(mobile ? !privatePortfolio : true)

    }
    function closeToggles() {
        setAboutUsOpen(false)
        setRealtyOpen(false)
        setAttemptOpen(false)
        setMovableOpen(false)
        setPensionOpen(false)
        setPrivatePortfolio(false)
    }
    return [aboutUsOpen, realtyOpen, attemptOpen, movableOpen, pensionOpen, privatePortfolio, toggle, closeToggles];
}


export function useCloseSelectBox(func) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    //when outside of the combobox clicked, it will be closed
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    func(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    return [wrapperRef];
}



export function useConfigureSelectBoxItem() {
    const [allData, setAllData] = useState([]);
  
    function configureSelectBoxItem(data, id, text) {
      let configure = [];
      data?.map((item) => {
        configure.push({
          id: item[id],
          text: item[text],
        });
      });
      setAllData(configure);
    }
  
    return [allData, configureSelectBoxItem];
  }