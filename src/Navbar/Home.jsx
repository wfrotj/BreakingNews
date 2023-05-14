import React from "react";

function Home() {
  return (
    <div>
      <form>
        <label>What are your plans for today?</label>
        <input type="text" className="w-40 border-black" />
      </form>
      <h1 className="text-2xl">Welcome</h1>
    </div>
  );
}

export default Home;
