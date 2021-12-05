import React from "react";

let time = new Date().getHours();
let greet = "";
let cssStyle = {};
if ((time >= 0) & (time < 12)) {
  greet = "Good morning";

  cssStyle.color = "green";
} else if ((time > 12) & (time <= 19)) {
  greet = "Good Afternoon";

  cssStyle.color = "yellow";
} else {
  greet = "Good evening";
  cssStyle.color = "red";
}
const App = () => {
  return (
    <>
      <div>
        <h2>
          hello Sir, <span style={cssStyle}>{greet}</span>
        </h2>
      </div>
    </>
  );
};
export default App;
