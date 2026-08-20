"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumePreview() {
  const resumeUrl = "/Karthik_Reddy_GraduateEngineer.pdf";

  return (
    <div className="resume-preview-page">
      <header className="resume-header">
        <Link href="/" className="resume-header-brand">
          KR<span> / portfolio</span>
        </Link>
        
        <div className="resume-header-actions">
          <Link href="/" className="resume-btn resume-btn-back">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          
          <a
            href={resumeUrl}
            download="Karthik_Reddy_Resume.pdf"
            className="resume-btn resume-btn-download"
          >
            <Download size={14} /> Save / Download Résumé
          </a>
        </div>
      </header>

      <main className="resume-viewer-container">
        <iframe
          src={resumeUrl}
          title="Karthik Reddy Resume"
          className="resume-iframe"
        />
      </main>
    </div>
  );
}
