import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { GrGithub, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
const StickyCalButton = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 border-2 border-slate-800 bg-card/90 backdrop-blur-md rounded-xl shadow-lg px-4 py-2  ">
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
        {/* Social Links */}
        <div className="flex gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/adarsh-singh-183357262",
                "_blank"
              )
            }
          >
            <GrLinkedin className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10"
            onClick={() =>
              window.open("https://github.com/AdarshSingh9540", "_blank")
            }
          >
            <GrGithub className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10"
            onClick={() => window.open("https://x.com/adarsh9540", "_blank")}
          >
            <BsTwitterX className="w-5 h-5" />
          </Button>
          {/* <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10"
            onClick={() =>
              window.open(
                "https://www.instagram.com/adarshsingh9540/",
                "_blank"
              )
            }
          >
            <GrInstagram className="w-5 h-5" />
          </Button> */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10"
            onClick={() => window.open("mailto:singhadarsh9540@gmail.com")}
          >
            <Mail className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1aRbyJQukD2fjGQykCrTwA4G9d0YQvmUR/view",
                "_blank"
              )
            }
          >
            <FaFileDownload className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCalButton;
