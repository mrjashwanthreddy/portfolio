import { profile } from '../../data/site'
import './resume.css'
import { FaCloudDownloadAlt } from "react-icons/fa";

export function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-container">
        <div className="paper-wrap" aria-hidden="false">
           <img
            src="/resume-preview.jpg"
            alt={`${profile.name} resume preview`}
            className="resume-image"
          />
        </div>

        <div className="download-wrap">
          <a className="download-btn" href={profile.resumeUrl} download aria-label="Download resume PDF">
            <span className="download-text">Download</span>
            <FaCloudDownloadAlt className="download-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </main>
  )
}