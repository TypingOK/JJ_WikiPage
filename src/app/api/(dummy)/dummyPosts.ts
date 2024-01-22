const dummys = [
  {
    title: "JavaScript 기초 강의",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "React 프로젝트 실습",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "Node.js와 Express로 서버 구축하기",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "Git과 GitHub 협업 가이드",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "Python 데이터 분석 강좌",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "웹 개발 기초",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "Vue.js 실전 프로젝트",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "Django로 블로그 만들기",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "Git 고급 활용",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
  {
    title: "머신러닝 기초 이론",
    content: `오늘은 Next.js에 대해 배워보도록 하겠습니다.
        <br />
        **Next.js란**
        -
        Next.js는 React 프레임워크 중 하나입니다.
        <br />
        [50번째 강의 머신러닝 기초 이론](http://localhost:3000/50번째%20강의%20머신러닝%20기초%20이론)
        <br />
        위 링크를 눌러서 이동하여 확인 해보도록 합시다.
        `,
  },
];

export const dummyPosts = Array.from({ length: 62 }, (_, index) => ({
  id: index + 1,
  title: index + 1 + "번째 강의 " + dummys[index % 10].title,
  content: dummys[index % 10].content,
}));
