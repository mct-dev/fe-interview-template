import React from "react";

export function Counter() {
  const countRef = React.useRef(0);

  React.useEffect(() => {
    console.log(countRef.current);
  }, [countRef.current]);

  const increment = () => (countRef.current += 1);

  return (
    <div className="mt-4">
      <button
        onClick={increment}
        className="border border-1 border-gray-400 px-4 py-1 rounded-full shadow"
      >
        Click me and check console
      </button>
    </div>
  );
}
