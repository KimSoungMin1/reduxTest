import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo,deletememo } from "../modules/memo";

const Memo = () => {
    const memolist =useSelector((state)=>state.memo.memolist)
    const [text,setText]=useState('')
    const [title,setTitle]=useState('')

    //useDispatch를 통해서 사용할 함수를 가져옴
    const dispatch =useDispatch();

    //useCallback을 사용해줄때 입력값이 있다면 입력값에 따라 바뀔수 있도록 추가
    //매개변수로 받아오는 값은 고정되지 않음
    const addMemo =useCallback(()=>{
        dispatch(addmemo({title:title,text:text}))},[dispatch,title,text])

    const deleteMemo =useCallback((id)=>{
        dispatch(deletememo(id))},[dispatch])
    return ( 
        <div>
            <p>???</p>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={addMemo}>메모</button>
            {
            memolist.map((memo)=>(
                <div>
                    <h3 key={memo.id}>{memo.title}</h3>
                    <p>{memo.text}</p>
                    <button onClick={()=>{deleteMemo(memo.id)}}>X</button>
                </div>
            ))
            }
        </div>
    );
}

export default Memo;