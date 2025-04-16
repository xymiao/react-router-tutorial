import './App.css'
import {useState} from "react";

function Button({onClick, children}){
    return (
        <button onClick={onClick}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}>{children}
        </button>
    )
}

function App() {
    // 定义一个处理按钮点击的函数
    const [message, setMessage] = useState('请点击按钮');
    const handleClick = () => {
        console.log('Hello World');
        setMessage('按钮被点击!');
    };

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>{message}</h1>
            {/* 使用组件的方式进行调用 */}
            <Button onClick={handleClick}>
                点击我
            </Button>
        </div>
    );
}

export default App
