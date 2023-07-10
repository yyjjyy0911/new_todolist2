import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const TodoEditor = ({onCreate}) => {
  const [content, setContent] = useState("")
  console.log(content);
  const inputRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  // input 내용이 없으면 배열이 추가 되지 않고
  // input에 커서 들어가게
  const onSubmit = () => {
    if(!content){
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContent("") // 아이템 추가하면 빈 입력상자 만들기
  }

  // Enter키를 누르면 새 할일 추가되게 만들기
  const onkeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit()
    }
  }

  return (
    <>
      <h4>새로운 Todo 작성하기 🖊</h4>
      <EditWrapper>
        <input 
        type="text" 
        placeholder='새로운 Todo...'
        value={content}
        onChange={onChangeContent}
        ref={inputRef}
        onKeyDown={onkeyDown}
        />
        <InserBtn onClick={onSubmit}>추가</InserBtn>
      </EditWrapper>
    </>
  )
}

const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  input{
    flex: 1;
    box-sizing: border-box;
    border: 1px solid rgb(220,220,220);
    border-radius: 5px;
    padding: 15px;
  }
  input:focus{
    outline: none;
    border: 1px solid #de4e40;
  }
`;

const InserBtn = styled.button`
  cursor: pointer;
  width: 80px;
  border: none;
  background: #de4e40;
  color: #fff;
  border-radius: 5px;
`;

export default TodoEditor