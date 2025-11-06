import Sidebar from '../common/Sidebar';
import Navbar from '../common/Navbar';
import DisclaimerBanner from '../common/DisclaimerBanner';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <DisclaimerBanner />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
