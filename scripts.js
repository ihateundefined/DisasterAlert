$(document).ready(function () {
  // 재난 타입별 대처법 데이터
  const disasterResponses = {
    산사태: {
      title: "산사태 대처법",
      steps: [
        "위험지역에서 대피 명령이 발령되면 신속히 대피하세요.",
        "산사태 발생 중에는 계곡이나 비탈면에서 멀리 떨어지세요.",
        "산사태 소리나 땅의 움직임을 느끼면 즉시 높은 곳으로 대피하세요.",
        "대피 시 개인 소지품보다 생명의 안전을 우선하세요.",
      ],
      color: "bg-red-100 border-red-500 text-red-800",
    },
    조수: {
      title: "조수 대처법",
      steps: [
        "해안가에서 멀리 떨어진 높은 지대로 대피하세요.",
        "라디오나 TV 등을 통해 기상 정보를 계속 확인하세요.",
        "선박은 단단히 묶어두고, 해안가 근처에 주차하지 마세요.",
        "대피 시 개인 소지품보다 생명의 안전을 우선하세요.",
      ],
      color: "bg-blue-100 border-blue-500 text-blue-800",
    },
    지진: {
      title: "지진 대처법",
      steps: [
        "실내에서는 테이블 아래로 몸을 보호하고 진동이 멈출 때까지 기다리세요.",
        "흔들림이 멈추면 출구를 확보하고 신속히 밖으로 대피하세요.",
        "대피 시 엘리베이터를 절대 이용하지 마세요.",
        "건물 밖에서는 건물, 전신주, 가로등과 같은 구조물로부터 멀리 떨어지세요.",
      ],
      color: "bg-yellow-100 border-yellow-500 text-yellow-800",
    },
    폭염: {
      title: "폭염 대처법",
      steps: [
        "가능한 한 외출을 자제하고 시원한 실내에 머무르세요.",
        "충분한 물을 마시고 규칙적으로 휴식을 취하세요.",
        "냉방이 되지 않는 경우 물에 적신 수건이나 선풍기를 활용하세요.",
        "어린이나 노약자는 특히 주의깊게 보살펴야 합니다.",
      ],
      color: "bg-orange-100 border-orange-500 text-orange-800",
    },
    풍수해: {
      title: "풍수해(태풍/호우/대설) 대처법",
      steps: [
        "홍수 위험이 있는 지역에서는 높은 곳으로 대피하세요.",
        "물에 잠긴 도로로 운전하지 마세요.",
        "강풍 시에는 창문을 닫고 외부 활동을 자제하세요.",
        "대설 시에는 미끄러지지 않도록 조심하고 보온에 신경쓰세요.",
      ],
      color: "bg-indigo-100 border-indigo-500 text-indigo-800",
    },
    감염병: {
      title: "감염병 대처법",
      steps: [
        "개인 위생을 철저히 관리하고 손을 자주 씻으세요.",
        "사람이 많은 장소는 가급적 피하세요.",
        "호흡기 증상이 있을 때는 마스크를 착용하세요.",
        "의심 증상이 있으면 의료기관에 방문하기 전에 전화로 상담하세요.",
      ],
      color: "bg-green-100 border-green-500 text-green-800",
    },
    다중밀집건축물붕괴대형사고: {
      title: "건물 붕괴 대처법",
      steps: [
        "건물 내부에 있다면 책상이나 테이블 아래로 피하세요.",
        "가스, 전기 등 위험요소를 차단하세요.",
        "엘리베이터를 절대 이용하지 말고 계단으로 대피하세요.",
        "안전한 장소로 대피한 후 119에 신고하세요.",
      ],
      color: "bg-purple-100 border-purple-500 text-purple-800",
    },
    산불: {
      title: "산불 대처법",
      steps: [
        "산불 발생 지역에서 신속히 대피하세요.",
        "대피 방향은 바람을 등지고 이동하는 것이 안전합니다.",
        "연기가 많은 지역은 젖은 수건으로 코와 입을 가리세요.",
        "산불 진행 방향의 반대쪽으로 대피하세요.",
      ],
      color: "bg-red-100 border-red-500 text-red-800",
    },
    초미세먼지: {
      title: "초미세먼지 대처법",
      steps: [
        "외출 시 마스크를 착용하세요.",
        "실외 활동을 자제하고 창문을 닫아두세요.",
        "귀가 후에는 손과 얼굴을 깨끗이 씻으세요.",
        "물을 자주 마시고 충분한 휴식을 취하세요.",
      ],
      color: "bg-gray-200 border-gray-500 text-gray-800",
    },
    해양선박사고: {
      title: "해양선박사고 대처법",
      steps: [
        "구명조끼를 착용하고 비상 탈출로를 확인하세요.",
        "승무원의 지시에 따라 질서있게 대피하세요.",
        "바다에 뛰어들기 전에 구명장비를 확보하세요.",
        "물에 뛰어든 후에는 체온 유지를 위해 최대한 움직임을 줄이세요.",
      ],
      color: "bg-blue-100 border-blue-500 text-blue-800",
    },
    기본: {
      title: "재난 대처 기본 수칙",
      steps: [
        "당황하지 말고 침착하게 행동하세요.",
        "정부 지시와 뉴스를 주시하며 정보를 확인하세요.",
        "비상용품(물, 식량, 약품, 라디오)을 준비해두세요.",
        "가족과 만날 장소와 연락 방법을 미리 정해두세요.",
      ],
      color: "bg-blue-100 border-blue-500 text-blue-800",
    },
  };

  // 재난 타입 매핑
  function getDisasterType(message) {
    const types = {
      산사태: ["산사태", "토석류", "사면붕괴"],
      조수: ["조수", "해일", "너울", "조류"],
      지진: ["지진", "규모", "진도", "여진", "지진해일"],
      폭염: ["폭염", "더위", "열파", "무더위"],
      풍수해: ["태풍", "호우", "홍수", "폭우", "대설", "눈", "강풍", "풍랑"],
      감염병: ["감염병", "바이러스", "전염병", "코로나", "독감"],
      다중밀집건축물붕괴대형사고: ["붕괴", "건물붕괴", "사고", "화재"],
      산불: ["산불", "화재", "산림"],
      초미세먼지: ["미세먼지", "초미세먼지", "대기오염"],
      해양선박사고: ["선박", "해양", "페리", "여객선"],
    };

    for (const [type, keywords] of Object.entries(types)) {
      if (keywords.some((keyword) => message.includes(keyword))) {
        return type;
      }
    }

    return "기본";
  }

  // 샘플 데이터
  const sampleData = [
    {
      SN: "1",
      CRT_DT: "2025-04-01 14:30:00",
      MSG_CN:
        "[행정안전부] 서울 강남구 일대 지진 발생(규모 3.5). 낙하물에 주의하시고 건물 밖으로 대피하세요.",
      RCPTN_RGN_NM: "서울특별시 강남구",
      EMRG_STEP_NM: "위급",
      DST_SE_NM: "지진",
      REG_YMD: "20250401",
      MDFCN_YMD: "20250401",
    },
    {
      SN: "2",
      CRT_DT: "2025-03-30 09:15:00",
      MSG_CN:
        "[기상청] 경상남도 일대 폭염 특보. 야외활동을 자제하시고 충분한 물을 섭취하세요. 노약자 건강에 유의하세요.",
      RCPTN_RGN_NM: "경상남도 전역",
      EMRG_STEP_NM: "주의",
      DST_SE_NM: "폭염",
      REG_YMD: "20250330",
      MDFCN_YMD: "20250330",
    },
    {
      SN: "3",
      CRT_DT: "2025-03-29 18:45:00",
      MSG_CN:
        "[산림청] 강원도 홍천군 일대 산불 발생. 인근 주민은 안전한 곳으로 대피하시고 산림 출입을 금지합니다.",
      RCPTN_RGN_NM: "강원도 홍천군",
      EMRG_STEP_NM: "경계",
      DST_SE_NM: "산불",
      REG_YMD: "20250329",
      MDFCN_YMD: "20250329",
    },
    {
      SN: "4",
      CRT_DT: "2025-03-27 21:10:00",
      MSG_CN:
        "[기상청] 제주도 남부 해안 태풍 경보. 강한 바람과 폭우가 예상됩니다. 해안가 접근을 자제하고 안전한 곳으로 대피하세요.",
      RCPTN_RGN_NM: "제주특별자치도 남부",
      EMRG_STEP_NM: "경계",
      DST_SE_NM: "풍수해",
      REG_YMD: "20250327",
      MDFCN_YMD: "20250327",
    },
    {
      SN: "5",
      CRT_DT: "2025-03-25 11:20:00",
      MSG_CN:
        "[질병관리청] 수도권 지역 호흡기 감염병 확산. 사람이 많은 장소 방문 자제, 마스크 착용, 손 씻기 등 개인위생 수칙을 준수하세요.",
      RCPTN_RGN_NM: "서울, 경기, 인천",
      EMRG_STEP_NM: "주의",
      DST_SE_NM: "감염병",
      REG_YMD: "20250325",
      MDFCN_YMD: "20250325",
    },
    {
      SN: "6",
      CRT_DT: "2025-03-24 11:20:00",
      MSG_CN: "[종로구] 산사태 발생. 모두 대피하세요",
      RCPTN_RGN_NM: "서울",
      EMRG_STEP_NM: "주의",
      DST_SE_NM: "산사태",
      REG_YMD: "20250324",
      MDFCN_YMD: "20250324",
    },
  ];

  // 카드 생성 함수
  function createDisasterCard(data) {
    const disasterType = data.DST_SE_NM || getDisasterType(data.MSG_CN);
    const responseData =
      disasterResponses[disasterType] || disasterResponses["기본"];

    // 날짜 포맷팅
    const formattedDate = moment(data.CRT_DT).format("YYYY.MM.DD HH:mm");

    // 카드 컨테이너 생성
    const cardContainer = $("<div>").addClass(
      "card-container flex-shrink-0 w-72 h-96 mx-auto"
    );

    // 카드 생성
    const card = $("<div>").addClass("card w-full h-full cursor-pointer");

    // 카드 앞면 (재난문자 내용)
    const cardFront = $("<div>").addClass(
      "card-front flex flex-col rounded-lg shadow-lg overflow-hidden " +
        (data.EMRG_STEP_NM === "위급" ? "bg-red-50" : "bg-white")
    );

    // 헤더 부분
    const cardHeader = $("<div>").addClass(
      "p-4 " +
        (data.EMRG_STEP_NM === "위급" ? "bg-red-500" : "bg-blue-500") +
        " text-white"
    );
    cardHeader.append(
      $("<h3>")
        .addClass("font-bold text-lg")
        .text(disasterType || "재난문자")
    );
    cardHeader.append(
      $("<p>")
        .addClass("text-sm opacity-90")
        .text(data.RCPTN_RGN_NM || "전국")
    );

    // 날짜 부분
    const cardDate = $("<div>").addClass(
      "bg-gray-100 px-4 py-2 text-sm text-gray-700 flex items-center"
    );
    cardDate.append(
      $(
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
      )
    );
    cardDate.append($("<span>").text(formattedDate));

    // 내용 부분
    const cardContent = $("<div>").addClass("p-4 flex-grow overflow-y-auto");
    cardContent.append($("<p>").addClass("text-gray-800").text(data.MSG_CN));

    // 설명 부분
    const cardFooter = $("<div>").addClass(
      "p-3 bg-gray-50 text-xs text-gray-500 text-center border-t"
    );
    cardFooter.text("탭하여 대처법 보기");

    // 조립
    cardFront.append(cardHeader, cardDate, cardContent, cardFooter);

    // 카드 뒷면 (대처법)
    const cardBack = $("<div>").addClass(
      `card-back rounded-lg shadow-lg overflow-hidden border-2 ${responseData.color}`
    );

    // 뒷면 헤더
    const backHeader = $("<div>").addClass(
      "p-4 " +
        (responseData.color.includes("red") ? "bg-red-500" : "bg-blue-500") +
        " text-white"
    );
    backHeader.append(
      $("<h3>").addClass("font-bold text-lg").text(responseData.title)
    );

    // 뒷면 내용
    const backContent = $("<div>").addClass("p-4 flex-grow");
    const stepsList = $("<ol>").addClass(
      "list-decimal pl-5 space-y-2 text-gray-800"
    );

    responseData.steps.forEach((step) => {
      stepsList.append($("<li>").text(step));
    });

    backContent.append(stepsList);

    // 뒷면 푸터
    const backFooter = $("<div>").addClass(
      "p-3 bg-gray-50 text-xs text-gray-500 text-center border-t"
    );
    backFooter.text("탭하여 재난문자 보기");

    // 조립
    cardBack.append(backHeader, backContent, backFooter);

    card.append(cardFront, cardBack);
    cardContainer.append(card);

    // 클릭 이벤트 추가
    card.on("click", function () {
      $(this).toggleClass("flipped");
    });

    return cardContainer;
  }

  // API 호출 함수
  function fetchDisasterAlerts() {
    const apiUrl =
      "https://api.allorigins.win/get?url=" +
      encodeURIComponent(
        "https://www.safetydata.go.kr/V2/api/DSSP-IF-00247?&serviceKey=R9VXP72Z0Y6YV23M&numOfRows=10&pageNo=1&returnType=json&crtDt=20250408"
      );

    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function (response) {
        console.log(response);
        const data = JSON.parse(response.contents); // JSON 변환
        console.log(data); // 전체 데이터 출력
        console.log(data.body); // body 출력

        if (data && data.body && data.body) {
          displayDisasterAlerts(data.body);
        } else {
          $("#disaster-alerts").html(
            '<div class="text-center text-red-500">데이터를 불러오는데 실패했습니다.</div>'
          );
        }
      },
      error: function (xhr, status, error) {
        $("#disaster-alerts").html(
          '<div class="text-center text-red-500">데이터를 불러오는데 실패했습니다.</div>'
        );
        console.error("API 호출 오류:", error);
      },
    });
  }

  // 재난문자 표시 함수
  function displayDisasterAlerts(alerts) {
    const container = $("#disaster-alerts");
    container.empty();

    // 날짜 기준으로 정렬 (최신순)
    alerts.sort((a, b) => new Date(b.CRT_DT) - new Date(a.CRT_DT));

    // 최대 10개만 표시
    const displayAlerts = alerts.slice(0, 10);

    // 카드 생성 및 추가
    displayAlerts.forEach((alert) => {
      container.append(createDisasterCard(alert));
    });

    // 처음에는 가장 최신 카드가 중앙에 오도록 스크롤 설정
    if (displayAlerts.length > 0) {
      setTimeout(() => {
        const containerWidth = container.width();
        const cardWidth = container
          .find(".card-container")
          .first()
          .outerWidth(true);
        const scrollPos = cardWidth * (displayAlerts.length > 2 ? 1 : 0);
        container.scrollLeft(scrollPos);
      }, 100);
    }
  }

  // 좌우 스크롤 버튼 이벤트
  $("#scroll-left").click(function () {
    const container = $("#disaster-alerts");
    const scrollAmount = container
      .find(".card-container")
      .first()
      .outerWidth(true);
    container.animate({ scrollLeft: "-=" + scrollAmount }, 300);
  });

  $("#scroll-right").click(function () {
    const container = $("#disaster-alerts");
    const scrollAmount = container
      .find(".card-container")
      .first()
      .outerWidth(true);
    container.animate({ scrollLeft: "+=" + scrollAmount }, 300);
  });

  // 초기 데이터 로드
  fetchDisasterAlerts();

  // 1분마다 데이터 갱신
  setInterval(fetchDisasterAlerts, 60000);
});
