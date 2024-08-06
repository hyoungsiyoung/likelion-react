import Counter from '@/components/Counter/Counter';
import CounterClass from '@/components/Counter/Counter.class';

function Playground() {
  return (
    <>
      <Counter count={3} min={2} max={6} />
      <CounterClass min={9} count={10} step={10} />
    </>
  );
}

export default Playground;
