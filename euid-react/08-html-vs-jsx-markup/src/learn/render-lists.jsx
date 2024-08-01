import { array } from '../utils/prop-types';

function RenderLists({ items /* string[], Array<string> */ }) {
  // 함수 내부에 리스트 렌더링 코드를 작성해보세요.
  // react.d.ts
  // { @@typeof: 'Symbol(react.element)', ... }
  // JSDOC
  /**@type{() => React.ReactElement} */
  const renderList = ({ reverse = false } = {}) => {
    //reverse array 옵션을 전달하지 않으면 기본 값은 빈 객체가 된 상태 / 비어있어서 reverse가 없네? 하면 false가 된다.
    // const {reverse = false} = options;
    // console.log({reverse})

    let listItems = items; //items 받기 / 대기 -> 로딩 실패 순

    if (reverse) {
      //listItems = items.reverse(); //reverse가 필요할 때 할당하기 (원본 자체를 변경함)
      listItems = items.toReversed(); //복사해서 새로운 배열을 반환한다.
    }

    // 리스트 렌더링 결과 반환
    // - [ ] Array.prototype.forEach?
    // - [x] Array.prototype.map?
    return items.map((item) /* string */ => {
      // console.log(item);
      // JSX(React Element) Markup
      return <li key={item}>{item}</li>;
    });
  };

  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>상태 메시지(status messages) 배열을 리스트 렌더링합니다.</p>
        <ul className="renderList">{renderList?.()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status messages) 배열을 역순 정렬하여 렌더링합니다.</p>
        <ul className="renderList">{renderList?.({ reverse: true })}</ul>
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다.
        </p>
        <dl className="reactLibrary">
          {/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}
        </dl>
      </dd>
    </>
  );
}

export default RenderLists;

RenderLists.propTypes = {
  // items: oneOf(statusMessages)
  items: array, // [권장] arrayOf(string) | arrayOf(number)
};
