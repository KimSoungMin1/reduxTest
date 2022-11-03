
//useReducer의 형식과 유사(초기값,리듀서 함수)
//초기값
const initalState={
    number:0,
    changeNum:1
}

//disptch에 들어갈 {type:"액션"}객체를 함수로 만들어서 내보내줌
export const increse =()=>({type:'increse'}) //리턴값 객체
export const decrease =()=>({type:'decrease'})
                //화살표함수도 동일하게 매개변수의 값을 받아올 수있다
export const change =(num)=>({type:'change',payload :num}) 

/*
*thunk를 사용하여 비동기로 실행하는 액션함수를 만들수 있다
*thunk의 형식을 사용했기 때문에, 바로 dispaych를 사용하는게 아니라
*나중에 추가해서 사용할수 있다
*thunk 사용형태 : export cosnt 함수이름 =()=>(dispatch)=>{}
 */
export const increseAsync =()=>(dispatch)=>{
    //dispatch를 실행하기전에 진행할 내용 작성
    //dispatch를 통해서 액션실행 
    // : 액션은 매개변수로 들고오지 않았기때문에 객체로 직접입력해주거나
    //이미 만들어둔 액션함수를 사용해서 실행

    //위에 미리 작성한 액션함수를 사용해서 전달
    setTimeout(()=>{dispatch(increse())},1000)
}
//*thunk를 사용해서 비동기 함수인 setTimer 사용
export const decreaseAsync=()=>(dispatch)=>{

                    //리듀서에서 작성한 액션값을 사용
    setTimeout(()=>{dispatch({type:"decrease"})},2000)
}

//리듀서 함수
function counter(state=initalState,action){
    switch (action.type){
        case "increse":
            const num =parseInt(state.changeNum)
            
            return {...state,number : state.number+num}
        case "decrease":
            return {...state ,number : state.number-state.changeNum}
        case "change":
            return {...state , changeNum : action.payload}
        default :
        return state
    }
}
export default counter