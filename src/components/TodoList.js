import React, { useState } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem';

const TodoList = ({todo, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("")

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()))
  }
  return (
    <>
      <h4>Todo list 🍀</h4>
      <SearchBar 
      type="text" 
      placeholder='검색어를 입력하세요.'
      onChange={onChangeSearch}
      onDelete={onDelete}
      />

      <ListWrapper>
        {getSearchResult().map(
          (it) => (<TodoItem 
          key={it.id} 
          {...it} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
          />)
        )}
      </ListWrapper>
    </>
  )
}

const SearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  margin-bottom: 20px;
  &:focus{
    outline: none;
    border-bottom: 1px solid #de4e40;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default TodoList