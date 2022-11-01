import { useDispatch, useSelector } from "react-redux";
import { change, increse } from "../modules/counter";

const CountBox = () => {
    //useSelector를 통해서 state의 원하는 값을 가져올수 있다
    const number =useSelector((state)=>(state.counter.number))
    const changeNum =useSelector ((state)=>(state.counter.changeNum))

    //useDispatch를 통해서 사용할 함수를 가져옴
    const dispatch=useDispatch()
    return ( 
        <div>
            <h1>카운드입니다</h1>
            <h3>{number}</h3>
            <button onClick={()=>{
                //dispatch를 통해 {type:"액션"}을 전달해서 사용
                //>>>counter의 리듀서 함수로 가서 같은 타입을 찾은 후 실행
                //>>> 객체값을 직접 입력할 경우 오타 및 실수가 있을수 있어
                // 값을 변경하지 않고 사용하기 위해 counter에서 가져와서 사용
                dispatch(increse())}}>
                증가
            </button>
            <button onClick={()=>{dispatch({type:'decrease'})}}>감소</button>

            {/*changeNum값을 바꿀 input */}
            <p>{changeNum}</p>
            <input type="text" onChange={(e)=>{dispatch({type:'change',payload : e.target.value})}}/>
            <input type="text" onChange={(e)=>{dispatch(change(e.target.value))}}/>
        </div>
    );
}

export default CountBox;