let viz; // 전역 변수로 viz 객체를 저장

function loadDashboard() {
    const divElement = document.getElementById('vizContainer');
    const vizElement = divElement.getElementsByTagName('object')[0];
    
    // 대시보드 URL 설정
    const dashboardURL = "https://public.tableau.com/views/Salesforce20Sales20Cloud20-20Weighted20Sales20Pipeline_17258881001060/Home?:language=ko-KR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
    
    // URL 업데이트
    vizElement.querySelector("param[name='name']").value = "Salesforce20Sales20Cloud20-20Weighted20Sales20Pipeline_17258881001060/Home";
    
    // Tableau API 스크립트 로드
    const existingScript = document.querySelector("script[src='https://public.tableau.com/javascripts/api/viz_v1.js']");
    if (!existingScript) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        scriptElement.onload = function() {
            new tableau.Viz(divElement, dashboardURL, {
                width: '100%',
                height: '100%'
            });
        };
        document.body.appendChild(scriptElement);
    } else {
        // 이미 스크립트가 로드된 경우
        new tableau.Viz(divElement, dashboardURL, {
            width: '100%',
            height: '100%'
        });
    }
}


function createViz(divElement, dashboardURL) {
    // 기존 대시보드가 있다면 제거
    if (viz) {
        viz.dispose();
    }

    // 새로운 대시보드 생성
    viz = new tableau.Viz(divElement, dashboardURL, {
        width: '100%',
        height: '100%'
    });
}

function removeDashboard() {
    const divElement = document.getElementById('vizContainer');

    // 대시보드 제거
    if (viz) {
        viz.dispose();
        viz = null;
    }
    
    // 컨테이너에서 대시보드 내용 지우기
    divElement.innerHTML = '';
}