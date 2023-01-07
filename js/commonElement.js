// 헤더-------------------------------------------
class DidimdolHeader extends HTMLElement {
  constructor() {
    super();
  }

  // 문서의 DOM에 처음 연결될 때 호출
  connectedCallback() {
    this.render();
  }

  // 해당요소가 새로운 문서로 이동 될 때마다 호출 된다.
  adoptCallback() {}

  // 사용자 정의 요소의 속성 중 하나가 추가, 제거 또는 변경될 때 호출
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  // 문서의 DOM에서 연결 해제될 때 호출
  disconnectedCallback() {}

  render() {
    const _VW = window.innerWidth;

    let fileName = document.URL.split("/");
    let file = [fileName[fileName.length - 2], fileName[fileName.length - 1]];
    let login = false;
    console.log(file);

    let fileRoute = [
      "classPlus_data",
      "d_quiz",
      "default",
      "digitalClass_data",
      "evaluation_data",
      "share",
      "sign_inup",
      "my_page",
      "service_center",
      "event",
    ];

    console.log(fileRoute.includes(file[0]));

    let pcHeader = `
        <header id="header_pc">
            <div class="top_area">
                <div class="wrap_inner">
                    <h1 class="logo">
                        <a href="${fileRoute.includes(file[0]) ? "../" : ""}index.html" class="link">
                            <img src="${fileRoute.includes(file[0]) ? "../../" : "../"}img/icon/logo.svg" alt="">
                        </a>
                    </h1>
                    <div class="search_wrap">
                        <input type="text" placeholder="검색어를 입력해 주세요.">
                        <button type="button" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}search.html'" class="search_btn"></button>
                    </div>
                    <ul class="extra_nav">
                        ${
                            login
                            ?`
                            <!-- 로그인 후 레이아웃 -->
                            <li class="list" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}my_page/grade_setting.html'">
                                <div class="icon_box myPage"></div>
                                <span>디딤돌님</span>
                            </li>
                            <li class="list">
                                <div class="icon_box logout"></div>
                                <span>로그아웃</span>
                            </li>
                            `
                            :`
                            <!-- 로그인 전 레이아웃 -->
                            <li class="list" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}sign_inup/sign_in.html'">
                                <div class="icon_box signin"></div>
                                <span>로그인</span>
                            </li>
                            <li class="list" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}sign_inup/agree_terms.html'">
                                <div class="icon_box signup"></div>
                                <span>회원가입</span>
                            </li>
                            `
                        }
                        <li class="list" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}event/event_ing.html'">
                            <div class="icon_box event"></div>
                            <span>이벤트</span>
                        </li>
                        <li class="list" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}service_center/notice.html'">
                            <div class="icon_box serviceCenter"></div>
                            <span>고객센터</span>
                        </li>
                    </ul>
                </div>
            </div>
            ${
                file[0].includes(fileRoute[6]) ?`
                
                `:`
                <ul class="gnb">
                    <li class="list classPlus ${file[0].includes(fileRoute[0]) ? "active" : ""}" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}classPlus_data/classPlus_data.html'">
                        <span>수업 플러스 자료</span>
                    </li>
                    <span class="deco"></span>
                    <li class="list evaluation ${file[0].includes(fileRoute[4]) ? "active" : ""}" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}evaluation_data/evaluation_data.html'">
                        <span>평가 자료</span>
                    </li>
                    <span class="deco"></span>
                    <li class="list digital ${file[0].includes(fileRoute[3]) ? "active" : ""}" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}digitalClass_data/deigitalClass_math.html'">
                        <span>디지털 수업 자료</span>
                    </li>
                    <span class="deco"></span>
                    <li class="list quiz ${file[0].includes(fileRoute[1]) ? "active" : ""}" onclick="window.open('${fileRoute.includes(file[0]) ? "../" : ""}d_quiz/d_quiz_main.html')">
                        <span>D퀴즈</span>
                    </li>
                    <span class="deco"></span>
                    <li class="list share ${file[0].includes(fileRoute[5]) ? "active" : ""}" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}share/class_data_share.html'">
                        <span>나눔 마당</span>
                    </li>
                </ul>
                `
            }
        </header>
      `;

    this.innerHTML = pcHeader;

  }
}

// 사이드메뉴--------------------------------------------
class DidimdolSideMenu extends HTMLElement {
  constructor() {
    super();
  }

  // 문서의 DOM에 처음 연결될 때 호출
  connectedCallback() {
    this.render();
  }

  // 해당요소가 새로운 문서로 이동 될 때마다 호출 된다.
  adoptCallback() {}

  // 사용자 정의 요소의 속성 중 하나가 추가, 제거 또는 변경될 때 호출
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  // 문서의 DOM에서 연결 해제될 때 호출
  disconnectedCallback() {}

  render() {
    let fileName = document.URL.split("/");
    let file = [fileName[fileName.length - 2], fileName[fileName.length - 1]];
    let login = true;
    let confirm = false;

    let fileRoute = [
      "classPlus_data",
      "d_quiz",
      "default",
      "digitalClass_data",
      "evaluation_data",
      "share",
      "sign_inup",
      "my_page",
      "service_center",
      "event",
    ];

    let sideMenu = `
    <div class="side_menu normal">
        <div class="open_btn">
            <div class="icon_box"></div>
        </div>
        <div class="side_inner">
            <h1 class="logo"></h1>
            <div class="login_part">
                ${
                  login
                  ?`
                  <!-- 로그인 후 레이아웃 -->
                  <!-- 교사인증 완료 시(변수 confirm true시) confirmed 클래스 추가 -->
                  <div class="after_login ${confirm ? "confirmed" : ""}">
                      <h3>
                          환영합니다 :)
                      </h3>
                      <div class="teacher_info">
                          <div class="grade">
                              <span class="place">디딤 초등학교</span>
                              <span class="num_circle">1</span>
                              학년
                          </div>
                          <div class="name">
                              <span>디딤돌</span> 선생님
                          </div>
                      </div>
                      <div class="button_wrap">
                          <button class="basic_btn whiteOg confirm_btn">
                              교사인증
                          </button>
                          <button class="basic_btn whiteOg myClass_btn" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}my_page/grade_setting.html'">
                              마이클래스
                          </button>
                      </div>
                      <div class="link_wrap">
                          <a href="#" onclick="return false;" class="link">
                              로그아웃
                          </a>
                          <span class="deco"></span>
                          <a href="${fileRoute.includes(file[0]) ? "../" : ""}service_center/notice.html" class="link">
                              고객센터
                          </a>
                      </div>
                  </div>
                  `
                  :`
                  <!-- 로그인 전 레이아웃 -->
                  <form>
                      <fieldset>
                          <ul>
                              <li>
                                  <input type="text" class="id_input" placeholder="아이디를 입력해 주세요.">
                              </li>
                              <li>
                                  <input type="password" class="pw_input" placeholder="비밀번호를 입력해 주세요.">
                              </li>
                          </ul>
                          <div class="chk_wrap">
                              <input type="checkbox" id="id_save" class="chk">
                              <label for="id_save">
                                  아이디 저장
                              </label>
                          </div>
                          <button type="button" class="basic_btn orange login_btn">
                              로그인
                          </button>
                          <a href="${fileRoute.includes(file[0]) ? "../" : ""}sign_inup/id_pw_find.html" class="link">
                              아이디 또는 비밀번호를 잊어버리셨나요?
                          </a>
                      </fieldset>
                  </form>
                  `
                }
            </div>
            <!-- 사이드 gnb -->
            <ul class="side_gnb">
                <li class="login">
                    <a href="${fileRoute.includes(file[0]) ? "../" : ""}sign_inup/sign_in.html" class="link"></a>
                    <div class="hover_bubble">
                        로그인
                    </div>
                </li>
                <li class="tool">
                    <a href="#" onclick="return false;">
                        수업도구
                    </a>
                    <div class="hover_bubble">
                        수업도구
                    </div>
                    <ul class="sec_depth">
                        <li>
                            <a href="${fileRoute.includes(file[0]) ? "../" : ""}class_tool/timer.html" target="blank" class="link">
                                타이머
                            </a>
                        </li>
                        <li>
                            <a href="${fileRoute.includes(file[0]) ? "../" : ""}" onclick="return false;" class="link">
                                스톱워치
                            </a>
                        </li>
                        <li>
                            <a href="${fileRoute.includes(file[0]) ? "../" : ""}" onclick="return false;" class="link">
                                사다리타기
                            </a>
                        </li>
                        <li>
                            <a href="${fileRoute.includes(file[0]) ? "../" : ""}" onclick="return false;" class="link">
                                칠판
                            </a>
                        </li>
                        <li>
                            <a href="${fileRoute.includes(file[0]) ? "../" : ""}" onclick="return false;" class="link">
                                각도기
                            </a>
                        </li>
                        <li>
                            <a href="${fileRoute.includes(file[0]) ? "../" : ""}" onclick="return false;" class="link">
                                집중벨
                            </a>
                        </li>
                        <li>
                            <a href="${fileRoute.includes(file[0]) ? "../" : ""}" onclick="return false;" class="link">
                                화면 가리기
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="bank">
                    <a href="${fileRoute.includes(file[0]) ? "../" : ""}evaluation_data/problem_bank.html" target="blank">
                        문제은행
                    </a>
                    <div class="hover_bubble">
                        문제은행
                    </div>
                </li>
                <li class="parish">
                    <a href="${fileRoute.includes(file[0]) ? "../" : ""}digitalClass_data/deigitalClass_math.html">
                        디지털 수학 교구
                    </a>
                    <div class="hover_bubble">
                        디지털 수학 교구
                    </div>
                </li>
                <li class="video">
                    <a href="${fileRoute.includes(file[0]) ? "../" : ""}digitalClass_data/deigitalClass_science.html">
                        과학 실험 영상
                    </a>
                    <div class="hover_bubble">
                        과학 실험 영상
                    </div>
                </li>
                <li class="data">
                    <a href="${fileRoute.includes(file[0]) ? "../" : ""}digitalClass_data/deigitalClass_social.html">
                        지역화 자료실
                    </a>
                    <div class="hover_bubble">
                        지역화 자료실
                    </div>
                </li>
            </ul>
            <!-- 상단 이동 버튼 -->
            <div class="top_btn">
                <div class="icon_box"></div>
                <span>Top</span>
            </div>
        </div>
    </div>
    `;

    this.innerHTML = sideMenu;
  }
}

// 푸터-----------------------------------------------
class DidimdolFooter extends HTMLElement {
  constructor() {
    super();
  }

  // 문서의 DOM에 처음 연결될 때 호출
  connectedCallback() {
    this.render();
  }

  // 해당요소가 새로운 문서로 이동 될 때마다 호출 된다.
  adoptCallback() {}

  // 사용자 정의 요소의 속성 중 하나가 추가, 제거 또는 변경될 때 호출
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  // 문서의 DOM에서 연결 해제될 때 호출
  disconnectedCallback() {}

  render() {
    let fileName = document.URL.split("/");
    let file = [fileName[fileName.length - 2], fileName[fileName.length - 1]];

    let fileRoute = [
      "classPlus_data",
      "d_quiz",
      "default",
      "digitalClass_data",
      "evaluation_data",
      "share",
      "sign_inup",
      "my_page",
      "service_center",
      "event",
    ];

    console.log(fileRoute.includes(file[0]), file[0], "footer");

    let pcFooter = `
    <footer id="footer">
        <div class="wrap_inner">
            <div class="left">
                <ul class="foot_gnb">
                    <li>
                        <a href="${fileRoute.includes(file[0]) ? "../" : ""}privacy_policy.html" class="link">
                            개인정보 수집 이용안내
                        </a>
                    </li>
                    <li>
                        <a href="${fileRoute.includes(file[0]) ? "../" : ""}privacy_statement.html" class="link">
                            이용약관
                        </a>
                    </li>
                    <li>
                        <a href="${fileRoute.includes(file[0]) ? "../" : ""}" onclick="return false;" class="link">
                            원격지원서비스
                        </a>
                    </li>
                </ul>
                <address>
                    <span>(주)디딤돌교육<span>
                    <br>
                    <span>03972 서울특별시 마포구 월드컵북로 122 청원선와이즈타워</span>
                    <br>
                    <span class="has_deco">대표이사 이기열</span>&ensp;&ensp;&ensp;<span class="has_deco">사업자등록번호 105-81-69017</span>&ensp;&ensp;&ensp;<span>고객센터 02-3146-0090</span>
                </address>
                <p class="copylight">
                    Copylight DIDIMDOL corp. All Right Reserved
                </p>
            </div>
            <h1 class="logo"></h1>
        </div>
    </footer>
    `;

    this.innerHTML = pcFooter;
  }
}


window.customElements.define("didimdol-header", DidimdolHeader);
window.customElements.define("didimdol-sidemenu", DidimdolSideMenu);
window.customElements.define("didimdol-footer", DidimdolFooter);
