function loadDashboard(dashboardName) {
    // Tableau 대시보드 컨테이너 및 관련 요소 참조
    const tableauContainer = document.getElementById('vizContainer');
    const tableauObject = tableauContainer.getElementsByTagName('object')[0];
    let nameValue = '';

    // 대시보드 이름에 따라 Tableau 대시보드 URL 설정
    if (dashboardName === 'dashboard1') {
        nameValue = '_17248735198700/sheet0';
    } else if (dashboardName === 'dashboard2') {
        nameValue = '_17248735198701/sheet0';
    }

    // Tableau Object 요소의 name 속성 변경
    tableauObject.querySelector("param[name='name']").value = nameValue;

    // Tableau API 스크립트가 이미 로드되어 있는지 확인
    const existingScript = document.querySelector("script[src='https://public.tableau.com/javascripts/api/viz_v1.js']");
    if (!existingScript) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        tableauObject.parentNode.insertBefore(scriptElement, tableauObject);
    } else {
        // 스크립트가 이미 로드된 경우, 대시보드 리로드
        tableauObject.style.display = 'block';
        tableauObject.parentNode.removeChild(existingScript);
        tableauObject.parentNode.insertBefore(existingScript, tableauObject);
    }
}
