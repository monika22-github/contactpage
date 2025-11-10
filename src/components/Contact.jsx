const Contact = () => {
  return (
    <div className="main">
      <h1 className="head">CONTACT US</h1>
      <p className="head">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
      <div className="hero-div">
        <div className="hero-div" id="content-div">
          <form action="get">
            <div className="btn">
              <button className="callbtn" id="chat">
                <img src="src\assets\ic_outline-message.png" alt="" />
                VIA SUPPORT CHAT
              </button>
              <button className="callbtn" id="call">
                <img src="src\assets\ic_baseline-phone.png" alt="" />
                VIA CALL
              </button>
              <button id="emailbtn">
                <img src="src\assets\ic_outline-message.png" alt="" />
                VIA EMAIL FORM
              </button>
            </div>
            <h1 class="bg-*"></h1>

            <div className="formcontent">
              <input type="text" name="Name" id="Name" placeholder="Name" />
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="E-Mail"
              />
              <textarea name="textarea" id="" placeholder="Text"></textarea>
            </div>
            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="hero-div" id="image-div">
          <img
            src="src\assets\Service 24_7-pana 1.png"
            alt=""
            width={"500px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
