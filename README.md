<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>随机选学生</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            text-align: center;
            width: 90%;
            max-width: 600px;
        }

        h1 {
            color: #2c3e50;
            margin-bottom: 1.5rem;
        }

        .button-group {
            margin: 1.5rem 0;
        }

        button {
            padding: 0.8rem 1.5rem;
            margin: 0 0.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        #startBtn {
            background-color: #3498db;
            color: white;
        }

        #stopBtn {
            background-color: #e74c3c;
            color: white;
        }

        button:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }

        .display-area {
            display: flex;
            justify-content: space-around;
            margin-top: 2rem;
        }

        .current-box, .result-box {
            padding: 1rem;
            border-radius: 8px;
            width: 45%;
        }

        .current-box {
            background-color: #ecf0f1;
        }

        .result-box {
            background-color: #2ecc71;
            color: white;
        }

        span {
            display: block;
            margin-top: 1rem;
            font-size: 1.5rem;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>课堂随机点名系统</h1>
        <div class="button-group">
            <button id="startBtn">开始</button>
            <button id="stopBtn">停止</button>
        </div>
        <div class="display-area">
            <div class="current-box">
                <p>正在抽选：</p>
                <span id="currentStudent">-</span>
            </div>
            <div class="result-box">
                <p>最终选中：</p>
                <span id="selectedStudent">-</span>
            </div>
        </div>
    </div>

    <script>
        // 学生名单（示例数据，请自行替换）
        const students = [
            '白晨阳', '常曦文', '阙雨豪', '赵子豪',
            '耿楷智', '程继熙'
        ];
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const currentStudent = document.getElementById('currentStudent');
        const selectedStudent = document.getElementById('selectedStudent');
        let timerId = null;
        let isRunning = false;
        function getRandomIndex() {
            return Math.floor(Math.random() * students.length);
        }

        function updateDisplay() {
            currentStudent.textContent = students[getRandomIndex()];
        }
        startBtn.addEventListener('click', () => {
            if (!isRunning) {
                isRunning = true;
                timerId = setInterval(updateDisplay, 50);
                currentStudent.style.color = '#e74c3c';
            }
        });
        stopBtn.addEventListener('click', () => {
            if (isRunning) {
                clearInterval(timerId);
                isRunning = false;
                selectedStudent.textContent = currentStudent.textContent;
                currentStudent.style.color = '#2c3e50';
                // 将选中学生移到数组最后保持显示
                const index = students.indexOf(selectedStudent.textContent);
                if (index > -1) {
                    students.push(students.splice(index, 1)[0]);
                }
            }
        });
    </script>
</body>
</html>
