import { useCallback } from 'react';
import S from './style.module.css';
import useClock from '@/hooks/useClock';
import TimeToggler from './TimeToggler';
import Counter from '../Counter';

// TimeToggler 함수 참조
// 컴포넌트를 기억하자!
// 기억된 컴포넌트 = React.memo(컴포넌트참조)
// 캐싱된(기억된) 컴포넌트는 속성이 변경되지 않는한 다시 렌더링 되지 않는다.
// const MemoizedTimeToggler = React.memo(TimeToggler);

function TimeAndCounter() {
  const { time, turnOn, onOff } = useClock();

  const handleToggleTime = useCallback(() => onOff((c) => !c), [onOff]);

  const label = `타임 ${turnOn ? '스톱' : '플레이'}`;

  return (
    <div className={S.component}>
      <div role="group" className={S.group}>
        <time>{time}</time>
        <TimeToggler onToggle={handleToggleTime}>{label}</TimeToggler>
      </div>
      <Counter />
    </div>
  );
}

export default TimeAndCounter;