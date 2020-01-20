import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Calender from 'react-calendar';
import Modal from 'react-modal';


const customStyles = {
  overlay: {
    zIndex: "100",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function CalenderComp(){

  Modal.setAppElement('#root');

  let eventD={
    20200201:{text:"元日"},

  }

  const [date,setDate]=useState(new Date());//クリックしたデータの移動用
  const [day,setDay]=useState("")
  const [eventDate,setEvemt]=useState(eventD);
  const [modalOpen,setModalOpen]=useState(false);

  function ChangeDate(dataValue){
    setDate(dataValue)

    setModalOpen(true)

    setDay(""+(dataValue))
  }

  function Decision(){
    setModalOpen(false)
  }

  function getFormData(date){

    return ""+date.getFullYear() + ("0"+(date.getMonth()+1)).slice(-2) + ("0"+date.getDate()).slice(-2)

  }

  function　getTileContent({ date, view }) {
    // 月表示のときのみ
    if (view !== 'month') {
      return null;
    }

    console.log(day)

    return(
      <p>
        <br />
          {(eventDate[getFormData(date)] && eventDate[getFormData(date)].text) ? eventDate[getFormData(date)].text:''}

      </p>
    )
  }

  return(

        <div className="react-calendar">
          <Calender
            locale="ja-JP"
            value={date}
            calendarType="US"
            onClickDay={(value) => ChangeDate(value)}
            tileContent={(date,value)=>getTileContent(date,value)}
          />

          <Modal
                isOpen={modalOpen}
                style={customStyles}
                contentLabel="Example Modal"
              >

              <p>{date.getFullYear()}/{("0"+(date.getMonth()+1)).slice(-2)}/
                {("0"+date.getDate()).slice(-2)}のイベント内容</p>

              <div>
                <p>タイトル</p>
                <input className="inputSize"></input>
              </div>


              <p>時間</p>
              <input className="inputSize"></input>

              <button className="desiedButton" onClick={()=>Decision()}>決定</button>

          </Modal>

        <p>{date.getDate()}</p>
        </div>

  )
}

export default CalenderComp;
