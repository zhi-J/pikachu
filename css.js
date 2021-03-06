const string = `
.skin * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  
  .skin {
    background: #ffe600;
    min-height: 50vh;
    position: relative;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    position: relative;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 140px;
    margin-left: -10px;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 8px;
    top: -18px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
  }
  .eye {
    border: 2px solid black;
    position: absolute;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::after {
    position: relative;
    border: 2px solid black;
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    left: 4px;
    top: 2px;
    background: white;
    border-radius: 50%;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    position: relative;
    width: 200px;
    height: 200px;
    top: 160px;
    left: 50%;
    margin-left: -100px;
  }
  .mouth.up {
    position: relative;
  }
  .mouth .up .lip {
    position: absolute;
    border: 3px solid black;
    height: 30px;
    width: 100px;
    left: 50%;
    top: -5px;
    background: #ffe600;
    z-index: 1;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-top: none;
    border-right: none;
    transform: rotate(-15deg);
    margin-left: -100px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-top: none;
    border-left: none;
    transform: rotate(15deg);
    /* margin-left: -5px; */
  }
  .mouth .down {
    position: absolute;
    width: 100%;
    height: 180px;
    top: 5px;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    bottom: 0;
    border-radius: 100px/300px;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    background: #ff485f;
  }
  .face {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    margin-left: -44px;
    top: 200px;
    border-radius: 50px;
    background: #ff0000;
  }
  .face.left {
    transform: translateX(-180px);
  }
  .face.right {
    transform: translateX(180px);
  }
  
`;
export default string;
