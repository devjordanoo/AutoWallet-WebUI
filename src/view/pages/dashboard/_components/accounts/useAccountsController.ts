import { useWindowWidth } from "@/app/hooks";
import { useDashboard } from "@/app/hooks/_useDashboard";
import { useState } from "react"

export const useAccountsController = () => {
  const { areValuesVisible, toggleValuesVisiblity } = useDashboard();
  const windowWidth = useWindowWidth();

  const [ sliderState, setSliderState ] = useState({
    isBeginning: true,
    isEnd: false
  });

  return {
    sliderState, 
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisiblity
  }
}