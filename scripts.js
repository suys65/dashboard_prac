// scripts.js

// 성적 버튼 클릭 시 하위 메뉴 표시
document.getElementById('grade-btn').addEventListener('click', function() {
    const gradeSubmenu = document.getElementById('grade-submenu');
    gradeSubmenu.style.display = 'block';  // 이수 학점, 학점 하위 메뉴 보이기
});

// '학점' 버튼 클릭 시 학과별 학점, 연도별 학점 버튼 표시 및 하위 메뉴 숨김
document.getElementById('score-btn').addEventListener('click', function() {
    const contentButtons = document.getElementById('content-buttons');
    const gradeSubmenu = document.getElementById('grade-submenu');
    const dashboardTitle = document.getElementById('dashboard-title');
    const breadcrumb = document.getElementById('breadcrumb');
    gradeSubmenu.style.display = 'none';  // 하위 메뉴 숨기기
    contentButtons.style.display = 'block';  // 학과별 학점, 연도별 학점 버튼 보이기
    dashboardTitle.style.display = 'none';  // 최종 업데이트 일시 숨기기
    breadcrumb.style.display = 'block';  // Home > 성적 > 학점 경로 표시
});

// 학과별 학점, 연도별 학점 버튼 클릭 시 제목 표시 및 최종 업데이트 일시 추가
const departmentBtn = document.getElementById('department-btn');
const yearBtn = document.getElementById('year-btn');
const selectedTitle = document.getElementById('selected-title');
const lastUpdatedTitle = document.getElementById('last-updated-title');

var viz;  // Variable to hold the Tableau Viz object
var dashboardBox = document.querySelector('.dashboard-box');

document.addEventListener('DOMContentLoaded', function() {
    const dashboardBox = document.querySelector('.dashboard-box');
    const departmentBtn = document.getElementById('department-btn');
    const yearBtn = document.getElementById('year-btn');
    const selectedTitle = document.getElementById('selected-title');
    const lastUpdatedTitle = document.getElementById('last-updated-title');

    var viz;  // Variable to hold the Tableau Viz object

    departmentBtn.addEventListener('click', function() {
        departmentBtn.classList.add('active-btn');
        departmentBtn.classList.remove('inactive-btn');
        yearBtn.classList.remove('active-btn');
        yearBtn.classList.add('inactive-btn');
        selectedTitle.textContent = '학과 별 학점';
        lastUpdatedTitle.style.display = 'block';
    
        // Dispose existing viz if it exists
        if (viz) {
            try {
                viz.dispose();
            } catch (error) {
                console.error("Error disposing existing viz:", error);
            }
        }
    
        // Clear previous content after disposing the viz
        dashboardBox.innerHTML = '';
    
        // Insert image instead of Tableau Viz
        const img = document.createElement('img');
        img.src = 'image/사진.png';
        img.alt = 'Sample Image';
        img.width = 850;  // Set the desired width
        img.height = 800; // Set the desired height
        dashboardBox.appendChild(img);
    });

    yearBtn.addEventListener('click', function() {
        yearBtn.classList.add('active-btn');
        yearBtn.classList.remove('inactive-btn');
        departmentBtn.classList.remove('active-btn');
        departmentBtn.classList.add('inactive-btn');
        selectedTitle.textContent = '연도 별 학점';
        lastUpdatedTitle.style.display = 'block';

        // Dispose existing viz if it exists
        if (viz) {
            try {
                viz.dispose();
            } catch (error) {
                console.error("Error disposing existing viz:", error);
            }
        }
    
        // Clear previous content after disposing the viz
        dashboardBox.innerHTML = '';
    
        // Insert image instead of Tableau Viz
        const img = document.createElement('img');
        img.src = 'image/연도별 추세 연습 (1).png';
        img.alt = 'Sample Image';
        img.width = 1000;  // Set the desired width
        img.height = 800; // Set the desired height
        dashboardBox.appendChild(img);
    });
});
