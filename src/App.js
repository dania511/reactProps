import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'; 
import ProfileComponent from "./profile/ProfileComponent";

function App() {
  const handleName = (name) => {
    alert(`Welcome to my profiel, I'm Bill Gates`);
  };
    return (
      <div>
    
    <ProfileComponent FullName="Bill Gates"
                      bio=" I grew up in Seattle, Washington, with an amazing and supportive family who encouraged my interest in computers at an early age. I dropped out of college to start Microsoft with his childhood friend Paul Allen"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewQFUB_Pxn6CUOIGv5qC0FlcDTQRXbbmb2A&usqp=CAU" 
                      profession="Technologist, business leader, and philanthropist"
                      handleName={handleName}
                      />  
      </div>






    );
}

export default App;
        /*Set Prop Types*/
        ProfileComponent.PropTypes = {
                                    FullName: PropTypes.string,
                                    bio: PropTypes.string,
                                    profession: PropTypes.string,
                                    image: PropTypes.string,
                                  };
        /*Set default props*/
      ProfileComponent.defaultProps = {
        FullName: "uncknown",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXEzN/////Byd3w8fbg5O7Byd7s7/X29/rI0OHo6/K/yt3Q1uXT2efHz+H3+Pza3+vj5++NOp0PAAAFIElEQVR4nO2dCbqrIAxGNYoo6rX7X+3TTna0WhL505ezAs8HJGE0ywzDMAzDMAzDmCBH5FJ/hAhElNV13ZVNVTVDn/pzmAlUd0PlfX6l+p1mnJpuKIv8gS71d/FAFOry2S7Pizr1p3EwjrpD5Z/tRhpK/XHREPVD8dpuElQ/BolK//dOL8/LkPoD4wiue9t4J5SPwbpZ1tNtSNmn5jvSao0zY9pb4zcy6FR0wzq9CV/rCza0qn/OlMqakfpqk99I0WtyDBs66EynpqeG7EXhuYZSSWlD3Xd+I4WKjrolhD7hFQxG+lzCLAKf/WlzDH1kwI43LlpwVESON/EtOHHA7ah04BAELlPD92lCiWLNJThG1NQuL3HbSu1lECfFVDIK5j61zis4BRHXFwNLorhhSG30SM8smOepjR7gHYVH0FZROQPpGaz9tpZfECvvx86ZXgKVMUQMoSqbIDAMsTZNSUIQag01mKEZmmFyzPA7qp83RFrkl8mHZrgnElMLM9wXMzRDM0yPGZqhGSZHYMXbDHfGDM3QDNNjhmZohukxQzM0w/SYoRmaYWoocz9uKHKW5mjY1whn24R66BmEk19cVxDeAHAu6j8wjLmrpsJQaDX4AsL5RJk9/DMIkUbYEOEim6whRNL/eUMSq2n+C0OIy0E8F0ffGSJcK5E5p38G4s6FaFGDcb9LsqhBKGlYb8c+gZDwJS7mzSAMw0xwko+RDkVniBDpMJMMNShXuuUGIkK+nxDrpiidVC5foHRSsbIGZkU4k6q+cZpwQiAnIiyzzQT+CQbYQzyBP5xiTCtm+LM+wqbMLayv00xArCPe4rgHIsT6xR3cKRHpAukJ7oGINgzZy2+keuaM4zVEugN8hnlhGKugOcI7hYLYVXuENdQADkPmgYhWsh1hnUGhFTQnGPMFYCQ9whdNsea+V/jWMuCq7itcjQiYDE9EvOR9B2QyPEFfPsb+AGwTZkzhtEhtsQRLPwUNpGcYTgtDbN0vEF3ZHGAzxYVYxdTfv4LICjz1568gzhA4F16J22r7S/35K4ibCSswjKy/NRjGZUQNhnHZQoNhXPWtwNAt/MpxBQqyRWTCh55YnIg0RF2DuiFyiqjAMPL0kALDyDmwGaYn9kqpAsPITTYFhpFTfHzD2HM14Ibj19WxhnUPd5Bmpq88x85FldrjLWxnFXAOP9/DeFQBdNWbcR8fNNxwnsXAXPfmfB8Dsg1Zj2JgXMp7wPHsjgIbsl7LxztcOsFpCHIr7w7mh3gQuynv4Uu8k3vsbynBlTXsDyvAHdVn+53zldRGD7D/SRYvYbAL5hVSbUoib+4RjCK5lrNgmzlkIB1V8M0932WJQyplneTjNBNNm7AlXT9IPi90wQ99EsdAneTLO/c0ndu7t4as3KP5Zny564h0dbOv35Gm3amzkutkksNndmnIIPsg6yf+GuGoQ/1+0eUdviUpScqEapfNDLWEI+2T/FZSddyO1CYdfi/wA2et49r0w+8FB6aoQ5QsO3ykakO0ZCCk4feMH+Ii65j9oP0m/MF97UjCT3Wz0XwXdKhGC58LFNtrVqqlp7bMFNtmyoSZHpbx3WpHde13YZx7rHFU6zexwlG135HlSidkCsffEwvJI+3slpHydRHg+PeP0vHi5RBq4euzbTxdeVdSoG3At+62AVN/jgjzGUfRd+NTUpyeRAu/NgJv8JNi+KUQ+oTne48EFS9wiAIM0Z/EQGCG+jFD/ZihfsxQP2aon983/AdpdWPMVq8glgAAAABJRU5ErkJggg==",
      };

