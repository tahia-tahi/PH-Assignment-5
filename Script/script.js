
//  redirect to blog-page
document.getElementById('gradient-div')
    .addEventListener('click', function () {

        window.location.href = './blog.html';

    })




// calender
const today = new Date();

const dayAll = { weekday: 'long' };
const calender = { day: 'numeric', month: 'short', year: 'numeric' }

const currentDay = today.toLocaleDateString('en-US', dayAll);
const currentDate = today.toLocaleDateString('en-US', calender);

document.getElementById('day').innerText = currentDay;
document.getElementById('today').innerText = currentDate;



// button

let button = document.querySelectorAll('.main-btn')

for (let btn of button) {

    btn.addEventListener('click', function () {

        alert('Board updated successfully')

        if (btn === button[button.length - 1]) {
            alert('Congrats!!! You have completed all the current task')
        }

        this.setAttribute('disabled', true);
        this.style.opacity = .5;


        const taskAssigned = document.getElementById('assigned');
        const convertedTaskAssigned = parseInt(taskAssigned.innerText);
        taskAssigned.innerText = convertedTaskAssigned - 1;

        const checkList = document.getElementById('check-list');
        const convertedCheckList = parseInt(checkList.innerText);
        checkList.innerText = convertedCheckList + 1;

        const task = this.closest('.task-container').querySelector('.task').innerText;

        let now = new Date();
        const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const notification = document.getElementById('history');
        const p = document.createElement('p');
        p.classList.add('bg-[#F4F7FF]', 'p-3', 'pt-0', 'text-[#393333]', 'text-[11px]', 'mt-3', 'rounded-lg', 'text-left')
        p.innerText = `You have Complete The Task ${task} at ${currentTime}`

        notification.appendChild(p);
        notification.style.display = 'block';


    })

}






// dynamic background

const colors = ['bg-red-100', 'bg-green-100', 'bg-blue-100', 'bg-yellow-100']
let i = 0;
document.getElementById('theme-btn')
    .addEventListener('click', function () {
        document.body.classList.remove(...colors);
        document.body.classList.add(colors[i]);
        i = (i + 1) % colors.length;


    })




// clear history
document.getElementById('clear-btn')
    .addEventListener('click', function () {

        const history = document.getElementById('history')

        history.style.display = 'none';
    })



