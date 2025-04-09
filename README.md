# 재난문자 알림센터

실시간 재난문자 확인 및 대처법을 제공하는 웹 페이지입니다.

## 📌 소개

재난문자 알림센터는 재난안전데이터공유플랫폼의 OpenAPI를 활용하여 실시간 재난문자를 확인하고, 각 재난 상황에 맞는 대처법을 제공합니다. 사용자들이 재난 상황에서 빠르게 정보를 얻고 적절한 대처를 할 수 있도록 도와주는 서비스입니다.

## ✨ 주요 기능

- 실시간 재난문자 확인 (카드 형태 UI)
- 재난 유형별 맞춤 대처법 제공
- 인터랙티브 카드 플립 인터페이스
- 심각도에 따른 시각적 구분 (일반/위급)
- 자동 데이터 갱신 (1분 간격)

## 🛠️ 기술 스택

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

- **프론트엔드**: HTML, CSS, JavaScript
- **UI 프레임워크**: Tailwind CSS
- **라이브러리**: 
  - jQuery: DOM 조작 및 이벤트 처리
  - Moment.js: 날짜 및 시간 포맷팅
- **API**: 재난안전데이터공유플랫폼 OpenAPI (DSSP-IF-00247)
- **CORS 우회**: allorigins.win 서비스

## 📸 스크린샷

![재난문자 알림센터 메인화면](screenshots/main.png)

## 📊 지원하는 재난 유형

| 재난 유형 | 색상 |
|----------|------|
| 산사태 | 적색 |
| 조수 | 청색 |
| 지진 | 황색 |
| 폭염 | 분홍색 |
| 풍수해(태풍,호우,대설) | 청록색 |
| 감염병 | 녹색 |
| 다중밀집건축물붕괴대형사고 | 보라색 |
| 산불 | 적색 |
| 초미세먼지 재난 | 회색 |
| l해양선박사고 | 남색 |

## 📝 프로젝트 구조

```
disaster-alert-center/
├── index.html        # 메인 HTML 파일
├── styles.css        # 스타일시트
├── scripts.js        # 자바스크립트 로직
├── screenshots/      # 스크린샷 이미지
└── README.md         # 프로젝트 설명
```

## 🔄 API 활용 방법

이 프로젝트는 재난안전데이터공유플랫폼의 OpenAPI를 사용합니다:

```javascript
const apiUrl = "https://api.allorigins.win/get?url=" + 
  encodeURIComponent(
    `https://www.safetydata.go.kr/V2/api/DSSP-IF-00247?&serviceKey=YOUR_API_KEY&numOfRows=10&pageNo=1&returnType=json&crtDt=${today}`
  );
```

실제 사용 시에는 YOUR_API_KEY 부분을 발급받은 API 키로 교체해야 합니다.

## 🔮 향후 개발 계획

- 사용자 위치 기반 지역별 재난문자 필터링
- 푸시 알림 기능
- 재난 대비 체크리스트
- 과거 재난문자 검색 및 조회 기능
- 다국어 지원

## 📞 연락처

프로젝트 링크: [[https://github.com/ihateundefined/disaster-alert-center](https://github.com/ihateundefined/DisasterAlert)
]
