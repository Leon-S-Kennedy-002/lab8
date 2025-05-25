// 学生名单（示例数据，请自行替换）
const students = [
    '白晨阳', '程继熙', '阙雨豪', '赵子豪',
    '常曦文', '耿楷智'
];
// DOM元素
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const currentStudent = document.getElementById('currentStudent');
const selectedStudent = document.getElementById('selectedStudent');
let timerId = null;
let isRunning = false;
// 生成随机索引
function getRandomIndex() {
    return Math.floor(Math.random() * students.length);
}

// 更新显示
function updateDisplay() {
    currentStudent.textContent = students[getRandomIndex()];
}

// 开始抽选
startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerId = setInterval(updateDisplay, 50);
        currentStudent.style.color = '#e74c3c';
    }
});

// 停止抽选
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