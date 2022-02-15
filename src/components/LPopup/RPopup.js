import React from "react";
import Popup from "reactjs-popup";
import "./RPopup.css";
import { GrClose } from 'react-icons/gr';
import { useDispatch , useSelector } from "react-redux";
import {logoutInitiate} from "../../redux/action"

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

const CustomModal = ({titleName , btn_text , btn_text2 , content_pera , header_h, closeDropDown, isOpen , close  }) => {
  const { currentUser  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleAuth = () => {
    if(currentUser) {
         dispatch(logoutInitiate());
    }
  }
  
  return (
   <>
   <div  >
  <Popup  
    trigger={<p className="button"  >{titleName}</p>}
    modal
    contentStyle={contentStyle}
    // onOpen={console.log("click")}
  >
    {close => {
      return (<div className="modal">
        <span className="closeSvg"><GrClose className="svg-Color"  onClick={close} /></span>
        <div className="header">{header_h}</div>
        <div className="content">
          <p>{content_pera}</p>
        </div>
        <div className="actions">
          <button className="button-ghost full" onClick={close}> {btn_text} </button>
          <button className="button-ghost non-Full" onClick={handleAuth} > {btn_text2} </button>
        </div>
      </div>)
    }}
  </Popup>
  </div>
  </>
  )

    };

export default CustomModal;
