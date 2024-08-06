// import { UsersPage } from '@/pages/users';
import Counter from '@/components/Counter/Counter';

function Playground() {
  return (
    <div style={styles}>
      <Counter min={0} count={3} max={5} />
      {/* <UsersPage /> */}
    </div>
  );
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

export default Playground;
