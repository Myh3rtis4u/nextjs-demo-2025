import { Button, Input, InputGroup } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function FormComponent({ onSearch }) {
  const [textSearch, setTextSearch] = useState("");
  console.log("-textSearch-", textSearch);
  return (
    <div className="bg-blue-50 py-6 px-4">
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(textSearch);
        }}
      >
        <InputGroup className="max-w-md">
          <Input
            placeholder="Search products"
            value={textSearch}
            onChange={(event) => setTextSearch(event.target.value)}
          />
        </InputGroup>

        <Button
          color="success"
          size="sm"
          type="submit"
          className="flex! items-center gap-1"
        >
          <FaSearch />
          Search
        </Button>
      </form>
    </div>
  );
}
// py คือ padding top, bottom รวมกัน
// flex-col
// sm ขนาด เรสป้อนซีฟของแท้บเล้ต ไอแพด
// max-w-md จัดหน้าจอ ไม่ให้ยาวเกิน
// event.preventDefault freeze หน้า ไม่ให้ขึ้นหน้า load
