import { AiOutlineProduct } from "react-icons/ai";

export default function Header() {
  return (
    <div className="bg-indigo text-slate-600 flex items-center justify-center gap-2 h-[124px]">
      <AiOutlineProduct fontSize="40px" />
      <span className="text-4xl font-bold text-center">Product Ngub</span>
    </div>
  );
}
// gap-2 ระยะห่างระหว่างตัวไอคอนกับ product
// h ความสูง
