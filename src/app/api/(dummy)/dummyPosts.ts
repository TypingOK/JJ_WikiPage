const dummys = [
  {
    title: "JavaScript 기초 강의",
    content: `(50번째 강의 머신러닝 기초 이론)[http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론] <a href="http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론">50번째 강의 머신러닝 기초 이론</a> 오늘은 JavaScript의 기초 개념을 다뤄보겠습니다. 변수, 함수, 제어문 등에 대해 자세히 살펴보며 기본 개념을 익히는 시간을 가지도록 합시다.`,
  },
  {
    title: "React 프로젝트 실습",
    content:
      "React를 활용하여 간단한 웹 애플리케이션을 만들어보는 프로젝트 실습을 진행합니다. 컴포넌트, 상태 관리, 라우팅 등을 다루면서 실전에서의 적용 능력을 키워봅시다.",
  },
  {
    title: "Node.js와 Express로 서버 구축하기",
    content:
      "Node.js와 Express를 사용하여 간단한 서버를 만들어보는 수업입니다. 라우팅, 미들웨어, 데이터베이스 연동 등을 다루면서 서버 개발에 대한 기초를 다져봅시다.",
  },
  {
    title: "Git과 GitHub 협업 가이드",
    content:
      "효율적인 개발을 위한 Git과 GitHub 협업 전략에 대해 알아봅시다. 브랜치 전략, 충돌 해결, 프로젝트 관리 등을 다뤄보며 협업에 필요한 기술을 익히는 시간을 가지겠습니다.",
  },
  {
    title: "Python 데이터 분석 강좌",
    content:
      "Python을 활용하여 데이터를 분석하는 방법에 대해 학습합니다. Pandas, Matplotlib, Seaborn 등을 사용하여 데이터 시각화와 분석 기술을 향상시켜봅시다.",
  },
  {
    title: "웹 개발 기초",
    content:
      "HTML, CSS, JavaScript를 사용하여 웹 페이지를 구축하는 기초 강의입니다. 각 언어의 기본 문법과 기능을 학습하고 실습을 통해 익힙니다.",
  },
  {
    title: "Vue.js 실전 프로젝트",
    content:
      "Vue.js를 활용하여 다양한 기능을 갖춘 웹 애플리케이션을 제작하는 프로젝트입니다. 컴포넌트 구조, 상태 관리, 라우팅을 실습합니다.",
  },
  {
    title: "Django로 블로그 만들기",
    content:
      "Python 기반의 웹 프레임워크인 Django를 사용하여 블로그를 만드는 수업입니다. 모델, 뷰, 템플릿 등의 기능을 다루며 웹 애플리케이션을 구현합니다.",
  },
  {
    title: "Git 고급 활용",
    content:
      "Git의 고급 기능과 전략적인 활용 방법에 대해 다루는 수업입니다. 리베이스, 서브모듈, 훅 등을 이용하여 프로젝트를 효율적으로 관리합니다.",
  },
  {
    title: "머신러닝 기초 이론",
    content:
      "머신러닝의 기본 이론과 알고리즘을 학습하는 강의입니다. 선형 회귀, 분류, 군집화 등의 개념을 이해하고 간단한 머신러닝 모델을 만듭니다.",
  },
];

export const dummyPosts = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  title: index + 1 + "번째 강의 " + dummys[index % 10].title,
  content: dummys[index % 10].content,
}));
