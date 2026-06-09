import "./HelpDesk.css";
import HelpDeskIcon from "./assets/help-desk-icon.png"
function HelpDeskChat({ onClose }: { onClose: () => void }) {
    return (
        <div className="chatbot-container">

            <div className="chat-header">
                <div className="header-left">
                    <img src={HelpDeskIcon} alt="Help Desk Icon" />
                    <span>Help Desk</span>
                </div>

                <button onClick={onClose}>×</button>
            </div>

            <div className="chat-body">

                <div className="bot-message">
                    Lorem Ipsum dolor sit amet
                </div>

                <div className="user-message">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>

                <div className="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className="chat-footer">

                <input
                    type="text"
                    placeholder="Type your message here..."
                />

                <button className="send-btn">
                    ➤
                </button>

            </div>

        </div>
    );
}

export default HelpDeskChat;