import { FaUser, FaEnvelope } from 'react-icons/fa';

export function Header() {
  return (
    <header className="w-full h-20 bg-blue-400 text-white p-10 flex items-center justify-end">
      <div className="flex items-center gap-6">
       
        <FaUser size={22} className="cursor-pointer" />
        <FaEnvelope size={22} className="cursor-pointer" />
        
      </div>
    </header>
  );
}
