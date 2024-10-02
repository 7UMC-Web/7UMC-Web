import React from 'react';
import TodoItem from '../components/TodoItem';

const TodoSection = ({ title, todos, onAction, onDelete, onEdit }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '48%',
            textAlign: 'center',
            fontWeight: 700,
        }}>
            <div style={{
                padding: '4px',
                borderBottom: '1.9px solid #B5D2ED',
                width: '30%',
                fontSize: '24px',
            }}>{title}</div>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index}
                        todo={todo}
                        onDone={() => onAction(index)}
                        onEdit={() => onEdit(index)}
                        onDelete={() => onDelete(index)}
                        showEditButtons={title === "해야 할 일"} // 제목에 따라 버튼 표시
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoSection;