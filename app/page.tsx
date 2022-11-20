import MyBody from './MyBody';
import Header from './Header';

function Home() {
  return (
    <main className="bg-gray-100">
      <Header />
      {/* @ts-ignore */}
      <MyBody />
    </main>
  );
}

export default Home;
