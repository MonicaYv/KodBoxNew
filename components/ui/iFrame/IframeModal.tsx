import { useState } from "react";
import { CircleX, Minimize, Maximize } from "lucide-react";

interface IframeModalProps {
    url: string;
    onClose: () => void;
}

const IframeModal: React.FC<IframeModalProps>= ({ url, onClose }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleSize = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`fixed transition-all duration-300 ${
        isFullScreen ? "w-full h-full" : "w-2/4 h-2/4"
      } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      style={{ zIndex: 1000 }}
    >
      <div className="w-full h-8 relative bg-slate-800">
        <div className="absolute top-0 right-0 flex space-x-2">
          <button
            onClick={toggleSize}
            className="bg-gray-800 text-white p-2 rounded"
          >
            {isFullScreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-800 text-white p-2 rounded"
          >
            <CircleX size={16} color="#fa0000" />
          </button>
        </div>
      </div>
      <iframe
        src={url}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default IframeModal;